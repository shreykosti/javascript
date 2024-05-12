let body = document.querySelector("body");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");



let color = function(){
    let num = Math.floor(Math.random()*1000000)
    body.style.backgroundColor = `#${num}`
}
let interval
start.addEventListener('click',(e)=>{
    //
    if(!interval){
        interval = setInterval(color,1000)
    }
    //interval = setInterval(color,1000)
})

stop.addEventListener("click",()=>{
    clearInterval(interval)
    //
    interval = null;
})