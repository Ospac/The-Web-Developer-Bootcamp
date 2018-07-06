window.setTimeout(function(){
    var tdList =[];
    while(true){
        var order = prompt("What's your order?");
        if(order == "new")
        {
            order = prompt("What will you do?");
            tdList.push(order);
            console.log(order + " added to Todo list");
        }
        else if(order == "list")
        {
            if(tdList.length === 0)
                console.log("There is no todo now");
            else
            {
                console.log("**********\n");
                tdList.forEach(function(item,idx){
                    console.log(idx + ": " + item);
                });
                console.log("**********\n");
            }
        }
        else if(order == "delete")
        {
            var idx = prompt("what index do you want to delete?");
            tdList.splice(idx,1);
        }
        else if(order == "quit")
        {
            alert("OK bye");
            break;
        }
    }
},500);