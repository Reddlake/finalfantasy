let play = document.getElementById('button');
let count = 0;
function playMusic() {
    let audio = new Audio('TifaTheme.mp3');
    if(count == 0){
        count = 1;
        audio.play();
    } else {
        count = 0;
        audio.pause();
    }
}


play.addEventListener('click', playMusic);

