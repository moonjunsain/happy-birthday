const startDate = new Date("2020-09-20");
const currentDate = new Date();
const timeDifference = currentDate.getTime() - startDate.getTime();
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
var heartImg = document.querySelector("#heart");
var form = document.querySelector("#daysSubmit");
var input = document.querySelector("#submitIn");
var bodyEl = document.querySelector("body");
var time = 0;
var timeInterval;

function timeCounting(){
    timeInterval = setInterval(function(){
        time++;
        if(time % 2 == 0){
            heartImg.style.filter = "saturate(0.4)";
            heartImg.style.transform = "scale(0.6)";
        } else {
            heartImg.style.filter = "none";
            heartImg.style.transform = "scale(1)";
        }
        if(time == 20){
            alert("That's how fast my heart beats when I think of you");
        }
        if(time >= 40){
            clearInterval(timeInterval);
            alert("Happy Birthday Ari");
            displayMessage();
        }

    }, 70);
}

function askAri(event){
    event.preventDefault();
    // Determins the input from submission
        // When she answers wrong, show angry face
    var ariSays = parseInt(input.value);
    if(ariSays != daysDifference){
        alert("What...😧 NOOO😡");
    }
    // When she answers right, display message
    else if(ariSays == daysDifference){
        alert("Look at the heart");
        timeCounting();
    }
            // Also add event listener for moving heart image
            // Also make heart's filter to none
        
       
}

function moveHeart(event){
    // triggered when event listener gets keydown
    // changes the position of the heart depending on arrow keys
}

function displayMessage(){
    bodyEl.style.display = "none";
}

form.addEventListener("submit", askAri)