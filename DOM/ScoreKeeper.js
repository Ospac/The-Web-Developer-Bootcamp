var max
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Dp = document.querySelector("#p1Display");
var p2Dp = document.querySelector("#p2Display");

var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var resetButton = document.querySelector("#reset");

p1Button.addEventListener("click",function(){
    if(!gameOver)
    {
        p1Score++;
        p1Dp.textContent = p1Score;
        if(p1Score === winningScore)
        {
                gameOver = true;
                p1Dp.classList.add("green");

         }
    }
});
p2Button.addEventListener("click",function(){
    if(!gameOver)
    {
        p2Score++;
        p2Dp.textContent = p2Score;
        if(p2Score === winningScore)
        {
                gameOver = true;
                p2Dp.classList.add("green");

         }
    }
});
function reset()
{
        gameOver = false;
        p1Score = 0;
        p2Score = 0;
        p1Dp.textContent = 0;
        p2Dp.textContent = 0;
        p1Dp.classList.remove("green");
        p2Dp.classList.remove("green");
}

resetButton.addEventListener("click",reset);
numInput.addEventListener("change",function(){
    if((Number)(this.value) < 1)
    {
        alert("Too small");
    }
    else
    {
        winningScore = (Number)(this.value);
        winningScoreDisplay.textContent = this.value;
       reset();
    }
});