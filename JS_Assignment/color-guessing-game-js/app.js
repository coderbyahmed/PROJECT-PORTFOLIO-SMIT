
var scoreSpan = document.getElementById("score");
var targetCircle = document.getElementById("targetCircle");
var circlesContainer = document.getElementById("circlesContainer");

var colors = ["red","blue","green","yellow","orange","purple","aqua",];
var score = 0;
var targetColor = "";
var totalCircles = 20;


function getRandomColor(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


function refreshGame(){
    circlesContainer.innerHTML = "";

    targetColor = getRandomColor();
    targetCircle.style.backgroundColor = targetColor;

    for(var i = 1; i <= totalCircles; i++){
        var div = document.createElement("div");
        div.className = "circle";
        div.innerText = i;
        div.style.backgroundColor = getRandomColor();

        div.addEventListener("click", function(){
            if(this.style.backgroundColor === targetColor){
                score++;
            }else{
                score--;
            }

            scoreSpan.innerText = score;
            refreshGame(); 
        });

        circlesContainer.appendChild(div);
    }
}
scoreSpan.innerText = score;
refreshGame();
