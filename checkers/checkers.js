
var mapElement = document.createElement( 'div' );
mapElement.id = 'map';
document.body.appendChild( mapElement );

var debugTiles = false;

var map = L.map( 'map' ).setView( [ 40.056455, -105.176764 ], 13 );
L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
} ).addTo( map );

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

var recreationLayer = new RecreationLayer();
recreationLayer.addTo( map );

var stationLayer = new StationLayer();
stationLayer.addTo( map );

L.control.locate( {
  keepCurrentZoomLevel: true
} ).addTo( map );

L.control.layers( {}, { "Station": stationLayer, "Recreation": recreationLayer } ).addTo( map );
