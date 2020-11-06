function playAudio() {
    document.getElementsByClassName('playBtn')[0].classList.add('hidden');
    document.getElementsByClassName('pauseBtn')[0].classList.remove('hidden');

    document.getElementById('verification').play();
}

function pauseAudio() {
    document.getElementsByClassName('pauseBtn')[0].classList.add('hidden');
    document.getElementsByClassName('playBtn')[0].classList.remove('hidden');

    document.getElementById('verification').pause();
}