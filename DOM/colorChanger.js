////Using if logic
// var btn = document.querySelector("button");
// btn.addEventListener("click",function(){
// 	if(document.body.style.backgroundColor == "white")
// 		document.body.style.backgroundColor = "purple";
// 	else
// 		document.body.style.backgroundColor = "white";
// });

////Using ClassList 
var btn = document.querySelector("button");
btn.addEventListener("click",function(){
    document.body.classList.toggle("purple");
});