
function addItem() {
    var newItem = document.getElementById('items').value;
  
    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');
  
    // Create a text node with the value from the input field and store it in a variable.
    var newText = document.createTextNode(newItem);
  
    // Attach the new text node to the new element.
    newEl.appendChild(newText);
  
    // Find the position where the new element should be added.
    var position = document.getElementById('todo');
  
    // Insert the new element into its position.
    position.appendChild(newEl);
  }
  
