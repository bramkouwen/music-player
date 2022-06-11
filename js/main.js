// create a module for our project
(() => {

    let mainHeadline = document.querySelector('#main-headline');
        theAudio = document.querySelector('audio'),
        theThumbs = document.querySelectorAll('img'),
        playBut = document.getElementById('play-button'),
        pauseBut = document.getElementById('pause-button'),
        rewindBut = document.getElementById('rewind-button');

    function loadAudioTrack() {
        theAudio.src = `audio/${this.dataset.trackref}.mp3`;

        theAudio.load();
        //theAudio.play();

        playAudio();

    }

    function playAudio() { theAudio.play(); }

    function pauseAudio() { theAudio.pause(); }

    function rewindAudio() { theAudio.currentTime = 0; }

    theThumbs.forEach(thumb => thumb.addEventListener('click', loadAudioTrack));
    
    playBut.addEventListener('click', playAudio);
    pauseBut.addEventListener('click', pauseAudio);
    rewindBut.addEventListener('click', rewindAudio);

})()
