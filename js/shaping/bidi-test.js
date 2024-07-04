/* TODO
    display:
      logical,visual, with embedding levels and arrows between?
      highlight based on bidi_type
*/

// TODO: link unicode code points
// TODO: output SVG for the combination

const glyphShapes = {}; // index => phet.kite.Shape
const getGlyphShape = ( font, index ) => {
  const key = font + '-' + index;
  let shape = glyphShapes[key];
  if ( !shape ) {
    shape = glyphShapes[key] = shaping.getGlyph( font, index );
  }
  return shape;
}

// scriptData should have scriptData[shaping.Script.XXX] = { font: ..., language: ... }
const getTextShape = ( text, direction, scriptData ) => {
  const shapedText = shaping.shapeRuns( text, direction, scriptData );

  const subpaths = [];

  for ( let m = 0; m < shapedText.glyphs.length; m++ ) {
    const glyph = shapedText.glyphs[m];
    const shape = getGlyphShape( glyph.font, glyph.index );
    const transformedShape = shape.transformed( phet.dot.Matrix3.translation( glyph.x, glyph.y ) );
    subpaths.push( ...transformedShape.subpaths );
  }

  return new phet.kite.Shape( subpaths );
};

function Test( scriptData, direction, inputId, offset ) {
  this.scriptData = scriptData;
  this.direction = direction;
  this.textBox = document.getElementById( inputId );
  this.offset = offset;
  this.textNode = null;

  var test = this;

  this.textBox.addEventListener( 'input', this.updateText.bind( this ) );
  document.getElementById( 'ltrBox' ).addEventListener( 'click', function() {
    test.direction = shaping.Direction.LTR;
    test.textBox.dir = 'ltr';
    test.updateText();
  } );
  document.getElementById( 'rtlBox' ).addEventListener( 'click', function() {
    test.direction = shaping.Direction.RTL;
    test.textBox.dir = 'rtl';
    test.updateText();
  } );
  this.updateText();
}
Test.prototype = {
  constructor: Test,

  updateText: function() {
    // TODO: don't mix this!
    // var unitScale = getUnitsPerEM( this.scriptData['default'].font );

    const text = this.textBox.value ? this.textBox.value : '(blank)';

    const textShape = getTextShape( text, this.direction, this.scriptData ).transformed( phet.dot.Matrix3.scaling( 20 ) );
    const shiftedShape = textShape.transformed( phet.dot.Matrix3.translation( 10 - textShape.bounds.left, 10 - textShape.bounds.top ) );

    const svg = document.querySelector( '#svg' );
    svg.setAttribute( 'width', '' + Math.ceil( shiftedShape.bounds.right + 10 ) );
    svg.setAttribute( 'height', '' + Math.ceil( shiftedShape.bounds.bottom + 10 ) );
    document.querySelector( '#path' ).setAttribute( 'd', shiftedShape.getSVGPath() );

    if ( this.direction === shaping.Direction.LTR ) {
      svg.classList.add( 'ltr' );
      svg.classList.remove( 'rtl' );
    }
    else {
      svg.classList.add( 'rtl' );
      svg.classList.remove( 'ltr' );
    }

    function createDOMCodepoint( codepoint, optionalEmbeddingLevel ) {
      var div = document.createElement( 'div' );
      div.className = 'codepoint';

      var fourDigits = codepoint.toString( 16 );
      while ( fourDigits.length < 4 ) {
        fourDigits = '0' + fourDigits;
      }
      div.innerHTML = '<div class="display">&#x' + codepoint.toString( 16 ) + ';</div><div class="hex"><a href="https://codepoints.net/U+' + fourDigits + '?lang=en">' + fourDigits.slice( 0, 2 ) + '<br>' + fourDigits.slice( 2, 4 ) + '</a></div>' + ( optionalEmbeddingLevel !== undefined ? ( '<div class="embedding">' + optionalEmbeddingLevel + '</div>' ) : '' );
      return div;
    }

    var logicalContainer = document.getElementById( 'logical' );
    logicalContainer.innerHTML = '';
    var visualContainer = document.getElementById( 'visual' );
    visualContainer.innerHTML = '';

    var codepoints = punycode.ucs2.decode( text );

    for ( var i = 0; i < codepoints.length; i++ ) {
      logicalContainer.appendChild( createDOMCodepoint( codepoints[i] ) );
    }

    var reordering = shaping.reorderUnicode( codepoints, this.direction );

    for ( var i = 0; i < codepoints.length; i++ ) {
      var j = reordering.visualToLogical[i];
      visualContainer.appendChild( createDOMCodepoint( codepoints[j], reordering.embeddingLevel[j] ) );
    }
  }
}

var testArabicString = "هذه هي بعض النصوص العربي"; // or العربية
var testString = "aew ελληνικά ру́сский 简体字?";
var testChineseString = "這是一些中文";
var testDevanagariString = "द्ध्र्य";

var notoSerif = shaping.createBase64FontHandle( notoSerifRegularBase64 );
var notoNaskh = shaping.createBase64FontHandle( notoNaskhArabicRegularBase64 );
var notoHebrew = shaping.createBase64FontHandle( notoSansHebrewRegularBase64 );

var CustomSriptData = {};
CustomSriptData['default'] = {
  font: notoSerif,
  language: 'en',
  script: shaping.Script.LATIN
};
CustomSriptData[shaping.Script.ARABIC] = {
  font: notoNaskh,
  language: 'ar'
};
CustomSriptData[shaping.Script.HEBREW] = {
  font: notoHebrew,
  language: 'iw'
};

var test = new Test( CustomSriptData, shaping.Direction.LTR, 'firstText', 0 );

// default is script 'default'
function fontUploadSetup( id, script, language ) {
  var fontFileBox = document.getElementById( id );
  fontFileBox.addEventListener( 'change', function( evt ) {
    var file = fontFileBox.files[0];
    if ( !file ) {
      return;
    }

    var reader = new FileReader();
    reader.onload = function( event ) {
      var arrayBuffer = reader.result;
      var fontDataArray = new Int8Array( arrayBuffer );
      if ( CustomSriptData[script] ) {
        if ( CustomSriptData[script].font ) {
          // release old font
          shaping.destroyFontHandle( CustomSriptData[script].font );
          CustomSriptData[script].font = 0;
        }
      } else {
        // initial setup sanity check
        CustomSriptData[script] = {
          language: language
        };
      }
      var font = shaping.createUInt8FontHandle( fontDataArray, 0 ); // 0th index
      CustomSriptData[script].font = font;

      // our new font may be allocated in the same place
      glyphPaths = {};

      test.updateText();
    };

    reader.onerror = function( event ) {
      console.log( 'file read error: ' + event.target.error.code );
    };

    reader.readAsArrayBuffer( file );
  } );
}

fontUploadSetup( 'default-font-file', 'default', 'en' );
fontUploadSetup( 'arabic-font-file', shaping.Script.ARABIC, 'ar' );
fontUploadSetup( 'hebrew-font-file', shaping.Script.HEBREW, 'iw' );