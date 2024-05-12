const form = document.querySelector("form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const bmi = (weight/((height*height)/10000));
    console.log(bmi);
    console.log(height);
    console.log(weight);
    document.querySelector("#results").innerHTML = `<span>${bmi}</span>`;
})