let arr = [
    {songName: "tere Naam", url: "./songs/Tere Naam.mp3", img: "./images/tere naam.jpg", duration: "5:27", artist: "by Kaavish"},
    {songName: "faasle", url: "./songs/faasle.mp3", img: "./images/faasle.png", duration: "5:23", artist: "by Kaavish"},
    {songName: "o yara", url: "./songs/o yara.mp3", img: "./images/o yara.jpg", duration: "4:50", artist: "by Kaavish"},
    {songName: "neu la leya", url: "./songs/neu la lya beparwah de naal.mp3", img: "./images/neu la leya.png", duration: "7:22", artist: "by Kaavish"},
    {songName: "rung", url: "./songs/rung.mp3", img: "./images/rung.png", duration: "2:51", artist: "by Kaavish"}
];
// console.log(arr);
const allSongs = document.querySelector('#all-songs');
const poster = document.querySelector('#left');
const play = document.querySelector('#play');
const backward = document.querySelector('#backward');
const forward = document.querySelector('#forward');


function displaySongCards(){  //for displaying the songs in the array   
let clutter = "";
arr.forEach((song, indx) => {
    clutter += `<div class="song-card" id="${indx}">
                    <div class="part1">
                        <img src="${song.img}" alt="tere naam">
                        <div class="song-info">
                            <p>${song.songName}</p>
                            <p>${song.artist}</p>
                        </div>
                    </div>
                    <div class="duration">${song.duration}</div>
                </div>`
});
allSongs.innerHTML = clutter;
}
displaySongCards();
// window.addEventListener('DOMContentLoaded', displaySongCards);


let audio = new Audio();
let selectedSong = 0; //by default we are selecting the first song

function select_audio_poster(){ //to set the audio url and poster
    audio.src = arr[selectedSong].url;
    poster.style.backgroundImage = `url("${arr[selectedSong].img}")`;
};

if(selectedSong == 0){ //for initial use only
    select_audio_poster();
    console.log("selected song initially!");
}

allSongs.addEventListener('click', (e) => {
    selectedSong = parseInt(e.target.id);
    play.innerHTML = `<i class="ri-pause-large-fill"></i>`;
    beingPlayed = 1;
    console.log("selected song is", selectedSong);
    select_audio_poster();
    audio.play();
});

let beingPlayed;
play.addEventListener("click", () => { //play and pause
    if(beingPlayed == 1){
        // console.log("change");
        play.innerHTML = `<i class="ri-play-large-fill"></i>`;
        audio.pause();
        select_audio_poster();
        beingPlayed = 0;
    }else {
        play.innerHTML = `<i class="ri-pause-large-fill"></i>`;
        select_audio_poster();
        audio.play();
        // console.log("change");
        beingPlayed = 1;
    }
});

forward.addEventListener('click', (e) => { //forward button
    selectedSong++;
    if(selectedSong > parseInt(arr.length)-1){
        selectedSong = 0;
    }
    play.innerHTML = `<i class="ri-pause-large-fill"></i>`;
    console.log(play.innerHTML);
    console.log(selectedSong);
    select_audio_poster();
    audio.play();
});

backward.addEventListener('click', (e) => {  //backward button
    selectedSong--;
    if(selectedSong < 0){
        selectedSong = parseInt(arr.length)-1;
    }
    play.innerHTML = `<i class="ri-pause-large-fill"></i>`;
    console.log(play.innerHTML);
    console.log(selectedSong);
    select_audio_poster();
    audio.play();
});