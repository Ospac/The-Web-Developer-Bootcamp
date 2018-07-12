var NumOfColor = 6;
var combo = 0;
var comboDisplay = document.querySelector("#comboCount");
var isEnd = false;
var newColorsCount = 3;
var newColor = true;
var newColorsCountDisplay = document.querySelector("#newColorsCount");
var colors = generateRandomColors(NumOfColor);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var titleRGB = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

resetButton.addEventListener("click",function(){
        resetGame();
});

easyButton.addEventListener("click",function(){
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    NumOfColor = 3;
    resetGame();
    for(var i = 3; i < 6; i++){
        squares[i].style.display = "none";
    }
});
hardButton.addEventListener("click",function(){
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    NumOfColor = 6;
    for(var i = 3; i < 6; i++){
        squares[i].style.display = "block";
    }
    resetGame();
});

titleRGB.textContent = pickedColor;

for(var i = 0; i < NumOfColor; i++){
    //add initial color to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listeners to squares 
    squares[i].addEventListener("click",function(){
        //compare color of square to picked color
        if(this.style.backgroundColor === pickedColor){
            message.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColor(pickedColor);

            //comboDisplay Update
            if(isEnd == false){
                combo++;
                comboDisplay.textContent = combo;
                isEnd = true;
            }
        }
        else{
            this.style.backgroundColor = "#232323";
            message.textContent = "Try Again";

            //comboDisplay Update
            comboChance = false;
            combo = 0; 
            comboDisplay.textContent = combo;
        }
    });
}

//////functions//////

//set 'colors' to have random RGBs 
function generateRandomColors(colorNum){
    var ary = [];
    //add random colors to array
    //repeat 'colorNum' times
    for(var i = 0; i < colorNum; i++){
        ary.push( randomColor() );
    }
    return ary;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
//when player pick answer, change all color of squares and title's background
function changeColor(color){
    for(var i = 0; i < NumOfColor; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.backgroundColor = color;
}
//pick random color among 'colors'
function pickColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}
function resetGame(){
    resetButton.textContent = "New Colors";
    //Generate all new colors array
    colors = generateRandomColors(NumOfColor);
    //pick new answer Color from colors array
    pickedColor = pickColor();
    //change RGB title to match picked color
    titleRGB.textContent = pickedColor;
    //change color of all squares
    for(var i = 0; i< NumOfColor; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    // change color of h1 backgroundColor to original color
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";

    isEnd = false;
}