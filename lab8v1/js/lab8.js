/**
 * Author(s): Jordan Moore & Naish Linde
 * Date: 2/3/2021
 * Title: Lab 7: Functions
**/

//test 1
function(){}

function firstThing(test){
  console.log(test + ": This has been a test.<br>")
}

function secondThing(test){
  console.log(test + ": This has been a test.<br>")
}

function thirdThing(test){
  console.log(test + ": This has been a test.<br>")
}

firstThing("Test 1");
secondThing("Test 1");
thirdThing("Test 1");

//test 2
setTimeout (function() {
  firstThing("Test 2");
}, 0);

setTimeout (function() {
  secondThing("Test 2");
}, 0);

setTimeout (function() {
  thirdThing("Test 2");
}, 0);

//test 3 - order is 2, 3, 1
setTimeout (function() {
  firstThing("Test 3");
}, 3000);


setTimeout (function() {
  secondThing("Test 3");
}, 1000);

setTimeout (function() {
  thirdThing("Test 3");
}, 2000);
