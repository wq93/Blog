<template>
  <div class="wrapper">
    <div class="container">
      <h3 class="title">文字与图像粒子</h3>
      <div class="box">
        <canvas ref="$canvas" class="canvas"></canvas>
        <img src="@assets/pikaqiu1.png" ref="$img" height="100" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Shape from '@/js/Shape'
export default {
    name: 'ImageParticle',
    methods: {
        initCanvas () {
            const $canvas = this.$refs.$canvas
            $canvas.width = 800
            $canvas.height = 400
            const ctx = $canvas.getContext('2d')

            this.$refs.$img.onload = () => {
                const word = new Shape(ctx, $canvas.width, $canvas.height, 50, 50, this.$refs.$img)
                word.getValue()
                console.log(word)
                this.drawFrame(ctx, $canvas.width, $canvas.height, word)
            }
            
            // this.drawFrame(ctx, $canvas.width, $canvas.height, word)
        },
        drawFrame (ctx, w, h, word) {
            window.requestAnimationFrame(function fn (){
                ctx.clearRect(0, 0, w, h);

                for(var i=0; i< word.placement.length; i++){
                    word.placement[i].update();
                }

                // requestAnimationFrame(fn)
            })
        },
        drawText (ctx, x, y, text) {
            ctx.clearRect(0, 0, 800, 400)
            ctx.beginPath()
            ctx.strokeStyle = 'red'
            ctx.font = '48px serif'
            ctx.strokeText(text, x, y)
            ctx.closePath()
        }
    },

    mounted () {
        this.initCanvas()
    }
}
</script>

<style lang="scss" scoped>
  .canvas{
    border-bottom: 1px solid #ccc;
  }
</style>

