function createRhombus() {
    
    const height = parseInt(document.getElementById('rHeight').value);
    const colorEven = document.getElementById('colorEven').value;
    const colorOdd = document.getElementById('colorOdd').value;
    const symbol = document.getElementById('symbol').value;

    let rhombus = '';
    const rhombusDisplay = document.getElementById('rhombusDisplay');
    rhombusDisplay.innerHTML = '';  // Clear previous rhombus

    
    function generateLine(spaces, count) {
        let line = '';
        for (let j = 0; j < spaces; j++) {
            line += ' ';
        }
        for (let k = 0; k < count; k++) {
            const color = k % 2 === 0 ? colorEven : colorOdd;
            line += `<span style="color: ${color};">${symbol}</span>`;
        }
        return line + '<br>';
    }

    
    for (let i = 0; i < height; i++) {
        rhombus += generateLine(height - i - 1, 2 * i + 1);
    }

    
    for (let i = height - 2; i >= 0; i--) {
        rhombus += generateLine(height - i - 1, 2 * i + 1);
    }

    
    rhombusDisplay.innerHTML = rhombus;
}


