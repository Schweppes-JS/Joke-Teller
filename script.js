const button = document.getElementById('button');
const audioElement = document.getElementById('audio');
const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';

// Play Joke on Click
button.onclick = function() {
    getJoke(apiUrl, 'GET', implementationJoke);
};

// Get joke from Joke API
let joke = '';
function getJoke (url, method, functionName) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', apiUrl, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            functionName(data);
        }
    }
};

// Parsing and insert Joke
function implementationJoke(data) {
    if (data.setup) {
        joke = `${data.setup} ... ${data.delivery}`;
    }
    else {
        joke = data.joke;
    }
    tellJoke(joke);
};

// Send Joke to VoiceRSS API
function tellJoke(voicesText) {
    VoiceRSS.speech({
        key: '2e42e213322644e0aeff3e6c0a35d2f1',
        src: voicesText,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
};