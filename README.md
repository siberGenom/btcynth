# btcynth
This absolute horror show of a github project uses pizzicato.js, which simplifies audiobuffering. The idea is to serve the indexes, run get_latest.bash every now and then, then serve btc.json. The js that runs in the browser waits for user input, then pumps the normalized btc data as a waveform into the audiobuffer.
<br/><br/>
There have been roughly 3500 weeks in BTC's lifetime. Audio is sampled at 44100Hz, so this utter disappointment of an online audio contraption samples at approx. 13Hz. I intend on making some cron jobs for this, and if i can be arsed, maybe build a polyphonic btc synth that uses pitchshifting, maybe chuck in a filter or two idk.
<br/><br/>
The frontend is a total shitshow because i am not to be trusted as a frontend developer.
