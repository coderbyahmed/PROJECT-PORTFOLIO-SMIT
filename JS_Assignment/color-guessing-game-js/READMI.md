<!-- html guide line  -->

<!-- sabse pehly meny html structure/skeleton bana ya usske ander meny 
besik code likha jesy -->

<!-- <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Color Guessing Game</title>
<link rel="stylesheet" href="style.css">

<!-- ye yahan per css file link hai -->

<!--</head>
<body>

<div class="header"> ye mera head section hai jis main score box hai
    <div class="scoreBox">
        Score: <span id="score">0</span>
        es ko jo id di hai ye issy javaScript se pakra hai target karny ke liye
    </div>

    <div class="targetCircle" id="targetCircle"></div>
    aur ye mera main target circle hai jo target circle hai is ko bhi js se pakra huva hai random colors change karny ke liye
</div>

<hr>

<div class="circlesContainer" id="circlesContainer">
     circles JS se aayenge aur yahan per bakki 20 circle aaengy js se
</div>

<script src="app.js"></script>
</body>
</html> -->



<!-- 
Body Styling
body{
    margin:0;
    font-family: Arial, sans-serif;
    background:#f4f4f4;
    padding:20px;
}


Margin remove

Font set

Light background

Thoda space

Header Layout
.header{
    display:flex;
    justify-content:space-between;
    align-items:center;
}

🔍 Iska matlab:

display:flex → items ek line me

space-between → score left, target right

align-items:center → vertically center

➡️ Isi se tumhara target circle right side aa raha hai

Target Circle
.targetCircle{
    width:90px;
    height:90px;
    border-radius:50%;
    border:3px solid black;
}


Square ko circle banaya

Border diya

Color JS se aata hai

Bottom Circles Layout
.circlesContainer{
    display:flex;
    flex-wrap:wrap;
    gap:15px;
    justify-content:center;
}


Multiple circles ek line me

Space khatam ho to next line

Center aligned

Individual Circle
.circle{
    width:70px;
    height:70px;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    font-weight:bold;
    cursor:pointer;
}


Circle shape

Number center me

Cursor pointer → clickable -->



<!-- 
clickable

🧠 PART 3: JavaScript (REAL GAME LOGIC)

👉 JavaScript game ka dimaag hai

1️⃣ DOM Elements Pakadna
var targetCircle = document.getElementById("targetCircle");
var circlesContainer = document.getElementById("circlesContainer");
var scoreSpan = document.getElementById("score");


📌 JS ko bataya:

Target circle kahan hai

Circles kahan add karne hain

Score kahan update karna hai

2️⃣ Game Variables
var colors = ["red","blue","green","yellow","orange","purple","aqua"];
var score = 0;
var targetColor = "";
var totalCircles = 20;


colors → possible colors

score → user ka score

targetColor → upar wale circle ka color

totalCircles → neeche 20 circles

3️⃣ Random Color Function
function getRandomColor(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


🧠 Logic:

Random index nikala

Colors array se color uthaya

Return kar diya

4️⃣ Main Game Function (refreshGame)
function refreshGame(){


👉 Ye function har round ke baad call hota hai

🔹 Circles clear karna
circlesContainer.innerHTML = "";


➡️ Purane circles hata diye

🔹 Target color set karna
targetColor = getRandomColor();
targetCircle.style.backgroundColor = targetColor;


➡️ Har round me naya target color

🔹 20 Circles Banana
for(var i = 1; i <= totalCircles; i++){


Loop chala → 20 circles

🔹 Circle create karna
var div = document.createElement("div");
div.className = "circle";
div.innerText = i;
div.style.backgroundColor = getRandomColor();


New div

Circle class

Number likha

Random color

🔹 Click Logic (MOST IMPORTANT)
div.addEventListener("click", function(){
    if(this.style.backgroundColor === targetColor){
        score++;
    }else{
        score--;
    }

    scoreSpan.innerText = score;
    refreshGame();
});


🧠 Logic:

Agar color match → score +

Galat → score −

Score update

Game refresh (sirf colors)

📌 Score reset nahi hota

5️⃣ Game Start
scoreSpan.innerText = score;
refreshGame();


➡️ Page load hote hi game start -->