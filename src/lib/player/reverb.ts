import Tuna from 'tunajs';

export default class DisneylandReverb {
    context: AudioContext;
    tuna: Tuna;
    source: MediaElementAudioSourceNode;
    enabled = true;

    effects: any[] = [];

    constructor(audioElem: HTMLAudioElement) {
        this.context = new AudioContext({
            sampleRate: 48000
        });
        this.tuna = new Tuna(this.context);

        this.effects = [
            new this.tuna.Delay({
                feedback: 0.1,    //0 to 1+
                delayTime: 110,    //1 to 10000 milliseconds
                wetLevel: 0.75,     //0 to 1+
                dryLevel: 1,       //0 to 1+
                cutoff: 2000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
                bypass: false
            }),
            new this.tuna.Delay({
                feedback: 0.1,    //0 to 1+
                delayTime: 120,    //1 to 10000 milliseconds
                wetLevel: 0.6,     //0 to 1+
                dryLevel: 1,       //0 to 1+
                cutoff: 6000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
                bypass: false
            }),
            new this.tuna.Delay({
                feedback: 0.1,    //0 to 1+
                delayTime: 150,    //1 to 10000 milliseconds
                wetLevel: 0.5,     //0 to 1+
                dryLevel: 1,       //0 to 1+
                cutoff: 8000,      //cutoff frequency of the built in lowpass-filter. 20 to 22050
                bypass: false
            }),
            new this.tuna.Cabinet({
                makeupGain: 1,                                 //0 to 20
                impulsePath: "717935__choomaque-crispydinner__outdoors_220917_115.wav",    //path to your speaker impulse
                bypass: false
            })
        ]

        audioElem.crossOrigin = "anonymous";

        try {
            this.source = this.context.createMediaElementSource(audioElem);
        } catch(e) {
            window.location.reload();
        }

        this.source.connect(this.effects[0].input);
        for (let i = 0; i < this.effects.length - 1; i++) {
            this.effects[i].connect(this.effects[i + 1].input);
        }
        this.effects[this.effects.length - 1].connect(this.context.destination);

        audioElem.onplay = () => {
            this.context.resume();
        }

        if (localStorage.getItem('immersionMode') !== 'true') this.toggle();
    }

    toggle() {
        this.enabled = !this.enabled;
        this.source.disconnect();
        this.effects[this.effects.length - 1].disconnect();
        if (this.enabled) {
            this.source.connect(this.effects[0].input);
            this.effects[this.effects.length - 1].connect(this.context.destination);
        } else {
            this.source.connect(this.context.destination);
        }
        localStorage.setItem('immersionMode', this.enabled ? 'true' : 'false');
        return this.enabled;
    }

    destroy() {
        this.context.close();
        this.source.disconnect();
    }
}