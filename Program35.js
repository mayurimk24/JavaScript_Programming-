// Todo App

let Todo = [];
let req = prompt("Enter your choice");

while(true)
{
    if(req == "quit")
    {
        console.log("You quite");
        break;
    }else if(req == "add")
    {
        let add = prompt("Enter your value you have to add");
        Todo.push(add);
        console.log("Task Added");
    }else if(req == "list")
    {
        console.log("Here your list");
        for(list of Todo)
        {
            console.log(list);
        }
    }else if(req == "delete")
    {
        let idx = prompt("Enter your value to you have to delete");
        // let idx = Todo.indexOf(ts);
        Todo.splice(idx, 1);
        console.log("Task deleted");
    }else{
        console.log("Enter correct choice");
    }

    req = prompt("Enter your choice");
}