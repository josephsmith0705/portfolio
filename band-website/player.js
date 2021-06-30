const thumbnail = document.querySelector('#thumbnail'); 
const song = document.querySelector('#song'); //Song object
const progressBar = document.querySelector('#progress-bar'); 
const volumeBar = document.querySelector('#volume-bar'); 
let pPause = document.querySelector('#play-pause'); 

let paused = true;
function playPause() {
	let loop = true;
    if (paused) {
		const song = document.querySelector('#song'),
		thumbnail = document.querySelector('#thumbnail');
		pPause.src = "content/pause.png";
		song.play();
		paused = false;
    } else {
		loop=false;
		pPause.src = "content/play.png";
        song.pause();
        paused = true;
    }
}

//Loop the song once finished
song.addEventListener('ended', function(){
	pPause.src = "content/play.png";
	paused = true;
});

//Skip forward in song by 10 seconds
function skip() {
	if (song.currentTime >= song.duration - 10){
		song.currentTime = 0; //Reset song
		paused = true;
		song.pause();
		pPause.src = "content/play.png"
	}
	else{
		song.currentTime = song.currentTime+10;
	}
	updateProgressValue();
}

//Skip backwards in song by 10 seconds
function skipBack() {
	if (song.currentTime < 10){
		song.currentTime = 0;
	}
	else {
		song.currentTime = song.currentTime-10;
	}
	updateProgressValue();
}

//Update progressBar.max to song object's duration, same for progressBar.value, update currentTime/duration DOM
function updateProgressValue() {
    progressBar.max = song.duration;
    progressBar.value = song.currentTime;
};

//Run updateProgressValue function every 1/2 second to show change in progressBar and song.currentTime on the DOM
setInterval(updateProgressValue, 500);

//Function where progressBar.value is changed when slider thumb is dragged without auto-paused audio
function changeProgressBar() {
    song.currentTime = progressBar.value;
};

volumeBar.max = "100";
volumeBar.value = "100";

//Function where volumeBar.value is set when slider thumb is dragged
function changeVolume() {
    song.volume = (volumeBar.value / 100);
};
