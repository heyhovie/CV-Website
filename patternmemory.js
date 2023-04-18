function start(){
    document.getElementById('startPanel').style.display = 'none';
    document.getElementsByClassName('player-screen-content')[0].style.display = 'block';
    document.getElementById('play').style.display = 'none';
}

function reset(){
    location.reload();
}