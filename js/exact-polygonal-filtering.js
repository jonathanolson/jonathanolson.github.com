// for the Exact Polygonal Filtering article
// by Jonathan Olson

{
  window.deviceContextPromise = phet.alpenglow.DeviceContext.getDevice().then( device => {
    if ( device ) {
      return new phet.alpenglow.DeviceContext( device );
    }
    else {
      return null;
    }
  } );

  ( async () => {
    const deviceContext = await deviceContextPromise;

    if ( !deviceContext ) {
      document.getElementById( 'no-webgpu-0' ).style.display = 'block';
    }

    const v2 = phet.dot.v2;
    const v3 = phet.dot.v3;
    const v4 = phet.dot.v4;

    const boxCanvas = document.getElementById( 'siemens-box' );
    const bilinearCanvas = document.getElementById( 'siemens-bilinear' );
    const canvasCanvas = document.getElementById( 'siemens-canvas' );
    const svg = document.getElementById( 'siemens-svg' );

    const outputWidth = 128;
    const outputHeight = 192;
    const rasterWidth = Math.ceil( outputWidth * window.devicePixelRatio );
    const rasterHeight = Math.ceil( outputHeight * window.devicePixelRatio );

    for ( const canvas of [ boxCanvas, bilinearCanvas, canvasCanvas ] ) {
      canvas.width = rasterWidth;
      canvas.height = rasterHeight;
      canvas.style.width = `${outputWidth}px`;
      canvas.style.height = `${outputHeight}px`;
    }
    svg.setAttribute( 'width', outputWidth );
    svg.setAttribute( 'height', outputHeight );

    const numRasterizers = 1;
    const rasterizers = deviceContext ? _.range( 0, numRasterizers ).map( i => new phet.alpenglow.FaceRasterizer( {
      deviceContext: deviceContext,

      supportsGridFiltering: true,
      supportsBilinear: true,
      supportsMitchellNetravali: false,
    } ) ) : null;

    const boxCanvasContext = deviceContext ? deviceContext.getCanvasContext( boxCanvas, 'srgb' ) : boxCanvas.getContext( '2d' );
    const bilinearCanvasContext = deviceContext ? deviceContext.getCanvasContext( bilinearCanvas, 'srgb' ) : bilinearCanvas.getContext( '2d' );
    const canvasContext = canvasCanvas.getContext( '2d' );
    const svgPath = document.createElementNS( 'http://www.w3.org/2000/svg', 'path' );
    svgPath.setAttribute( 'style', 'fill: black; stroke: none;' );
    svg.appendChild( svgPath );

    const blackProgram = new phet.alpenglow.RenderColor( phet.dot.v4( 0, 0, 0, 1 ) );
    const whiteProgram = new phet.alpenglow.RenderColor( phet.dot.v4( 1, 1, 1, 1 ) );

    const numRadialVertices = 200;

    const centerVertex = phet.dot.v2( rasterWidth / 2, rasterWidth / 2 );
    const innerVertices = _.range( 0, numRadialVertices ).map( i => {
      const theta = i * 2 * Math.PI / numRadialVertices;
      return phet.dot.Vector2.createPolar( rasterWidth * 0.4, theta ).add( centerVertex );
    } );

    const renderableFaces = _.range( 0, numRadialVertices ).map( i => {
      return new phet.alpenglow.RenderableFace(
        new phet.alpenglow.PolygonalFace( [
          [ centerVertex, innerVertices[ i ], innerVertices[ ( i + 1 ) % numRadialVertices ] ]
        ] ),
        i % 2 === 0 ? blackProgram : whiteProgram,
        new phet.dot.Bounds2( 0, 0, rasterWidth, rasterWidth )
      );
    } );

    const checkerboardRenderableFaces = [];

    const checkerXMin = -35;
    const checkerXMax = 35;
    const checkerY = -5;
    const checkerZMin = 4;
    const checkerZMax = 80;

    { // Initialize checker faces
      for ( let x = checkerXMin; x < checkerXMax; x++ ) {
        for ( let z = checkerZMin; z < checkerZMax; z++ ) {
          checkerboardRenderableFaces.push( new phet.alpenglow.RenderableFace(
            new phet.alpenglow.PolygonalFace( [
              [ phet.dot.v2( 0, 0 ), phet.dot.v2( 0, 0 ), phet.dot.v2( 0, 0 ), phet.dot.v2( 0, 0 ) ]
            ] ),
            ( x + z ) % 2 === 0 ? whiteProgram : blackProgram,
            new phet.dot.Bounds2( 0, 0, rasterWidth, rasterHeight )
          ) );
        }
      }
      renderableFaces.push( ...checkerboardRenderableFaces );
    }

    const updateCheckers = ( diff ) => {
      const dl = 10;

      const projectionMatrix = phet.alpenglow.RenderDepthSort.getProjectionMatrix( 1, 100, -1, -1, 1, 1 );
      const rotationMatrix = phet.dot.Matrix3.rotationY( 0.1 * Math.cos( diff ) ).timesMatrix( phet.dot.Matrix3.rotationX( 0 ) );
      const dlv = v3( 0, 0, dl );

      const scratch2 = v2( 0, 0, 0 );
      const scratch3 = v3( 0, 0, 0 );
      const scratch4 = v4( 0, 0, 0, 0 );

      const matrix = phet.dot.Matrix3.scaling( rasterHeight / 3 ).timesMatrix( phet.dot.Matrix3.translation( 1, 0, 0 ) );

      const project = ( p3, p2 ) => {
        // a rotation, for testing
        p3.subtract( dlv );
        rotationMatrix.multiplyVector3( p3 )
        p3.add( dlv );

        const clip = projectionMatrix.timesVector4( scratch4.setXYZW( p3.x, p3.y, p3.z, 1 ) );

        p2.setXY( clip.x / clip.w, -clip.y / clip.w );
        matrix.multiplyVector2( p2 );
        p2.addXY( 0, 256 );
      };

      let y = checkerY + Math.cos( diff / 3 );

      let i = 0;
      for ( let x = checkerXMin; x < checkerXMax; x++ ) {
        for ( let z = checkerZMin; z < checkerZMax; z++ ) {
          const points = checkerboardRenderableFaces[ i++ ].face.polygons[ 0 ];
          project( scratch3.setXYZ( x, y, z + 1 ), points[ 0 ] );
          project( scratch3.setXYZ( x + 1, y, z + 1 ), points[ 1 ] );
          project( scratch3.setXYZ( x + 1, y, z ), points[ 2 ] );
          project( scratch3.setXYZ( x, y, z ), points[ 3 ] );
        }
      }
    };
    updateCheckers( 0 );

    const reference = Date.now();

    let count = 0;
    const step = () => {
      if ( rasterizers ) {
        requestAnimationFrame( step );
      }

      const timeDelta = Date.now() - reference;

      const offsetAmount = rasterWidth * 0.05;
      const offsetAngle = timeDelta / 1000;
      const rotateAngle = timeDelta / 5000;
      const offset = phet.dot.Vector2.createPolar( offsetAmount, offsetAngle ).addXY( rasterWidth / 2, rasterWidth / 2 );

      centerVertex.set( offset );

      for ( let i = 0; i < numRadialVertices; i++ ) {
        const theta = i * 2 * Math.PI / numRadialVertices + rotateAngle;
        innerVertices[ i ].setPolar( rasterWidth * 0.45, theta ).add( centerVertex );
      }
      updateCheckers( timeDelta / 1000 );

      if ( rasterizers ) {
        rasterizers[ count % numRasterizers ].run( {
          renderableFaces: renderableFaces,
          canvasContext: boxCanvasContext,
          rasterWidth: rasterWidth,
          rasterHeight: rasterHeight,
          colorSpace: 'srgb',
          filterType: phet.alpenglow.PolygonFilterType.Box,
          filterScale: 1
        } );

        rasterizers[ count % numRasterizers ].run( {
          renderableFaces: renderableFaces,
          canvasContext: bilinearCanvasContext,
          rasterWidth: rasterWidth,
          rasterHeight: rasterHeight,
          colorSpace: 'srgb',
          filterType: phet.alpenglow.PolygonFilterType.Bilinear,
          filterScale: 1
        } );
      }
      else {
        const rasterBox = new phet.alpenglow.CombinedRaster( rasterWidth, rasterHeight, {
          colorSpace: 'srgb'
        } );
        const rasterBilinear = new phet.alpenglow.CombinedRaster( rasterWidth, rasterHeight, {
          colorSpace: 'srgb'
        } );

        const program = new phet.alpenglow.RenderStack( [
          new phet.alpenglow.RenderPathBoolean(
            new phet.alpenglow.RenderPath( 'nonzero', renderableFaces.filter( face => face.renderProgram === blackProgram ).map( face => face.face.polygons[ 0 ] ) ),
            blackProgram,
            whiteProgram
          )
        ] );

        phet.alpenglow.Rasterize.rasterize( program, rasterBox, new phet.dot.Bounds2( 0, 0, rasterWidth, rasterHeight ), {
          polygonFiltering: phet.alpenglow.PolygonFilterType.Box
        } );
        phet.alpenglow.Rasterize.rasterize( program, rasterBilinear, new phet.dot.Bounds2( 0, 0, rasterWidth, rasterHeight ), {
          polygonFiltering: phet.alpenglow.PolygonFilterType.Bilinear
        } );

        rasterBox.writeToCanvas( boxCanvas, boxCanvasContext );
        rasterBilinear.writeToCanvas( bilinearCanvas, bilinearCanvasContext );
      }

      // Canvas
      {
        canvasContext.fillStyle = 'white';
        canvasContext.fillRect( 0, 0, rasterWidth, rasterHeight );

        canvasContext.fillStyle = 'black';
        canvasContext.beginPath();

        for ( let i = 0; i < renderableFaces.length; i++ ) {
          const renderableFace = renderableFaces[ i ];

          if ( renderableFace.renderProgram === whiteProgram ) { continue; }

          const vertices = renderableFace.face.polygons[ 0 ];

          canvasContext.moveTo( vertices[ 0 ].x, vertices[ 0 ].y );
          for ( let j = 1; j < vertices.length; j++ ) {
            canvasContext.lineTo( vertices[ j ].x, vertices[ j ].y );
          }
        }

        canvasContext.fill();
      }

      // SVG
      {
        const path = renderableFaces.map( renderableFace => {
          if ( renderableFace.renderProgram === whiteProgram ) { return ''; }

          const vertices = renderableFace.face.polygons[ 0 ];

          let path = `M${vertices[ 0 ].x} ${vertices[ 0 ].y} `;
          for ( let j = 1; j < vertices.length; j++ ) {
            path += `L${vertices[ j ].x} ${vertices[ j ].y} `;
          }

          return path;
        } ).join( '' );

        svgPath.setAttribute( 'd', `${path}Z` );
        svgPath.setAttribute( 'transform', `scale(${( 1 / window.devicePixelRatio ).toFixed( 15 )})` );
      }
    };
    step();
  } )();
}
