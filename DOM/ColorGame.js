var NumOfColor = 6;
var combo = 0;
var isEnd = false;
var colors;
var pickedColor;
var comboDisplay = document.querySelector("#comboCount");
var squares = document.querySelectorAll(".square");
var titleRGB = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


function init(){
     //Set mode eventListeners 
    for(i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            //turn off every modeButtons
            for(var j = 0; j < modeButtons.length; j++){
                modeButtons[j].classList.remove("selected");
            }
            this.classList.add("selected");
            this.textContent === "EASY" ? NumOfColor = 3 : NumOfColor = 6;
            resetGame();
        });
    }
    for(var i = 0; i < NumOfColor; i++){
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
    resetButton.addEventListener("click",function(){
        resetGame();
    });
    resetGame();
}

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
    for(var i = 0; i< squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }

    // change color of h1 backgroundColor to original color
    h1.style.backgroundColor = "steelblue";
    message.textContent = "";

    isEnd = false;
}