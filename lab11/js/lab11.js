/**
 * Lab 11: Libraries & jQuery
 * Authors: Jordan Moore and Naish linde
 * February 17, 2021
 * jQuery link:        src="https://code.jquery.com/jquery-3.5.1.min.js"
         integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
         crossorigin="anonymous"></script>
 **/

var challengesEl = $('#challenges')
var problemsEl = $('#problems')
var resultsEl = $('#results')
var pageEl = $('#content')


var myButton = "<button id='button'>Abracadabra</button>"
var my2Button ="<button id='buttonb'>Alakazam</button>"
var my3Button ="<button id='buttonc'>Hocus Pocus</button>"
var my4Button ="<button id='buttond'>Bibbidi-Bobbidi-Boo</button>"


challengesEl.append(myButton)
problemsEl.append(my2Button)
resultsEl.append(my3Button)
pageEl.append(my4Button)

var buttonEl = $('#button')
var button2El = $('#buttonb')
var button3El = $('#buttonc')
var button4El = $('#buttond')


challengesEl.children('button').on('click', function() {
  challengesEl.toggleClass('special');
});

challengesEl.children('button').on('click', function() {
  buttonEl.toggleClass('special-button');
});


problemsEl.children('button').on('click', function() {
  problemsEl.toggleClass('special');
});

problemsEl.children('button').on('click', function() {
  button2El.toggleClass('special-button');
});


resultsEl.children('button').on('click', function() {
  resultsEl.toggleClass('special');
});

resultsEl.children('button').on('click', function() {
  button3El.toggleClass('special-button');
});

pageEl.children('button').click(function() {
  pageEl.fadeOut(1600);
});







//add class called special
