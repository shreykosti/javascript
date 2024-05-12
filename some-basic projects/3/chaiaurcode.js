

setInterval(()=>{
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.querySelector("#clock").innerHTML = `<span>${time}</span>`
},1000)