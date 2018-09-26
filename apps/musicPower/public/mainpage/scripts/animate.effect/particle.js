import Tone from "tone";
import {SoundAnimate} from "./base";

export class ParticleAnimate extends SoundAnimate {
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

        let x = canvasWidth / 2,
            y = canvasHeight / 2;

        // Clear canvas for redraw.
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        ctx.lineWidth = 2;
        ctx.strokeStyle = "#aa2277";
        ctx.lineCap = 'round';

        for (let i = 0, len = values.length; i < len; i++) {
            let x1 = 0,
                x2 = (values[i] + 150);

            if(x2 === Number.POSITIVE_INFINITY || x2 === Number.NEGATIVE_INFINITY) {
                x2 = 40;
            }
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(-Math.PI / 16 * i);
            ctx.beginPath();
            ctx.moveTo(20, 0);
            ctx.lineTo(x2, 0);
            ctx.closePath();
            ctx.stroke();

            ctx.restore();
        }
    }
}