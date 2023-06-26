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
	let name=event.id;
	audio1 = new Audio(`./sounds/${name}`);
	audio1.play();
}

function stopasound(event) {
	audio1.stop();
}