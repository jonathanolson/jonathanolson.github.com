var jonathanolson = {};

(function(){

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

			var scale = nextRandomInteger( 511 ) - 255;

			var red = 255;
			var green = ( scale > 0 ? scale : 0 );
			var blue = ( scale < 0 ? -scale : 0 );

			var block = $('<div></div>');
			block.addClass( 'patchwork-block' );
			block.css( 'left', left + "px" );
			block.css( 'top', top + "px" );
			block.width( size );
			block.height( size );
			block.css( 'background-color', "rgb(" + red + "," + green + "," + blue + ")");

			element.append( block );
		}

		return element;
	};
})();