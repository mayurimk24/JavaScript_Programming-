// Guessing Game

const max = prompt("Enter max number");

const random = Math.floor( Math.random() * max) +1;

let Guess = prompt("Guess the Number");

while(true)
{
    if(Guess == "quite")
    {
        console.log("You are quite");
        break;
    }

    if(Guess == random) {
        console.log("You are right! congrats !! random number is",random);
        break;
    }else if(Guess < random){
        Guess = prompt("hint: your number is small. Please try again");
    }else{
        Guess = prompt("you number is large, please try again");
    }
}