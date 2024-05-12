function createRhombus() {
    const height = parseInt(document.getElementById('rHeight').value, 10);
    const colorEven = document.getElementById('colorEven').value;
    const colorOdd = document.getElementById('colorOdd').value;
    const symbol = document.getElementById('symbol').value;
    const display = document.getElementById('rhombusDisplay');
    display.innerHTML = '';

    
    for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            const color = j % 2 === 0 ? colorOdd : colorEven;
            line += `<span style="color:${color};">${symbol}</span>`;
        }
        display.innerHTML += `<p>${line}</p>`;
    }

    
    for (let i = height - 2; i >= 0; i--) {
        let line = '';
        for (let j = 0; j <= i; j++) {
            const color = j % 2 === 0 ? colorOdd : colorEven;
            line += `<span style="color:${color};">${symbol}</span>`;
        }
        display.innerHTML += `<p>${line}</p>`;
    }
}
