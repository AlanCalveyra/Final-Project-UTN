/* video */ 

/*------------------------------JS ALAN CALVEYRA-------------------------------*/
let video = document.querySelector('video');
let play = document.getElementById('play');
let pause = document.getElementById('pause');

function reproducir() {
    video.play()
} 

function pausar() {
    video.pause()
}

/*------------------------JUEGO JS------------------------------*/

let imagen1 = document.querySelector('#img3');
let imagen2 = document.getElementById('img2');
let imagen3 = document.getElementById('img1');
let destino1 = document.getElementById('container1');
let destino2 = document.getElementById('container2');
let destino3 = document.getElementById('container3');

imagen1.addEventListener("dragstart",(e)=>{
    
    e.dataTransfer.setData('text',e.target.id);
});

destino1.addEventListener("dragover",(e)=>{
        
        e.preventDefault(); 
});

destino1.addEventListener("drop",(e)=>{
    let imgSrc = e.dataTransfer.getData('text');

    e.target.appendChild(document.getElementById(imgSrc));
    document.querySelector('#p1').classList.add('none');
});

imagen2.addEventListener("dragstart",(e)=>{
    
    e.dataTransfer.setData('text',e.target.id);
});

destino2.addEventListener("dragover",(e)=>{
        
        e.preventDefault()
});

destino2.addEventListener("drop",(e)=>{
    let imgSrc = e.dataTransfer.getData('text');

    e.target.appendChild(document.getElementById(imgSrc));
    document.querySelector('#p2').classList.add('none');
});

imagen3.addEventListener("dragstart",(e)=>{
    
    e.dataTransfer.setData('text',e.target.id);
});

destino3.addEventListener("dragover",(e)=>{
        
        e.preventDefault()
});

destino3.addEventListener("drop",(e)=>{
    let imgSrc = e.dataTransfer.getData('text');

    e.target.appendChild(document.getElementById(imgSrc));
    document.querySelector('#p3').classList.add('none');
});

function reinicio() {
    window.location.reload();
}
iniciar()
/*------------------------JUEGO JS------------------------------*/
/*------------------------------JS ALAN CALVEYRA-------------------------------*/
