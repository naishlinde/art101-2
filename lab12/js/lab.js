/**
Lab 12: Conditionals
Jordan Moore & Naish Linde
2/23/2020
**/

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
