/**
 * Author(s): Jordan Moore & Naish Linde
 * Date: 2/3/2021
 * Title: Lab 8: Anon Functions & Callbacks
**/

//test 1
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

  setTimeout (function() {
    firstThing("Test 2");
  }, 0);

  setTimeout (function() {
    secondThing("Test 2");
  }, 0);

  setTimeout (function() {
    thirdThing("Test 2");
  }, 0);

  setTimeout (function() {
    firstThing("Test 3");
  }, 3000);


  setTimeout (function() {
    secondThing("Test 3");
  }, 1000);

  setTimeout (function() {
    thirdThing("Test 3");
  }, 2000);

function pleaseGodWork() {
  var passOutput = document.getElementById("output");
  passOutput.innerHTML = ("Here is our JS output: " + setTimeout(function() {
    thirdThing("Test4");
  }));
}
