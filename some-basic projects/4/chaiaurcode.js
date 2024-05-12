
let mynum = Math.floor(Math.random()*100) + 1;
let button = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let count = 1;
let playGame = true;
let pguesses = document.querySelector(".guesses");
let display = document.querySelector(".lowOrHi");
let displayCount = document.querySelector(".lastResult");

if(playGame == true){
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateguess(guess);
    })
}


function validateguess(guess){
    if(isNaN(guess)){
        displayStatus(`enter correct value bitch`) 
    }else if(guess < 1){
        displayStatus(`enter correct value bitch`)  
    }else if(guess>100){
        displayStatus(`enter correct value bitch`)  
    }else{
        if(count == 11){
            previousguessdisplay(guess);
            displayStatus(`correct value is ${mynum}`)
            endgame();
        }else{
            count++;
            console.log(count)
            previousguessdisplay(guess);
            checkguess(guess);    
        }
    }
}

function checkguess(guess){
    guess = parseInt(userInput.value);
    if(guess == mynum){
        displayStatus(`your guess is correct`)
        endgame();
    }else if(guess > mynum){
        displayStatus(`your guess is to high`)
    }else if(guess < mynum){
        displayStatus(`your guess is to low`)
    }
}

function displayStatus(message){
    userInput.value = " ";
    display.innerHTML = `${message}`
}

function previousguessdisplay(guess){
    pguesses.textContent += `${guess} `;
    displayCount.innerHTML = `${11 - count}`

}
function endgame(){
    playGame = false;
}

function startgame(){

}

