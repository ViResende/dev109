/* Ask user for a value */
var userInput = prompt("Enter a number for the multiplication table:");


var table = parseInt(userInput);

if (isNaN(table)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  /* Initialize the variable msg with a heading */
  var msg = '<h2>Multiplication Table for ' + table + '</h2>';

  /* Generate the multiplication table */
  var i = 1;
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }

  /* Write the message into the page */
  var el = document.getElementById('blackboard');
  el.innerHTML = msg;
}
