/**
 * Lab 9: Lab 9: JavaScript for the Web
 * Naishe Linde and Jordan Moore
 * February 9, 2021
 **/

var outputEl = document.getElementById("output");

var new1El = document.createElement ("p");

new1El.innerHTML = "Wine is constant proof that God loves us and loves to see us happy. - Benjamin Franklin";

var new2El = document.createElement ("p");

new2El.innerHTML = "When we talk to God, we're praying. When God talks to us, we're schizophrenic. - Jane Wagner";

outputEl.appendChild(new1El);

outputEl.appendChild(new2El);

new1El.style.fontFamily = "Raleway";

new2El.style.fontFamily = "Raleway";
