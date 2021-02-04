/**
 * Author(s): Jordan Moore & Naish Linde
 * Date: 2/3/2021
 * Title: Lab 7: Functions
**/

//declare function

function sortUserName() {
  var userName = window.prompt("Hi. Please give me your name so I can fix it.");
  console.log("userName =", userName);
  //x
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //x
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameSorted);
  //x
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  //x
  return nameSorted;

}

//output
document.writeln("Oh Hey, I've fixed your Name: ",
sortUserName(), "<br>");
