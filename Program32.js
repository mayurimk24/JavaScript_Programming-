const favoriteMovie = "Avatar";

let guess = prompt("Guess my favorite movie");

while(guess != favoriteMovie)
{
    if(guess === "quit")
    {
      console.log("You quit.");
      break;
    }
    guess = prompt("Wrong guess. Please try again!");
}

if(guess == favoriteMovie)
{
    console.log("Congrats!!");
}