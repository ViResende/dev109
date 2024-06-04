function createRhombus(size) {
    let rhombus = '';
    
  
    for (let i = 0; i < size; i++) {
        let line = '';
        for (let j = 0; j < size - i - 1; j++) {
            line += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }
        rhombus += line + '\n';
    }

   
    for (let i = size - 2; i >= 0; i--) {
        let line = '';
        for (let j = 0; j < size - i - 1; j++) {
            line += ' ';
        }
        for (let k = 0; k < 2 * i + 1; k++) {
            line += '*';
        }
        rhombus += line + '\n';
    }

    return rhombus;
}

// Display the rhombus
let size = 5;
console.log(createRhombus(size));
