'use strict';
var btc;
var length;
var pos = 0;
var fr;
function waveform(e){
    var output = e.outputBuffer.getChannelData(0);
    for (var i = 0; i < e.outputBuffer.length; i++){
        output[i] = btc[pos];
        pos = (pos < length) ? pos+1: 0;

    }
}
var oscilator = new Pizzicato.Sound({
    source: 'script',
    bufferSize: 1024,
    volume: 0.8,
    attack: 0.4,
    release: 0,
    options: {
        audioFunction: waveform
    }
});

//get json data - request json at windowonload

window.onload = async function(){
    fetch('http://localhost:4000/btc').then(res=>{
        if (res.ok) return res.json();
        else console.log("BTC req failed: ", res);
    }).then(res => {
        btc = res.vals;
        length = btc.length;
    });

    //add event listener
    document.getElementById("noisebutton").addEventListener('click', function (){
        if(document.getElementById("noisebutton").innerHTML == "OFF"){
            document.getElementById("noisebutton").innerHTML = "ON";
            Pizzicato.context.resume();
            oscilator.play();
        } else {
            document.getElementById("noisebutton").innerHTML = "OFF";
            Pizzicato.context.suspend();
            oscilator.stop();

        }
    })
}
