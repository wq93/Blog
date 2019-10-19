import Particle from './particles'

function Shape(ctx, w, h, x, y, img){
    this.ctx = ctx
    this.W = w
    this.H = h
    this.x = x
    this.y = y
    this.size = 68;
    this.img = img;
    this.placement = [];
}
Shape.prototype.getValue = function(){
    // this.ctx.font =  this.size + "px serif";
    // this.ctx.fillText(this.text, this.x, this.y);
    this.ctx.drawImage(this.img, this.x, this.y)
    const W = this.W
    const H = this.H
    const gridY = 6
    const gridX = 6

    var idata = this.ctx.getImageData(0, 0, W, H);
    var buffer32 = new Uint32Array(idata.data.buffer)

    for(var j=0; j < H; j += gridY){
        for(var i=0 ; i < W; i += gridX){
            if(buffer32[j * W + i]){
                var particle = new Particle(this.ctx, i, j);
                this.placement.push(particle);
            }
        }
    }

    this.ctx.clearRect(0, 0, W, H);
}

export default Shape