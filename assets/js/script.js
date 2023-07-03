const startDate = new Date("2020-09-20");
const currentDate = new Date();
const timeDifference = currentDate.getTime() - startDate.getTime();
const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
var heartImg = document.querySelector("#heart");
var form = document.querySelector("#daysSubmit");
var input = document.querySelector("#submitIn");
var bodyEl = document.querySelector("body");
var music = document.querySelector("#music");
var ariImg = document.querySelector("#ariPics");
var footer = document.querySelector("#footer");
var computedStyle = getComputedStyle(ariImg);
var message = document.querySelector("#msg");
var time = 0;
var timeInterval;
var timeSpeed = 1000;
var animationSpeed = 1;
var positionX = 10;
var positionY = 20;
var ariImgX = 65;

var distance = positionX - ariImgX;


heartImg.style.top = positionY + "vh";
heartImg.style.left = positionX + "vw";

var modal = document.getElementById("modal");

// Get the close button element inside the modal
var closeBtn = document.getElementsByClassName("close")[0];


function playMusic(){
    music.play();
}

function stopMusic(){
    music.pause();
}


function askAri(event){
    event.preventDefault();
    // Determins the input from submission
        // When she answers wrong, show angry face
    var ariSays = parseInt(input.value);
    if(ariSays == daysDifference || (ariSays <= daysDifference + 2 && ariSays >= daysDifference - 2)){
        form.style.display = "none";
        heartImg.style.animationName = "heartBeat";
        ariImg.style.display = "flex";
        footer.style.marginTop = "45vh"
        alert("Move the heart closer...");
        message.style.display = "block";
        document.addEventListener("keydown", moveHeart);
    }
    // When she answers right, display message
    else if(ariSays != daysDifference){
        alert("What...😧 NOOO😡");
    }
            // Also add event listener for moving heart image
            // Also make heart's filter to none
        
       
}

function moveHeart(event){
    switch(event.key){
        // case "ArrowUp":
        //         positionY -= 1;
        //         break;
        //     case "ArrowDown":
        //         positionY += 1;
        //         break;
            case "ArrowRight":
                positionX += 0.5;
                break;
            case "ArrowLeft":
                positionX -= 0.5;
                break;
    }

    // timeSpeed -= 10;
    // clearInterval(timeInterval);
    // timeCounting();
    distance = ariImgX - positionX;
    if(distance < 0){
        distance *= -1;
    }
    
    if(distance > 50){
        animationSpeed = 1.5;
    }else if(distance <= 50 && distance > 30){
        animationSpeed = 1.25;
    }else if(distance <= 30 && distance > 20){
        animationSpeed = 1;
    }else if(distance <= 20 && distance > 15){
        animationSpeed = 0.7;
    } else if (distance <= 15 && distance > 10){
        animationSpeed = 0.5;
    } else if (distance <= 10){
        animationSpeed = 0.25;
    }

    heartImg.style.top = positionY + "vh";
    heartImg.style.left = positionX + "vw";
    heartImg.style.animationDuration = animationSpeed + "s";
    displayMessage();
    
}


function displayMessage(){
    switch (animationSpeed) {
        case 1:
            message.textContent = "A little bit closer...";
            break;
        case 0.7:
            message.textContent = "Can it beat faster?";
            break;
        case 0.25:
            message.textContent = "You are the reminder that my heart works fine 💕";
            document.removeEventListener("keydown", moveHeart);
    }
}

closeBtn.onclick = function() {
    modal.style.display = "none";
  };

form.addEventListener("submit", askAri);