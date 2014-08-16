
function quirkArt( artCanvas, artContext ) {
  var ctx = artContext;

  // ideal for 256x256
  var width = artCanvas.width;
  var height = artCanvas.height;

  ctx.fillStyle = '#000';
  ctx.fillRect( 0, 0, width, height );

  // Older Opera (12)
  ctx.beginPath();
  ctx.arc( 0, 0, 1000, 3 * Math.PI, Math.PI, false );
  ctx.fillStyle = '#fff';
  ctx.fill();

  // Older Chrome, Opera
  ctx.beginPath();
  ctx.arc( width / 2, height, width / 2, 2 * Math.PI, -Math.PI, false );
  ctx.fillStyle = 'rgba(255,0,0,0.8)';
  ctx.fill();

  // OSX / iOS (excluding Chrome desktop)
  ctx.beginPath();
  ctx.moveTo( width + 100, height / 2 );
  ctx.quadraticCurveTo( width - 20, height / 2, width, height / 2 );
  ctx.lineWidth = height;
  ctx.strokeStyle = 'rgba(255,0,0,0.7)';
  ctx.stroke();

  // Not if IE, Older Opera
  ctx.beginPath();
  ctx.arc( 0, 0, width, 4 * Math.PI, -4 * Math.PI, false );
  ctx.fillStyle = 'rgba(0,100,255,0.8)';
  ctx.fill();
  ctx.beginPath();
  ctx.arc( 0, 0, width * 0.8, 4 * Math.PI, -4 * Math.PI, false );
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fill();

  // IE
  ctx.beginPath();
  ctx.moveTo( -1000, -300 );
  ctx.lineTo( -300.001, -300 );
  ctx.lineTo( -300, -300.001 );
  ctx.lineTo( -300, -1000 );
  ctx.lineWidth = 800;
  ctx.strokeStyle = 'rgba(255,255,255,0.9)';
  ctx.stroke();

  // IE, some firefox
  ctx.beginPath();
  ctx.moveTo( width / 2 - 160, -40 + width );
  ctx.quadraticCurveTo( width / 2, 20 + width, width / 2, 0 + width );
  ctx.lineCap = 'butt';
  ctx.lineWidth = 300;
  ctx.strokeStyle = 'rgba(255,0,255,0.5)';
  ctx.stroke();

  // IE, some firefox
  ctx.save();
  ctx.beginPath();
  ctx.translate( 24, 24 );
  ctx.moveTo( width / 2, height / 2 );
  ctx.bezierCurveTo( 1 + width / 2, height / 2, width / 2, 1 + height / 2, 1 + width / 2, 1 + height / 2 );
  ctx.lineCap = 'butt';
  ctx.lineWidth = 300;
  ctx.strokeStyle = 'rgba(0,50,255,0.5)';
  ctx.stroke();
  ctx.restore()

  // cubic4
  ctx.save();
  ctx.beginPath();

  ctx.save();
  ctx.translate( width / 3, height / 3 );
  ctx.moveTo( 0, 0 );
  var smallNumber = 0.0000000001;
  ctx.bezierCurveTo( smallNumber, smallNumber, smallNumber, smallNumber, smallNumber, smallNumber );
  ctx.restore();

  ctx.lineCap = 'square';
  ctx.lineWidth = width / 2;
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.stroke();
  ctx.restore();


  //cubic 8
  ctx.save();
  ctx.beginPath();

  ctx.save();
  ctx.translate( 24, 24 );
  ctx.moveTo( 0, 0 );
  ctx.bezierCurveTo( -1, 0, 1, 0, 0, 0.1 );
  ctx.restore();

  ctx.lineCap = 'butt';
  ctx.lineWidth = 40;
  ctx.strokeStyle = 'rgba(255,200,150,0.5)';
  ctx.globalCompositeOperation = 'lighter';
  ctx.stroke();
  ctx.globalCompositeOperation = 'source-over';
  ctx.restore();

  // zigs
  function zig( context, x, y, count, height, space, offset ) {
    var i;
    context.save();
    context.beginPath();
    context.translate( x, y );
    context.moveTo( 0, 0 );
    for ( i = 0; i < count; i++ ) {
      context.lineTo( space * ( i - 0.5 ), height );
      context.lineTo( space * i, 0 );
    }
    for ( i = count - 1; i >= 0; i-- ) {
      context.lineTo( space * i, offset );
      context.lineTo( space * ( i - 0.5 ), height + offset );
    }
    context.fill();
    context.restore();
  }
  ctx.save();
  ctx.scale( 1, 2 );
  // ctx.translate( width / 8, height / 2 );
  ctx.globalCompositeOperation = 'lighter';
  ctx.fillStyle = 'rgba(255,100,100,0.7)';
  zig( ctx, 50, 0, 10, 100, 1, 10 );
  zig( ctx, 60, 0, 10, 100, 1, 5 );
  zig( ctx, 70, 0, 10, 100, 2, 5 );
  zig( ctx, 90, 0, 10, 50, 2, 5 );
  // zig( ctx, 110, 0, 10, 100, 2.5, 10 );
  // zig( ctx, 135, 0, 10, 100, 2.5, 10 );
  ctx.restore();
  ctx.save();

  ctx.translate( 0, height * 0.6 );
  ctx.fillStyle = 'rgba(255,0,255,1)';
  ctx.globalCompositeOperation = 'source-over';
  zig( ctx, 0, 0, 130, 100, Math.PI, 10 );
  ctx.restore();

  (function(){
    ctx.save();

    var x = 5;
    var y = 20;
    var w = 50;
    var h = 20;
    var r = 50;

    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.translate( width, 0 );

    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + r, r);
    ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
    ctx.arcTo(x, y + h, x, y + h - r, r);
    ctx.arcTo(x, y, x + r, y, r);

    ctx.strokeStyle = 'rgba(255,255,255,0.8)';
    ctx.lineWidth = width / 30;
    ctx.stroke();

    ctx.restore();
  })();
}

