function videoUrl(url){
    document.getElementById("slider").src = url;
}

/* MUTED ON OFF*/
var audio = document.getElementById('bgAudio');
function muteOnOff(){
    if(audio.muted){
        audio.muted = false;
    } else {
        audio.muted=true;
    };
};

/* HIDE NAVIGATION*/
var menu = document.getElementsByClassName('toggler')[0];
var navigation = document.getElementById('navigation');

function toggleNavigationDisplay() {
    if(menu.checked) {
        navigation.style.display = 'none';
    } else {
        navigation.style.display = 'flex';
    }
};

/* POPUP LOGIN*/
document.getElementById('btn1').addEventListener('click', function(){
    document.querySelector('.popup').style.display = "flex";
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popup').style.display = "none";
});

var popClose = document.getElementById('popup');
window.onclick = function(event){
    if(event.target == this.popClose) {
        this.popClose.style.display = "none";
    };
};

 /*POPUP SIGN IN*/
document.getElementById('btnSign').addEventListener('click', function(){
    document.getElementById('popupSign').style.display = 'flex';
    document.getElementById('popup').style.display = "none";
});

document.querySelector('.close-sign').addEventListener('click', function(){
    document.getElementById('popupSign').style.display = "none";
    document.getElementById('popup').style.display = "flex";
});