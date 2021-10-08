function getUserName(){

let userName = prompt('Please enter your name!');
    console.log(userName);

if(userName == 'john'){
    document.write('<h2>Welcome Big Sexy! ' + userName + '</h2>');
    } else {
    document.write('<h2>Welcome ' + userName + '</h2>');
    }
    return userName;
}


function beerrules(){
    let userAnswer = prompt('Do you like beer');
       // console.log(userAnswer)
       
    if(userAnswer.toLowerCase() == 'yes'){
        let url = "https://i.ibb.co/RBqQVXq/ lightspeed-pilsner-can1-720x.jpg";
       document.write('<img src="' + url + '">');
   }
   
     }
     
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
    
function userplaygame(){
    let userAnswer=prompt("do you want to play a game?")
    if(userAnswer.toLowerCase() == 'yes'){
        guessingGame()
   }

}