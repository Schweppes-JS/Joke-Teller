const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// function test() {
//     VoiceRSS.speech({
//         key: '2e42e213322644e0aeff3e6c0a35d2f1',
//         src: 'Hello, world!',
//         hl: 'en-us',
//         v: 'Linda',
//         r: 0, 
//         c: 'mp3',
//         f: '44khz_16bit_stereo',
//         ssml: false
//     });
// };

// test();

// Get joke from Joke API
const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
let joke = '';
let xhttp = new XMLHttpRequest();
xhttp.open('GET', apiUrl, true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText);
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        }
        else {
            joke = data.joke;
        }
        console.log(joke);
    }
}