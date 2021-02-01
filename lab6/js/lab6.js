/**
 * Author(s): Jordan Moore & Naish Linde
 * Date: 1/30/2021
 * Title: Lab 6: Objects & Arrays
**/


//declare Variables

var myTransport = [" Honda Pilot", " bus", " bike", " pegasus"];
var daWhip = {
  name : "Da Whip",
  make : "Honda",
  model : "Pilot",
  color : "Burgundy",
  currentYear : 2021,
  year : 2011,
};


//write to document

document.writeln("How I get around: ", myTransport, "</br>");
document.writeln("<br>");
document.writeln("Main Ride: <pre>",
    JSON.stringify(daWhip, null, '\t'), "</pre>");
