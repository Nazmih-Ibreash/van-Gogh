
alert("welcome to van's gallery");

//var age = 23;

//console.log(age);//

var username = prompt("what's your name?");

console.log(username);

document.write('<h3>' + "Hello" + username + '</h3>');

var painting = prompt("what's your favourite van's painting? please choose between: Starry Night, Irises or Wheatfield ");

if (painting == 'Starry Night') {
    document.write('<style background-color: blue>');


} else if (painting == 'Irises') {
    document.write('<img src="4.jpg" >');
} else if (painting == 'Wheatfield ') {
    document.write('<img src="5.jpg" >');
} else {
    alert('choose betwen  Starry Night, Irises or Wheatfield ');
}

var backgroungcolor = prompt("what's your favourite color background ? please choose between: red, blue or pink ");

if (backgroungcolor == 'red') {
    document.body.style.backgroundColor = "red";


} else if (backgroungcolor == 'blue') {
    document.body.style.backgroundColor = "blue";
} else if (backgroungcolor == 'pink') {
    document.body.style.backgroundColor = "pink";
} else {
    alert('sorry the back ground collor will not change ');
}
