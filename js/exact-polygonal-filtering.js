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
      document.getElementById( 'only-webgpu-1' ).style.display = 'none';
      document.getElementById( 'no-webgpu-2' ).style.display = 'block';
    }

    const v2 = phet.dot.v2;
    const v3 = phet.dot.v3;
    const v4 = phet.dot.v4;

    const boxCanvas = document.getElementById( 'siemens-box' );
    const bilinearCanvas = document.getElementById( 'siemens-bilinear' );
    const canvasCanvas = document.getElementById( 'siemens-canvas' );
    const svg = document.getElementById( 'siemens-svg' );
    const blurCanvas = document.getElementById( 'blur-example' );

    let boxVisible = true;
    let bilinearVisible = true;
    let canvasVisible = true;
    let svgVisible = true;
    let blurVisible = true;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach( entry => {
        if ( entry.target === boxCanvas ) {
          boxVisible = entry.isIntersecting;
        }
        else if ( entry.target === bilinearCanvas ) {
          bilinearVisible = entry.isIntersecting;
        }
        else if ( entry.target === canvasCanvas ) {
          canvasVisible = entry.isIntersecting;
        }
        else if ( entry.target === svg ) {
          svgVisible = entry.isIntersecting;
        }
      } );
    } );
    observer.observe( boxCanvas );
    observer.observe( bilinearCanvas );
    observer.observe( canvasCanvas );
    observer.observe( svg );
    observer.observe( blurCanvas );

    const numRasterizers = 1;
    const rasterizers = deviceContext ? _.range( 0, numRasterizers ).map( i => new phet.alpenglow.FaceRasterizer( {
      deviceContext: deviceContext,

      supportsGridFiltering: true,
      supportsBilinear: true,
      supportsMitchellNetravali: false,
    } ) ) : null;

    // Combined Siemens star and checkerboard
    {
      const outputWidth = 128;
      const outputHeight = 192;
      const rasterWidth = Math.ceil( outputWidth * window.devicePixelRatio );
      const rasterHeight = Math.ceil( outputHeight * window.devicePixelRatio );

      let isFirstRender = true;

      for ( const canvas of [ boxCanvas, bilinearCanvas, canvasCanvas ] ) {
        canvas.width = rasterWidth;
        canvas.height = rasterHeight;
        canvas.style.width = `${outputWidth}px`;
        canvas.style.height = `${outputHeight}px`;
      }
      svg.setAttribute( 'width', outputWidth );
      svg.setAttribute( 'height', outputHeight );


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
          p2.addXY( 0, rasterHeight / 384 * 256 );
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

        if ( !isFirstRender && !boxVisible && !bilinearVisible && !canvasVisible && !svgVisible ) {
          return;
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
          if ( boxVisible || isFirstRender ) {
            rasterizers[ count % numRasterizers ].run( {
              renderableFaces: renderableFaces,
              canvasContext: boxCanvasContext,
              rasterWidth: rasterWidth,
              rasterHeight: rasterHeight,
              colorSpace: 'srgb',
              filterType: phet.alpenglow.PolygonFilterType.Box,
              filterScale: 1
            } );
          }

          if ( bilinearVisible || isFirstRender ) {
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
        if ( canvasVisible || isFirstRender ) {
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
        if ( svgVisible || isFirstRender ) {
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

        isFirstRender = false;
      };
      step();
    }


    // Blur
    {
      const outputWidth = 512;
      const outputHeight = 512;
      const rasterWidth = Math.ceil( outputWidth * window.devicePixelRatio );
      const rasterHeight = Math.ceil( outputHeight * window.devicePixelRatio );

      let isFirstRender = true;

      blurCanvas.width = rasterWidth;
      blurCanvas.height = rasterHeight;
      blurCanvas.style.width = `${outputWidth}px`;
      blurCanvas.style.height = `${outputHeight}px`;

      const blurCanvasContext = deviceContext ? deviceContext.getCanvasContext( blurCanvas, 'srgb' ) : blurCanvas.getContext( '2d' );

      const reference = Date.now();

      let count = 0;
      const step = () => {
        if ( rasterizers ) {
          requestAnimationFrame( step );
        }

        if ( !isFirstRender && !blurVisible ) {
          return;
        }

        const timeDelta = Date.now() - reference;

        // TODO
        const rotation = deviceContext ? timeDelta / 1000 : 0;

        const colorSpace = 'srgb';
        const srgbSpace = phet.alpenglow.RenderColorSpace.sRGB;
        const oklabSpace = phet.alpenglow.RenderColorSpace.premultipliedOklab;
        const clientSpace = colorSpace === 'srgb' ? phet.alpenglow.RenderColorSpace.premultipliedSRGB : phet.alpenglow.RenderColorSpace.premultipliedDisplayP3;
        const gpuSpace = colorSpace === 'srgb' ? phet.alpenglow.RenderColorSpace.premultipliedLinearSRGB : phet.alpenglow.RenderColorSpace.premultipliedLinearDisplayP3;

        const getColor = ( r, g, b, a ) => new phet.alpenglow.RenderColor( v4( r, g, b, a ) ).colorConverted( srgbSpace, clientSpace );

        const center = v2( rasterWidth / 2, rasterHeight / 2 );

        const starLong = 0.4 * rasterWidth;
        const starShort = 0.4 * rasterWidth * ( 0.5 * ( 3 - Math.sqrt( 5 ) ) );

        const rasterCoord = ( x, y ) => v2( x * rasterWidth, y * rasterHeight );

        const program = new phet.alpenglow.RenderStack( [
          new phet.alpenglow.RenderPathBoolean(
            new phet.alpenglow.RenderPath(
              'nonzero',
              [
                [ rasterCoord( 0.1, 0.1 ), rasterCoord( 0.5, 0.1 ), rasterCoord( 0.5, 0.9 ), rasterCoord( 0.1, 0.9 ) ]
              ]
            ),
            getColor( 0, 0, 0, 1 ),
            getColor( 1, 1, 1, 1 ),
          ),
          phet.alpenglow.RenderPathBoolean.fromInside(
            new phet.alpenglow.RenderPath(
              'nonzero',
              [
                _.range( 0, 5 ).map( i => [
                  phet.dot.Vector2.createPolar( starShort, i * 2 * Math.PI / 5 + rotation ).add( center ),
                  phet.dot.Vector2.createPolar( starLong, ( i + 0.5 ) * 2 * Math.PI / 5 + rotation ).add( center ),
                ] ).flat()
              ]
            ),
            new phet.alpenglow.RenderLinearGradient(
              phet.dot.Matrix3.IDENTITY,
              phet.dot.Vector2.createPolar( starLong, rotation ).add( center ),
              phet.dot.Vector2.createPolar( starLong * 0.8, rotation ).add( center ),
              [
                new phet.alpenglow.RenderGradientStop( 0, getColor( 0xff / 255, 0x0f / 255, 0x7b / 255, 1 ).colorConverted( srgbSpace, oklabSpace ) ),
                new phet.alpenglow.RenderGradientStop( 1, getColor( 0xf8 / 255, 0x9b / 255, 0x29 / 255, 1 ).colorConverted( srgbSpace, oklabSpace ) )
              ],
              phet.alpenglow.RenderExtend.Repeat,
              phet.alpenglow.RenderLinearGradientAccuracy.SplitAccurate,
            ).colorConverted( oklabSpace, clientSpace )
          )
        ] ).colorConverted( clientSpace, deviceContext ? gpuSpace : clientSpace ).simplified();

        //const program = new phet.alpenglow.RenderColor( phet.dot.v4( ( timeDelta / 1000 ) % 1, 0, 0, 1 ) );

        const isBox = document.getElementById( 'blur-box' ).checked;
        const filterType = isBox ? phet.alpenglow.PolygonFilterType.Box : phet.alpenglow.PolygonFilterType.Bilinear;
        const filterScale = 1 + ( isBox ? 25 / 17 : 1 ) * ( document.getElementById( 'blur-slider' ).value / 100 ) * rasterWidth * 0.2;

        if ( rasterizers ) {

          if ( blurVisible || isFirstRender ) {
            rasterizers[ count % numRasterizers ].runRenderProgram( program, {
              canvasContext: blurCanvasContext,
              rasterWidth: rasterWidth,
              rasterHeight: rasterHeight,
              colorSpace: 'srgb',
              filterType: filterType,
              filterScale: filterScale
            } );
          }
        }
        else {
          // TODO: this is super slow, don't even use it

          const rasterBlur = new phet.alpenglow.CombinedRaster( rasterWidth, rasterHeight, {
            colorSpace: 'srgb'
          } );

          phet.alpenglow.Rasterize.rasterize( program, rasterBlur, new phet.dot.Bounds2( 0, 0, rasterWidth, rasterHeight ), {
            polygonFiltering: filterType,
            polygonFilterWindowMultiplier: filterScale
          } );

          rasterBlur.writeToCanvas( blurCanvas, blurCanvasContext );
        }

        isFirstRender = false;
      };

      if ( deviceContext ) {
        step();
      }

      if ( !deviceContext ) {
        document.getElementById( 'blur-box' ).addEventListener( 'change', step );
        document.getElementById( 'blur-slider' ).addEventListener( 'input', step );
      }
    }
  } )();
}
