let userAnswer = prompt('Do you like beer')
console.log(userAnswer)
if(userAnswer.toLowerCase() == 'yes'){
    let url = "https://i.ibb.co/RBqQVXq/lightspeed-pilsner-can1-720x.jpg"
    document.write('<img src="' + url + '">')
}