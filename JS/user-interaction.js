"use strict";

var name = ''
while (name == '') {
	name = prompt("What is your name ?");
}
alert('Welcome ' + name);

var response = confirm(name + ', Do you like pizza?')
if (response) {
	alert("Yay I like Pizza too!!");
}else {
	alert("Oh no, how come!");
}