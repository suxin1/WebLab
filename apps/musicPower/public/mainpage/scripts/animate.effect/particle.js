import {SoundAnimate} from "./base";

class ParticleAnimate extends SoundAnimate {
    fft = new Tone.FFT(32);

    constructor(ctx, player) {
        super(ctx);
        player.fan(this.fft);
    }

    getValues() {
        return this.fft.getValue();
    }

    draw(values) {
        const {ctx, canvasHeight, canvasWidth} = this;
        // Get the smallest.
        let R = canvasWidth;
        if (canvasWidth > canvasHeight) {
            R = canvasHeight;
        }

        // Clear canvas for redraw.
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        let x = canvasWidth / 2,
            y = canvasHeight / 2;
        for (let i = 0, len = values.length; i < len; i++) {
            let x = canvasWidth * (i / len),
                y = (values[i] + 140) * 2;
            ctx.fillStyle = `rgba(0, 0, 0, ${i / len})`;
            ctx.fillRect(x, canvasHeight - y, barWidth, canvasHeight);
        }
    }
}