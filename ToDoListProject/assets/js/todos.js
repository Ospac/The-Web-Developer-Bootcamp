// Check off Specific Todos By clicking
$("li").on("click",function(){
    $(this).toggleClass("checked");
});

//Click on X to delete a Todo
$("span").click(function(event){
    //parent() is for deleting parent element(li) of 'this' span
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});