/* video */ 
/*let video = document.querySelector('video');
let playBoton = document.getElementById("play");
let pauseBoton= document.getElementById("pause");


setTimeout(()=>{document.getElementById("showTime").innerHTML=`Duracion video : ${video.duration.toFixed(2)}`},1000);

for (let i = 0; i < video.tim; i++) {
    console.log(video.currentTime)
    
}

playBoton.addEventListener('click',()=>{
    video.play()

   
});

pauseBoton.addEventListener('click',()=>{
    video.pause();
    flag=false;
});

function desplegar() {
    let submenu = document.querySelector(".tema");
    submenu.classList.toggle("tema-block")
}
function desptemaDia() {
    let body = document.querySelector("body");
    body.classList.remove()
    body.classList.add("body-day")
}
function temaNoche() {
    let body = document.querySelector("body");
    body.classList.remove()
    body.classList.add("body-night")
}*/


let video = document.querySelector('video');
let play = document.getElementById('play');
let pause = document.getElementById('pause');

function reproducir() {
    video.play()
} 

function pausar() {
    video.pause()
} 