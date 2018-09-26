import Tone from "tone";
import {SoundAnimate} from "./animate.effect/base";


class FFTAnimate extends SoundAnimate {
    fft = new Tone.FFT(32);
    constructor(ctx, player) {
        super(ctx);
        player.fan(this.fft);
    }
    getValues() {
        return this.fft.getValue();
    }
}

let context = document.querySelector("#fft").getContext("2d");
let playButton = document.querySelector("#start");

let player = new Tone.Player({
    "url": "/songs/Emancipator - Dusk to Dawn.mp3",
    "loop": true
}).toMaster();

let animation = new FFTAnimate(context, player);
animation.start();

playButton.onclick = function () {
    player.start();
};