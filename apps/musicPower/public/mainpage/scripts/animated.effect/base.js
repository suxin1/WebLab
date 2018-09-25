class SoundAnimate {

    constructor(ctx) {
        this.ctx = ctx;
        this.canvasHeight = ctx.height;
        this.canvasWidth = ctx.with;
    }

    setFFT() {
        // Fast Fourier Transformation

    }

    draw() {
        // TODO main draw function
    }

    drawFFT(values) {
        const {ctx, canvasHeight, canvasWidth} = this;

        // Clear canvas for redraw.
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        let barWidth = canvasWidth / values.length;
        for(let i=0, len=values.length;i<len;i++) {
            let x = canvasWidth * (i/len),
                y = (values[i] + 140) * 2;
            ctx.fillStyle = `rgba(0, 0, 0, ${i/len})`;
            ctx.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
        }
    }
}