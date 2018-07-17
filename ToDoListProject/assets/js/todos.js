// Check off Specific Todos By clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("checked");
});

//Click on X to delete a Todo
$("ul").on("click","span",function(event){
    //parent() is for deleting parent element(li) of 'this' span
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li>" + "<span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
})