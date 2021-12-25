function videoUrl(url){
    document.getElementById("slider").src = url;
}

function showMusicName(){
    document.getElementById('music-name').style.visibility="visible";
}
setTimeout('showMusicName()', 6000);

function hideMusicName(){
    document.getElementById('music-name').style.visibility="hidden";
}
setTimeout('hideMusicName()', 12000);

/* MUTED ON OFF*/
var audio = document.getElementById('bgAudio');
var img = document.getElementById('sound-img');
function muteOnOff(){
    if(audio.muted){
        audio.muted = false;
        img.src = "images/sound.png";
    } else {
        audio.muted=true;
        img.src = "images/mute.png";
    };
};

/* HIDE NAVIGATION*/
var menu = document.getElementsByClassName('toggler')[0];
var navigation = document.getElementById('navigation');
var icon = document.querySelector('.logo');

function toggleNavigationDisplay() {
    if(menu.checked) {
        navigation.style.display = 'none';
        icon.style.display = 'none';

    } else {
        navigation.style.display = 'flex';
        icon.style.display= 'flex';
    }
};

/* POPUP LOGIN*/
document.getElementById('btn1').addEventListener('click', function(){
    document.querySelector('.popup').style.display = "flex";
    document.querySelector('.popup').style.transition = "opacity 0.4s ease";
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.popup').style.display = "none";
});

/*POPUP HISTORY*/
document.querySelector('.btn2').addEventListener('click', function(){
    document.getElementById('history').style.display = "flex";

});

document.querySelector('.close-history').addEventListener('click', function(){
    document.getElementById('history').style.display = "none";
});

/*SHOW MAP*/
document.querySelector('.btn3').addEventListener('click', function(){
    document.getElementById('showMap').style.display = 'flex';
});

var map = document.getElementById('showMap');
window.onclick = function(event){
    if(event.target == this.map) {
        this.map.style.display = "none";
    };
};

/* FADEOUT VIDEO */
let video = document.getElementById('video-slider');
window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/-600;
    video.style.opacity = value;
});

