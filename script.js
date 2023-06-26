//your JS code here. If required.
let audio1;
document.getElementById('applause').addEventListener('click',makeasound);
document.getElementById('boo').addEventListener('click',makeasound);
document.getElementById('gasp').addEventListener('click',makeasound);
document.getElementById('tada').addEventListener('click',makeasound);
document.getElementById('victory').addEventListener('click',makeasound);
document.getElementById('wrong').addEventListener('click',makeasound);
document.getElementById('stop').addEventListener('click',stopasound);

function makeasound(event) {
	let name=event.target.id;
    if(audio1) {
    audio1.pause();
    audio1.currentTime=0;
    }
    // console.log(name,event,event.target);
	audio1 = new Audio(`./sounds/${name}.mp3`);
	audio1.play();
}

function stopasound(event) {
    // console.log('entered');
	audio1.pause();
    audio1.currentTime=0;
}