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

let imagen1 = document.querySelector('#img1');
let imagen2 = document.getElementById('img2');
let imagen3 = document.getElementById('img3');
let destino1 = document.getElementById('container1');
let destino2 = document.getElementById('container2');
let destino3 = document.getElementById('container3');

imagen1.addEventListener("dragstart",(event)=>{
    
    event.dataTransfer.setData('text',event.target.id);
});

destino1.addEventListener("dragover",(event)=>{
        
        event.preventDefault(); 
});

destino1.addEventListener("drop",(event)=>{
    let imgSrc = event.dataTransfer.getData('text');

    event.target.appendChild(document.getElementById(imgSrc));
    document.querySelector('#p1').classList.add('none');
});

imagen2.addEventListener("dragstart",(event)=>{
    
    event.dataTransfer.setData('text',event.target.id);
});

destino2.addEventListener("dragover",(event)=>{
        
        event.preventDefault()
});

destino2.addEventListener("drop",(event)=>{
    let imgSrc = event.dataTransfer.getData('text');

    event.target.appendChild(document.getElementById(imgSrc));
    document.querySelector('#p2').classList.add('none');
});

imagen3.addEventListener("dragstart",(event)=>{
    
    event.dataTransfer.setData('text',event.target.id);
});

destino3.addEventListener("dragover",(event)=>{
        
        event.preventDefault()
});

destino3.addEventListener("drop",(event)=>{
    let imgSrc = event.dataTransfer.getData('text');

    event.target.appendChild(document.getElementById(imgSrc));
    document.querySelector('#p3').classList.add('none');
});

function reinicio() {
    window.location.reload();
}
iniciar()
/*------------------------JUEGO JS------------------------------*/
/*------------------------------JS ALAN CALVEYRA-------------------------------*/
