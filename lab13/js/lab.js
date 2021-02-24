/**
Lab 13: Loops
Jordan Moore & Naish Linde
**/

// for (var i=10; i<5; i--) {
//   console.log(i);
// }
//
// fruits = ["kiwi", "kumquat", "jackfruit", "durian"];
//
// //++ -> +1
// //-- -> -1
// //+= -> +x
// //-= -> -x
//
// for (fruitNum = 0; fruitNum < fruits.length; fruitNum++) {
//   console.log(fruits[fruitNum]);
// }
//
//
// var repeatFlag = true;
// while (repeatFlag) {
//   repeatFlag = ! user.endOfInput();
// }
//
// var i =0
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for (var num = 1; num <= 100; num++) {
//   console.log(num);
//   // If the number is a multiple of 3, print “Fizz” instead of the number.
//   if (num % 15 == 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 == 0) {
//     console.log("Fizz");
//   } else if (num % 5 == 0) {
//     console.log("Buzz");
//   } else if (num % 7 == 0) {
//     console.log("Boom");
//   } else if (num % 9 == 0) {
//     console.log("Bang");
//   } else {
//     console.log(num);
//   }
//   // If the number is a multiple of 5, print “Buzz” instead of the number.
//   // For numbers which are multiples of both 3 and 5, print “FizzBuzz”
// }

/**
   -Concept: grid of squares 1px by 1px (tiles like in a mosaic)
   - grid = 1,000px by 1,000px
     -loop generates numbers 1-10,000
       - paramaters are to be defined which, if met, toggle a class
         - parameter = even -> toggle class that makes the square red
         - parameter = odd -> toggle class that makes the square blue
         - parameter = prime -> toggle class that makes the square yellow
         - parameter = multiple of 11 -> toggle class that makes the square
         white
         - parameter = multiple of 11 & even -> toggle class that makes the
         square black
     - div must be made to contain the squares
       - centered on page
       - margins to make the grid a square
**/

// for (var tile = 1; tile <= 9999; tile++) {
//   console.log(tile);
//   if (tile) {
//     $('#mosaic-box').append("<p id = 'base-tile'></p>");
//   } then if (tile % 2 == 0) {
//     $('#base-tile').toggleClass("red");
//   } then if (tile % 2 !== 0) {
//     $('#base-tile').toggleClass("blue");
//   } else {
//     console.log("x");
//   }
// }


for (var tile = 1; tile <= 20000; tile++) {
  console.log(tile);
  if (tile % 11 == 0) {
    $('#mosaic-box').append("<p class = 'yellow'></p>");
  } else if (tile % 13 == 0) {
    $('#mosaic-box').append("<p class = 'violet'></p>");
  } else if (tile % 17== 0) {
    $('#mosaic-box').append("<p class = 'white'></p>")
  } else if (tile % 2 == 0) {
    $('#mosaic-box').append("<p class = 'red'></p>");
  } else if (tile % 5 == 0) {
    $('#mosaic-box').append("<p class = 'cyan'></p>");
  } else if (tile % 2 !== 0){
    $('#mosaic-box').append("<p class = 'blue'></p>");
  } else {
    $('#mosaic-box').append("<p class = 'base-tile'></p>");
  }
}
