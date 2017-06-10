"use strict"
var wzrostMateusz = 190;
var wzrostOlgi = 160;
/*
warunek if
*/
if (wzrostOlgi < wzrostMateusz) {
	console.log('Olga jest niższa :)');
}

/*
warunek if else
*/
var wzrostMateusz = 150;
var wzrostOlgi = 160;

if (wzrostOlgi > wzrostMateusz) {
	console.log('Olga jest wyższa :)');
}
else {
	console.log("Olga jest niższa");
}

/*
warunek if else if
*/
var wzrostMateusz = 150;
var wzrostOlgi = 150;

if (wzrostOlgi > wzrostMateusz) {
	console.log('Olga jest wyższa :)');
}
else if ( wzrostOlgi == wzrostMateusz ) {
	console.log("Olga jest tak wysoka jak Mateusz")
}
else {
	console.log("Olga jest niższa");
}


/* warunek switch */

var kolor = "zielony";
switch (kolor) {
	case "czerwony": console.log('Kolor czerwony')
		
	case "zielony": console.log ('Kolor zielony') 
	
	case "niebieski":console.log ('kolor niebieski')
		break;
	default:
		console.log('inny kolor');
	
}