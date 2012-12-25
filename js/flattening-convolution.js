// display code for the Flattening Convolution problem
// by Jonathan Olson

/*---------------------------------------------------------------------------*
 * window.requestAnimationFrame polyfill, by Erik Moller (http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating)
 * referenced by initial Paul Irish article at http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 *----------------------------------------------------------------------------*/
( function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x ) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
        window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if ( !window.requestAnimationFrame ) {
        window.requestAnimationFrame = function ( callback, element ) {
            console.log( 'window.requestAnimationFrame' );
            var currTime = new Date().getTime();
            var timeToCall = Math.max( 0, 16 - (currTime - lastTime) );
            var id = window.setTimeout( function () { callback( currTime + timeToCall ); },
                                        timeToCall );
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if ( !window.cancelAnimationFrame ) {
        window.cancelAnimationFrame = function ( id ) {
            clearTimeout( id );
        };
    }
}() );


$(document).ready(function () {
	var fContext = null;
	var dContext = null;

	// canvas that shows the density plot of the function $f$
	var functionCanvas = $('#convolution-canvas');

	// canvas that shows plots of f_p(\theta) and the factors
	var displayCanvas = $('#display-canvas');
	try {
		fContext = functionCanvas[0].getContext( '2d' );
		dContext = displayCanvas[0].getContext( '2d' );
	} catch(e) {}
	if( fContext ) {
		// both have the same dimensions for simplicity
		var width = 256;
		var height = 256;

		// at what scale should the function be displayed? 1 == fitted square around unit circle
		var boundsScale = 2;

		// how should we scale the mouse dragging across the function
		var mouseScale = 1;

		// the display scale for plotting values
		var displayScale = 18;

		// our "location" in the function
		var offsetX = 0;
		var offsetY = 0;

		// \varphi, given the differential area solution
		var phi = 0;

		// color-blind-safe colors from http://jfly.iam.u-tokyo.ac.jp/color/
		var cyanColor = "rgb(86,180,233)";
		var orangeColor = "rgb(230,159,0)";

		// roots of J_1, in order
		var besselRoots = [
			3.8317059702075123156, 7.0155866698156187526, 10.173468135062722077, 
			13.323691936314223032, 16.470630050877632813, 19.615858510468242021, 
			22.760084380592771898, 25.903672087618382625, 29.046828534916855067, 
			32.189679910974403627
		];

		// example function that satisfies the problem description
		function exampleF( x, y ) {
			var value = 0;
			value += Math.cos( besselRoots[0] * x + 2.91541 );
			value += 0.2 * Math.cos( besselRoots[0] * ( 0.713812 * x + 0.700337 * y ) + 0.79 );
			value += 0.5 * Math.cos( besselRoots[1] * Math.sqrt( 2 ) * ( x + y ) + 5.44686 );
			value += 0.2 * Math.cos( besselRoots[2] * ( 0.780651 * x - 0.624967 * y ) + 0.363359 );
			value += 0.5 * Math.cos( besselRoots[1] * ( -0.809194 * x - 0.587542 * y ) + 5.54123 );
			value += 0.5 * Math.cos( besselRoots[0] * ( -0.931525 * x - 0.363678 * y ) + 2.84367 );
			value += 0.5 * Math.cos( besselRoots[3] * ( 0.625955 * x + 0.779859 * y ) + 4.09515 );
			value += 0.3 * Math.cos( besselRoots[5] * ( -0.377179 * x - 0.92614 * y ) + 2.56 );

			return value;
		}

		// rgba buffer
		var buffer = fContext.createImageData( width, height );

		// TODO: aspect ratio internally not assured to be 1:1 depending on width/height

		// pixel => x,y coordinates
		function mapCol( col ) { return 2 * ( col / ( width - 1 ) - 0.5 ) * boundsScale; }
		function mapRow( row ) { return -2 * ( row / ( height - 1 ) - 0.5 ) * boundsScale; }

		// x,y => pixel coordinates
		function mapX( x ) { return ( ( x / ( 2 * boundsScale ) ) + 0.5 ) * ( width + 1 ); }
		function mapY( y ) { return ( ( -y / ( 2 * boundsScale ) ) + 0.5 ) * ( height + 1 ); }

		var scaleX = mapX( 1 ) - mapX( 0 );

		function drawFunction() {
			// write out function data into the grid
			for( var col = 0; col < width; col++ ) {
				for( var row = 0; row < height; row++ ) {
					var index = ( width * row + col ) * 4;
					
					var x = mapCol( col );
					var y = mapRow( row );

					var value = exampleF( x + offsetX, y + offsetY );
					var pixelScale = 3.5;

					var pixelValue = Math.floor( 256 * (value + pixelScale) / ( 2 * pixelScale ) );
					if( pixelValue < 0 ) { pixelValue = 0; }
					if( pixelValue > 255 ) { pixelValue = 255; }

					buffer.data[index+0] = pixelValue;
					buffer.data[index+1] = pixelValue;
					buffer.data[index+2] = pixelValue;
					buffer.data[index+3] = 255;
				}
			}

			// draw out the function
			fContext.putImageData( buffer, 0, 0 );

			// add the highlighted circle over it
			fContext.beginPath();
			fContext.arc( mapX( 0 ), mapY( 0 ), scaleX, 0, 2 * Math.PI );
			fContext.lineWidth = 1;
			fContext.strokeStyle = '#FF0000';
			fContext.stroke();
		}

		function drawDisplay() {
			// clear the right-side display
			dContext.clearRect( 0, 0, width, height );
			var i;

			// calculate the function values around the current offset unit circle
			var values = [];
			var weightedValues = [];
			for( i = 0; i < width; i++ ) {
				var theta = 2 * Math.PI * i / ( width - 1 );
				var value = exampleF( offsetX + Math.cos( theta ), offsetY + Math.sin( theta ) );
				values.push( value );
				weightedValues.push( value * Math.cos( theta + phi ) );
			}

			var topY = 64.5;
			var bottomY = 128+64.5;

			dContext.lineWidth = 1;

			// rotating phi indicator
			var centerX = 35;
			var centerY = 138;
			dContext.strokeStyle = '#333333';
			dContext.fillStyle = cyanColor;
			dContext.beginPath();
			// phi negated for vertical flipping
			dContext.arc( centerX, centerY, 10, -phi - Math.PI / 2, -phi + Math.PI / 2 );
			dContext.closePath();
			dContext.fill();
			dContext.stroke();
			dContext.fillStyle = orangeColor;
			dContext.beginPath();
			// phi negated for vertical flipping
			dContext.arc( centerX, centerY, 10, -phi + Math.PI / 2, -phi + 3 * Math.PI / 2 );
			dContext.closePath();
			dContext.fill();
			dContext.stroke();

			dContext.strokeStyle = '#333333';
			dContext.fillStyle = 'none';

			// top axes
			dContext.beginPath();
			dContext.moveTo( 0, topY );
			dContext.lineTo( width, topY );
			dContext.stroke();

			// bottom axes
			dContext.beginPath();
			dContext.moveTo( 0, bottomY );
			dContext.lineTo( width, bottomY );
			dContext.stroke();

			// top plot (actual values)
			dContext.beginPath();
			dContext.moveTo( 0, topY - displayScale * values[0] );
			for( i = 1; i < width; i++ ) {
				dContext.lineTo( i, topY - displayScale * values[i] );
			}
			dContext.stroke();

			// colored-area bottom plot - weighted by cos( theta + phi )
			(function(){
				dContext.beginPath();
				dContext.moveTo( 0, bottomY );
				dContext.lineTo( 0, bottomY - displayScale * weightedValues[0] );
				var top = weightedValues[0] > 0;
				for( i = 1; i < width; i++ ) {
					var product = weightedValues[i-1] * weightedValues[i];

					// color the top and bottom differently, and solve for the intercept when necessary
					if( product < 0 ) {
						var intercept = (i-1) - weightedValues[i-1] / ( weightedValues[i] - weightedValues[i-1] );
						dContext.lineTo( intercept, bottomY );
						dContext.fillStyle = top ? cyanColor : orangeColor;
						dContext.fill();
						dContext.beginPath();
						dContext.moveTo( intercept, bottomY );
						dContext.lineTo( i, bottomY - displayScale * weightedValues[i] );
						top = weightedValues[i] > 0;
					} else if( weightedValues[i-1] == 0 ) {
						// fill and switch
						dContext.fillStyle = top ? cyanColor : orangeColor;
						dContext.fill();
						dContext.beginPath();
						dContext.lineTo( i, bottomY - displayScale * weightedValues[i] );
						top = weightedValues[i] > 0;
					} else {
						dContext.lineTo( i, bottomY - displayScale * weightedValues[i] );
					}
				}
				dContext.lineTo( width-1, bottomY );
				dContext.fillStyle = top ? cyanColor : orangeColor;
				dContext.fill();	
			})();

			dContext.lineWidth = 1;
			dContext.strokeStyle = '#333333';
			dContext.fillStyle = 'none';

			// bottom line over the colors
			dContext.beginPath();
			dContext.moveTo( 0, bottomY - displayScale * weightedValues[0] );
			for( i = 1; i < width; i++ ) {
				var theta = 2 * Math.PI * i / ( width - 1 );
				dContext.lineTo( i, bottomY - displayScale * weightedValues[i] );
			}
			dContext.stroke();
		}

		drawFunction();
		drawDisplay();

		// update phi as an animation
		function step() {
			phi += 0.01;
			drawDisplay();
			window.requestAnimationFrame( step, displayCanvas[0] );
		}
		window.requestAnimationFrame( step, displayCanvas[0] );

		// mouse dragging behavior on the main function density plot
		(function(){
			var oldX = 0;
			var oldY = 0;
			var mouseIsDown = false;

			function functionMouseMove( e ) {
				offsetX -= ( mapCol( e.pageX ) - mapCol( oldX ) ) * mouseScale;
				offsetY -= ( mapRow( e.pageY ) - mapRow( oldY ) ) * mouseScale;

				oldX = e.pageX;
				oldY = e.pageY;

				drawFunction();
				drawDisplay();

				return false;
			}

			// only respond to mousedowns on the canvas
			functionCanvas.mousedown( function( e ) {
				mouseIsDown = true;
				oldX = e.pageX;
				oldY = e.pageY;
				$('body').mousemove( functionMouseMove );
				return false;
			} );

			// but allow the mouse-up to be anywhere else (simple dragging behavior)
			$('body').mouseup( function( e ) {
				if( mouseIsDown ) {
					$('body').unbind( 'mousemove', functionMouseMove );
					mouseIsDown = false;
					return false;
				}
			} );
		})();
	} else {
		// canvas not supported, so we hide it
		functionCanvas.hide();

		// and everything else surrounding it
		$('#convolution-canvas-container').hide();
	}
});
try {

}catch(e){}