//Horse Lords pyschedelic website sound 
console.log("hey");

    var AudioContext = window.AudioContext || window.webkitAudioContext || false; 

    if (AudioContext) {
        
        var actx = new AudioContext();
        
    } else {
        // Web Audio API is not supported
        // Alert the user
        alert("Apologies, beholder of this website, but the Web Audio API is not supported by your browser. Please, consider stepping outside and breathing deep of the world around you, upgrading to the latest version, or downloading Google Chrome or Mozilla Firefox");
    }

var osc = actx.createOscillator();
var distortion = actx.createWaveShaper();
var gainNode = actx.createGain();
var biquadFilter = actx.createBiquadFilter();

osc.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(gainNode);
gainNode.connect(actx.destination);

osc.frequency.value = 195;
osc.type = 'square';

var x = 0, y = 0;

biquadFilter.type = "lowpass";

biquadFilter.gain.value = 25;

distortion.curve = makeDistortionCurve(400);
distortion.oversample = '4x';

gainNode.gain.value = 0;

osc.start();




window.onmousemove = function(e){

	x = e.clientX;
	y = e.clientY;
	console.log(" x ",x/window.innerWidth," y ",y)
	biquadFilter.frequency.value = y*2;
	gainNode.gain.value = x/window.innerWidth;
}






// calculate distortion curve
function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};