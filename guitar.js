//Horse Lords pyschedelic website sound 

    var AudioContext = window.AudioContext || window.webkitAudioContext || false; 

    if (AudioContext) {
        
        var actx = new (window.AudioContext || window.webkitAudioContext)();
        
    } else {
        // Web Audio API is not supported
        // Alert the user
        alert("Apologies, beholder of this website, but the Web Audio API is not supported by your browser. Please, consider stepping outside and breathing deep of the world around you, upgrading to the latest version, or downloading Google Chrome or Mozilla Firefox");
    }

var osc = actx.createOscillator();
var samplebuffer, sound;
var gain = actx.createGain();
gain.gain.value = 1;

var delay = actx.createDelay(5.0);
delay.delayTime.value = 1.0;

var biquadFilter = actx.createBiquadFilter();
biquadFilter.type = "lowpass";
biquadFilter.gain.value = 25;

var x = 0.5, y;
var down;

// Mute/unmute on blue/focus
// window.onfocus = function(){
//     gain.gain.value = 1;
// }

// window.onblur = function(){
//     gain.gain.value = 0;
// }
function handleVisibilityChange() {
  if (document.hidden) {
    console.log("off")
    gain.gain.value = 0;
  } else  {
    console.log("on")
    gain.gain.value = 1;
  }
}

document.addEventListener("visibilitychange", handleVisibilityChange, false);

// Interaction

// Desktop
window.onmousedown = function(e){
    down = 1;
    sound.playbackRate.value = ((x*2)/window.innerWidth);
}

window.onmouseup = function(e){
    down = 0;
    window.location.href = "./page.html";
}

window.onmousemove = function(e){

	x = e.clientX;
	y = e.clientY;
    if(down){
        sound.playbackRate.value = ((x*2)/window.innerWidth);
    }
    delay.delayTime.value = (x/window.innerWidth);
    biquadFilter.frequency.value = y*2;

}

// Mobile
var tapped = false;
window.addEventListener('touchstart', function(e){
    e.preventDefault();
    if(!tapped){ //if tap is not set, set up single tap
      tapped=setTimeout(function(){
          tapped=null
          down = 1;
      },300);   //wait 300ms then run single click code
    } else {    //tapped within 300ms of last tap. double tap
      clearTimeout(tapped); //stop single tap callback
      tapped=null
      window.location.href = "./page.html";
    }

    
    console.log("start");
},false);

window.addEventListener('touchmove', function(e){
    e.preventDefault();
    x = e.changedTouches[0].clientX;
    y = e.changedTouches[0].clientY;

    if(down){
        sound.playbackRate.value = ((x*2)/window.innerWidth);
    }
    delay.delayTime.value = (x/window.innerWidth);
    biquadFilter.frequency.value = y*2;

    console.log(e.changedTouches[0].clientX);
},false);

window.addEventListener('touchend', function(e){
    e.preventDefault();
    down = 0;
    window.location.href = "./page.html";
    console.log("end");
},false);


// function to load sounds via AJAX
function loadSound(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {
        actx.decodeAudioData(request.response, function (buffer) {
            var soundLength = buffer.duration;
            sampleBuffer = buffer;
            setupSound();
            sound.start();
        });
    };

    request.send();
}

// set our sound buffer, loop, and connect to destination
function setupSound() {
    sound = actx.createBufferSource();
    sound.buffer = sampleBuffer;
    sound.loop = true;
    //sound.detune.value = -1000;
    sound.playbackRate.value = 0.5;
    sound.connect(biquadFilter);
    biquadFilter.connect(gain);
    gain.connect(delay);
    gain.connect(actx.destination);
    delay.connect(actx.destination);
}

window.onload = function(){
  loadSound('guitar.mp3');
  
}

