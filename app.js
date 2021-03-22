
///////////////////////////////////////////////////////////
//************    Welcome Message Function  *********/////

var username = prompt("what's your name?");

function welcomeMessage(name) {
    alert("welcome " + name + " to van's gallery");
}
welcomeMessage(username);



///////////////////////////////////////////////////////////////////
//************    favourite van's painting Function  *********/////
var painting = prompt("what's your favourite van's painting? please choose between: S -> Starry Night, I -> Irises  or W -> Wheatfield ");
var getFavPainting = function () {
    while (painting !== "S" && painting !== "I" && painting !== "W") {
        painting = prompt("Make sure to choose between: S -> Starry Night, Irises I -> or W -> Wheatfield ");
    }
}
getFavPainting();

///////////////////////////////////////////////////////////////////
//************    number of paintings Function  *********/////////
function numOfPaintings() {
    var numberOfPaintings = prompt("How many times you want us to view your favourite painting?");
    var result = '';
    var p = '';
    if (painting == 'S') {
        p = ('<img src="photos/starryNight.jpg" >');
    } else if (painting == 'I') {
        p = ('<img src="photos/irises.jpg" >');
    } else if (painting == 'W') {
        p = ('<img src="photos/field.jpg" >');
    }
    for (var index = 0; index < numberOfPaintings; index++) {
        result += p;
    }
    document.write('<h2>' + "Your favourite painting is:" + '</h2>');
   
    document.write(result);
    document.write('<h2>' + "Number of paintings is:" + numberOfPaintings + '</h2>');
}
numOfPaintings();






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


//alert("Hello " + username);
//document.write('<h3>' + "Hello" + username + '</h3>');
