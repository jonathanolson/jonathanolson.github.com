var jonathanolson = {};

(function(){

	jonathanolson.themeColor = function( alpha, blend ) {
		var scale = Math.floor( 511 * Math.random() ) - 255;

		var red = 255;
		var green = ( scale > 0 ? scale : 0 );
		var blue = ( scale < 0 ? -scale : 0 );

		if( alpha !== undefined ) {
			if( blend !== undefined ) {
				function combine( main, backup ) {
					return Math.floor( main * ( 1 - blend ) + backup * blend );
				}
				return "rgba(" + combine( red, green ) + "," + combine( green, blue ) + "," + combine( blue, red ) + "," + alpha + ")";
			} else {
				return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
			}
		} else {
			return "rgb(" + red + "," + green + "," + blue + ")";
		}
	};

	jonathanolson.oppositeThemeColor = function( alpha ) {
		var scale = Math.floor( 511 * Math.random() ) - 255;

		var red = 255;
		var green = ( scale > 0 ? scale : 0 );
		var blue = ( scale < 0 ? -scale : 0 );

		if( alpha !== undefined ) {
			return "rgba(" + green + "," + blue + "," + red + "," + alpha + ")";
		} else {
			return "rgb(" + green + "," + blue + "," + red + ")";
		}
	};

	// creates a div filled with alpha-blended rectangles varying in color from yellow to purple (across orange and red)
	jonathanolson.createPatchwork = function( width, height ) {
		// don't make the rectangles too large
		var largeSize = Math.min( 144, Math.round( height * 0.8 ) );
		var smallSize = 16;

		// fill the screen at approximately the same density (adjust number of rectangles based on their size)
		var density = 2.5;
		var numPixels = width * height;
		var averageBlockPixels = ( largeSize * largeSize * largeSize - smallSize * smallSize * smallSize ) / ( 3 * ( largeSize - smallSize ) );
		var count = Math.floor( density * numPixels / averageBlockPixels );

		var element = $('<div></div>');
		element.addClass( "patchwork-container" );
		element.width( width );
		element.height( height );

		function nextRandomInteger( ceiling ) {
			return Math.floor( ceiling * Math.random() );
		}

		for ( var i = 0; i < count; i++ ) {
			var size = nextRandomInteger( largeSize - smallSize ) + smallSize;
			var left = nextRandomInteger( width + size ) - size;
			var top = nextRandomInteger( height + size ) - size;

			var block = $('<div></div>');
			block.addClass( 'patchwork-block' );
			block.css( 'left', left + "px" );
			block.css( 'top', top + "px" );
			block.width( size );
			block.height( size );
			block.css( 'background-color', jonathanolson.themeColor() );
			// block.css( 'background-color', jonathanolson.themeColor( 1, left / (width + size) / 2 ) );

			element.append( block );
		}

		return element;
	};
})();

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
