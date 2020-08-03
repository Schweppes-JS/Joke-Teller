const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

function test() {
    VoiceRSS.speech({
        key: '2e42e213322644e0aeff3e6c0a35d2f1',
        src: 'Hello, world!',
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
};

test();