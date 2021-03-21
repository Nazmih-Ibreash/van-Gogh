
alert("welcome to van's gallery");

//var age = 23;

//console.log(age);//

var username = prompt("what's your name?");

alert("Hello " + username);

//document.write('<h3>' + "Hello" + username + '</h3>');

var painting = prompt("what's your favourite van's painting? please choose between: S -> Starry Night, Irises I -> or W -> Wheatfield ");

while (painting !== "S" && painting !== "I" && painting !== "W") {
    var painting = prompt("Make sure to choose between: S -> Starry Night, Irises I -> or W -> Wheatfield ");
}

var numberOfPaintings = prompt("How many times you want us to view your favourite painting?");

var result = '';

var p = '';

if (painting == 'S') {
    p = ('<img src="1.jpg" >');
} else if (painting == 'I') {
    p = ('<img src="4.jpg" >');
} else if (painting == 'W') {
    p = ('<img src="5.jpg" >');
}

for (var index = 0; index < numberOfPaintings; index++) {

    result += p;
}

document.write(result);




/*var backgroungcolor = prompt("what's your favourite color background ? please choose between: red, blue or pink ");

if (backgroungcolor == 'red') {
    document.body.style.backgroundColor = "red";
} else if (backgroungcolor == 'blue') {
    document.body.style.backgroundColor = "blue";
} else if (backgroungcolor == 'pink') {
    document.body.style.backgroundColor = "pink";
} else {
    alert('sorry the back ground collor will not change ');
}*/
