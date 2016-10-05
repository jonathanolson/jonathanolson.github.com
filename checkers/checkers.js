
var mapElement = document.createElement( 'div' );
mapElement.id = 'map';
document.body.appendChild( mapElement );

var debugTiles = false;

var map = L.map( 'map' ).setView( [ 40.056455, -105.176764 ], 13 );


var osmLayer = L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
} ).addTo( map );

var positronLayer = L.tileLayer( 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
} );

var darkMatterLayer = L.tileLayer( 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
} );

var esriSatelliteLayer = L.tileLayer( 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.jpg', {
  attribution: 'Sources: Esri, DigitalGlobe, Earthstar Geographics, CNES/Airbus DS, GeoEye, USDA FSA, USGS, Getmapping, Aerogrid, IGN, IGP, and the GIS User Community'
} );

var thunderforestKey = atob( 'ZjI0MDUzMmMzYjMyNDc1MmI4NzcxNzRmNzA3MTYzNzM=' );

var thunderforestLandscapeLayer = L.tileLayer( 'https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=' + thunderforestKey, {
  attribution: 'Maps © www.thunderforest.com, Data © www.osm.org/copyright'
} );

var thunderforestOutdoorsLayer = L.tileLayer( 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=' + thunderforestKey, {
  attribution: 'Maps © www.thunderforest.com, Data © www.osm.org/copyright'
} );

var thunderforestMobileAtlasLayer = L.tileLayer( 'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=' + thunderforestKey, {
  attribution: 'Maps © www.thunderforest.com, Data © www.osm.org/copyright'
} );

// Google Map (nice)
// Google Physical / Google Panoramio (physical) nice
// Google Hybrid (nice)
// Google Satellite (nice)
//<img src="https://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&amp;1i108728&amp;2i197871&amp;2e2&amp;3u11&amp;4m2&amp;1u683&amp;2u521&amp;5m5&amp;1e3&amp;5sen&amp;6sus&amp;10b1&amp;12b1&amp;token=28121" style="width: 683px; height: 521px;">

function recTile( n, zoom ) {
  var rec = recreation[ n ];
  var result = rec[ zoom ];
  if ( result ) { return result };

  var lat_deg = rec.x;
  var lon_deg = rec.y;
  var multiplier = Math.pow( 2, zoom );
  var xtile = multiplier * ( (lon_deg + 180 ) / 360 );
  var lat_rad = Math.PI * lat_deg / 180;
  var ytile = multiplier * ( 1 - ( Math.log( Math.tan( lat_rad ) + 1 / Math.cos( lat_rad ) ) / Math.PI ) ) / 2;

  var result = {
    x: xtile,
    y: ytile
  };
  rec[ zoom ] = result;
  return result;
}

function stationTile( n, zoom ) {
  var station = stations[ n ];
  var result = station[ zoom ];
  if ( result ) { return result };

  var lat_deg = station.x;
  var lon_deg = station.y;
  var multiplier = Math.pow( 2, zoom );
  var xtile = multiplier * ( (lon_deg + 180 ) / 360 );
  var lat_rad = Math.PI * lat_deg / 180;
  var ytile = multiplier * ( 1 - ( Math.log( Math.tan( lat_rad ) + 1 / Math.cos( lat_rad ) ) / Math.PI ) ) / 2;

  var result = {
    x: xtile,
    y: ytile
  };
  station[ zoom ] = result;
  return result;
}

/*
Given Longitude/latitude/zoom to tile numbers :

n = 2 ^ zoom
xtile = n * ((lon_deg + 180) / 360)
ytile = n * (1 - (log(tan(lat_rad) + sec(lat_rad)) / π)) / 2
Given Tile numbers to longitude/latitude :

n = 2 ^ zoom
lon_deg = xtile / n * 360.0 - 180.0
lat_rad = arctan(sinh(π * (1 - 2 * ytile / n)))
lat_deg = lat_rad * 180.0 / π
*/

var RecreationLayer = L.GridLayer.extend( {
  createTile: function(coords){
    // create a <canvas> element for drawing
    var tile = L.DomUtil.create('canvas', 'leaflet-tile');

    // setup tile width and height according to the options
    var size = this.getTileSize();
    tile.width = size.x;
    tile.height = size.y;

    var zoom = coords.z;

    // get a canvas context and draw something on it using coords.x, coords.y and coords.z
    var context = tile.getContext('2d');

    if ( debugTiles ) {
      context.beginPath();
      context.rect( 0, 0, size.x, size.y );
      context.lineWidth = 3;
      context.strokeStyle = 'rgba(1,1,1,0.8)';
      context.stroke();

      context.font = '20px Arial';
      context.fillStyle = 'white';
      context.fillText( coords.x + ' / ' + coords.y + ' / ' + coords.z, 80, 140 );
    }

    context.beginPath();
    var recRadius = Math.sqrt( Math.pow( 2, zoom ) / 1000 );
    for ( var i = 0; i < recreation.length; i++ ) {
      var tileCoords = recTile( i, zoom );
      var dx = tileCoords.x - coords.x;
      var dy = tileCoords.y - coords.y;
      if ( Math.abs( dx ) > 2 || Math.abs( dy ) > 2 ) { continue; }

      var x = size.x * dx;
      var y = size.y * dy;

      // TODO: filter by what is visible?
      context.moveTo( x + recRadius, y );
      context.arc( x, y, recRadius, 0, Math.PI * 2, false );
      context.closePath();
    }
    context.fillStyle = 'blue';
    context.fill();


    // return the tile so it can be rendered on screen
    return tile;
  }
} );


var StationLayer = L.GridLayer.extend( {
  createTile: function(coords){
    // create a <canvas> element for drawing
    var tile = L.DomUtil.create('canvas', 'leaflet-tile');

    // setup tile width and height according to the options
    var size = this.getTileSize();
    tile.width = size.x;
    tile.height = size.y;

    var zoom = coords.z;

    // get a canvas context and draw something on it using coords.x, coords.y and coords.z
    var context = tile.getContext('2d');

    if ( debugTiles ) {
      context.beginPath();
      context.rect( 0, 0, size.x, size.y );
      context.lineWidth = 3;
      context.strokeStyle = 'rgba(1,1,1,0.8)';
      context.stroke();

      context.font = '20px Arial';
      context.fillStyle = 'white';
      context.fillText( coords.x + ' / ' + coords.y + ' / ' + coords.z, 80, 140 );
    }

    context.beginPath();
    var stationRadius = Math.sqrt( Math.pow( 2, zoom ) / 1000 ) / 2;
    for ( var i = 0; i < stations.length; i++ ) {
      var tileCoords = stationTile( i, zoom );
      var dx = tileCoords.x - coords.x;
      var dy = tileCoords.y - coords.y;
      if ( Math.abs( dx ) > 2 || Math.abs( dy ) > 2 ) { continue; }

      var x = size.x * dx;
      var y = size.y * dy;

      // TODO: filter by what is visible?
      context.moveTo( x + stationRadius, y );
      context.arc( x, y, stationRadius, 0, Math.PI * 2, false );
      context.closePath();
    }
    context.fillStyle = 'red';
    context.fill();


    // return the tile so it can be rendered on screen
    return tile;
  }
} );

function getNormalHeatPoints() {
  return dogs.map( function( dog ) { return [ dog.x, dog.y, 1 ]; } );
}

function getSpecificHeatPoints( pokemon_id ) {
  var count = 0;
  dogs.forEach( function( dog ) {
    dog.pokes.forEach( function( poke ) {
      if ( poke === pokemon_id ) {
        count++;
      }
    } );
  } );
  return dogs.map( function( dog ) {
    var value = 0;

    for ( var i = 0; i < dog.pokes.length; i++ ) {
      if ( dog.pokes[ i ] === pokemon_id ) {
        value += 1;
      }
    }

    value /= Math.max( 5, dog.pokes.length );
    value *= 70000 / ( 28 * Math.sqrt( count ) ); // multipler

    return [ dog.x, dog.y, value ];
  } ).filter( function( arr ) {
    return arr[ 2 ] > 0;
  } );
}

var dogHeatLayer = L.heatLayer( getNormalHeatPoints(), {
  radius: 15
} );

var hexPolys = [];
(function(){
  var dist = 0.0014245 * 19;
  var latScale = 0.7712126486154487;
  for ( var i = 0; i < hexes.length; i += 2 ) {
    var lat = hexes[i];
    var lng = hexes[i+1];
    var arr = [];
    for ( var j = 0; j < 6; j++ ) {
      var theta = j * Math.PI / 3;
      arr.push( [ lat + Math.sin( theta ) * dist * latScale, lng + Math.cos( theta ) * dist ] );
    }
    hexPolys.push( L.polygon( arr, {
      color: 'white',
      weight: 2,
      fillColor: '#666'
    } ) );
  }
})();
var hexLayer = L.layerGroup( hexPolys );

var recreationLayer = new RecreationLayer();
recreationLayer.addTo( map );

var stationLayer = new StationLayer();
stationLayer.addTo( map );

L.control.locate( {
  keepCurrentZoomLevel: true
} ).addTo( map );

L.control.layers( {
  "Mapnik": osmLayer,
  "Dark Matter": darkMatterLayer,
  "Positron": positronLayer,
  "Satellite": esriSatelliteLayer,
  "Landscape": thunderforestLandscapeLayer,
  "Outdoors": thunderforestOutdoorsLayer,
  "Mobile": thunderforestMobileAtlasLayer
}, {
  "Station": stationLayer,
  "Recreation": recreationLayer,
  "Dog Heat": dogHeatLayer,
  "Hexes": hexLayer
} ).addTo( map );

var FilterControl = L.Control.extend( {
  options: {
      position: 'bottomleft'
  },

  onAdd: function( map ) {
    var select = L.DomUtil.create( 'select', 'dog-selector' );

    var defaultOption = document.createElement( 'option' );
    defaultOption.text = '0';
    defaultOption.label = 'Everything';
    select.add( defaultOption );

    for ( var i = 0; i < dogInfo.length; i++ ) {
      var option = document.createElement( 'option' );
      option.text = '' + dogInfo[ i ].id;
      option.label = '[' + dogInfo[ i ].id + '] ' + dogInfo[ i ].name;
      select.add( option );
    }

    select.addEventListener( 'change', function() {
      if ( select.value === '0' ) {
        dogHeatLayer.setLatLngs( getNormalHeatPoints() );
      }
      else {
        dogHeatLayer.setLatLngs( getSpecificHeatPoints( Number.parseInt( select.value ) ) );
      }
    } );

    return select;
  }
} );

map.addControl( new FilterControl() );
