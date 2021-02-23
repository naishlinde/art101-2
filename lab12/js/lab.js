/**
This is a project which will create a series of borders surrounding a button "wow!"
and it will cycle through the borders, changing their colors in a rainbow, and cycling through them
**/

// function getHouse(num) {
//
//   var remainder = num % 4;
//
//   if (remainder == 1) {
//     var str = "Gryffindor";
//   } else if (remainder == 2) {
//     var str = "Ravenclaw";
//   } else if (remainder == 3) {
//     var str = "Hufflepuff";
//   } else if (remainder == 0) {
//     var str = "Slytherin";
//   }
//   return str;
// }
//
// $('#button').click(function(){
//
// var name = $("#input").val();
// console.log(name);
// var nameLength = name.length;
// console.log(nameLength);
// var house = getHouse(nameLength);
// console.log(house);
//
// var str = ;
//
// $('#output h2').html(str);
//
// });

function sortingShell(name) {

  var length = name.length;

  var mod = length % 4;

  // % = modulus

  if (mod == 1) {
    return "Raphael";

  } else if (mod == 2) {
    return "Michelangelo";

  } else if (mod == 3) {
    return  "Leonardo";

  } else if (mod == 0) {
    return "Donatello";

  }

  return str;

};

$('#button').click(function() {

  var name = $('#input').val();

  var turtle = sortingShell(name);

  $('#output').append("<h2>");
  $('#output h2').text("Splinter has dubbed you: " + turtle)

});
