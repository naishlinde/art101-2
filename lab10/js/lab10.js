/** Lab 10: Javascript Events & Forms **
** By Jordan Moore & Naish Linde **
** Date: 2/16/2021 **/



var button = document.getElementById('my-button');
button.addEventListener('click',
  function() {
  var inputValue = document.getElementById('user-name').value;
  console.log("inputValue =", inputValue)

  var nameArray = inputValue.split('');
  console.log("nameArray =", nameArray);
  //x
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //x
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  var newName = document.getElementById('my-button');

  newName.innerHTML = 'Here is your new name: ' + nameSorted;

});
