
function guessingGame(){
    // prompt user to enter a number
    let userAnswer = prompt('Please Enter a number between 1-100');
    let correctAnswer = 71; // maybe we can randomize this later
    let attempts = 8;

    for(let i = 0; i < attempts; i++){
        console.log(i)
        while(userAnswer < 1|| userAnswer > 100){
            userAnswer = prompt('Try Again: Please Enter a number between 1-100');
        }
        if(userAnswer == correctAnswer){
            alert('DING DING DING.  You Got it right');
            break;
        }else if (userAnswer > correctAnswer && i != 7){
            userAnswer = prompt('To High. Try Again 1-100');
        }else if(userAnswer < correctAnswer && i != 7){
            userAnswer = prompt('To Low. Try Again 1-100');
        } else{
            alert('Sorry, you Lost!')
        }


       
            }
    }
