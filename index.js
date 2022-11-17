let play = document.getElementById('note');
function playMusic() {
    let audio = new Audio('../finalfantasy/TifaTheme.mp3');
    audio.play()
}
play.addEventListener('click', playMusic());


