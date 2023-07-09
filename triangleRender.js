let isRotated = false;

function render() {
    let inputNumber = document.getElementById('number');
    let triangleContainer = document.getElementById('triangle');
    let rotatedTriangleContainer = document.getElementById('rotatedTriangle');

    let number = parseInt(inputNumber.value);

    if (isNaN(number) || number <= 0) {
        alert('Please enter a valid number greater than 0');
    } else if (number > 30) {
        alert("Please enter a number smaller than 30")
        return
    }

    let triangle = '';

    for (let i = 1; i <= number; i++) {
        let spaces = ' '.repeat(number - i);
        let asterisks = '* '.repeat(i).trim();
        triangle += spaces + asterisks + '\n';
    }

    triangleContainer.textContent = triangle;
    rotatedTriangleContainer.textContent = '';
}


function rotate() {
    let triangleContainer = document.getElementById('triangle');
    let rotatedTriangleContainer = document.getElementById('rotatedTriangle');

    if (!isRotated) {
        let triangleText = triangleContainer.textContent;
        let rotatedText = rotateText(triangleText);
        rotatedTriangleContainer.textContent = rotatedText;
        isRotated = true;
    } else {
        rotatedTriangleContainer.textContent = '';
        isRotated = false;
    }
}

function rotateText(text) {
    return text.split('\n').reverse().join('\n');
}
