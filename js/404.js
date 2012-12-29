// 404 page animation
// Jonathan Olson

$(document).ready(function () {
	var context = null;
	var canvas = $('#404-canvas');
	var onTop = $('#on-top-of-canvas');

	try {
		context = canvas[0].getContext( '2d' );
	} catch(e) {}

	if( context ) {
		// TODO: consider using underscore, etc.
		var hexX = [ Math.cos( 0 * Math.PI / 3 ), Math.cos( 1 * Math.PI / 3 ), Math.cos( 2 * Math.PI / 3 ), Math.cos( 3 * Math.PI / 3 ), Math.cos( 4 * Math.PI / 3 ), Math.cos( 5 * Math.PI / 3 ) ];
		var hexY = [ Math.sin( 0 * Math.PI / 3 ), Math.sin( 1 * Math.PI / 3 ), Math.sin( 2 * Math.PI / 3 ), Math.sin( 3 * Math.PI / 3 ), Math.sin( 4 * Math.PI / 3 ), Math.sin( 5 * Math.PI / 3 ) ];

		function hex( x, y, radius ) {
			context.beginPath();
			context.moveTo( x + radius * hexX[0], y + radius * hexY[0] );
			for( var i = 1; i < 6; i++ ) {
				context.lineTo( x + radius * hexX[i], y + radius * hexY[i] );
			}
			context.closePath();
		}

		function draw() {
			var x,y,i;

			var drawRadius = 20;

			var paintCount = 3;
			var clearCount = 0;

			for( i = 0; i < paintCount; i++ ) {
				var xRandom = Math.random();
				x = xRandom * ( canvas[0].width - 2 * drawRadius ) + drawRadius;
				y = Math.random() * ( canvas[0].height - 2 * drawRadius ) + drawRadius;
				hex( x, y, drawRadius );
				context.fillStyle = 'rgba(0,0,0,0.05)';
				context.fill();
				context.strokeStyle = jonathanolson.themeColor( '0.4', xRandom );
				context.stroke();
			}
			
			for( i = 0; i < clearCount; i++ ) {
				context.fillStyle = 'rgba(255,255,255,0.3)';
				x = Math.random() * canvas[0].width;
				y = Math.random() * canvas[0].height;
				hex( x, y, drawRadius );
				context.fill();
			}

		}

		function layout() {
			var width = onTop.outerWidth();
			var height = onTop.outerHeight();
			canvas[0].width = width;
			canvas[0].height = height;

			draw();
		}
		$(window).resize( layout );
		layout();

		// loop
		function step() {
			draw();
			window.requestAnimationFrame( step, canvas[0] );
		}
		window.requestAnimationFrame( step, canvas[0] );
	} else {
		// canvas not supported, so we hide it
		canvas.hide();
	}
});
