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