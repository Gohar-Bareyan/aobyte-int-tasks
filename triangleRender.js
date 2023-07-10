let isRotated = false;
let input = document.getElementById('number');
let renderButton = document.getElementById("renderButton");
let rotateButton = document.getElementById("rotateButton");
let triangleContainer = document.getElementById('triangle');
let rotatedTriangleContainer = document.getElementById('rotatedTriangle');

document.addEventListener("DOMContentLoaded", function () {
    renderButton.addEventListener("click", render);
    rotateButton.addEventListener("click", rotate);
});

function render() {
    let number = parseInt(input.value);
    if (!isValidNumber(number)) {
        return;
    }

    let triangle = generateTriangle(number);

    attachTriangleToDOM(triangle);
}

function isValidNumber(number) {
    if (isNaN(number) || number <= 1) {
        alert('Please enter a valid number greater than 1');
        return false;
    } else if (number > 30) {
        alert('Please enter a number smaller than 30');
        return false;
    }
    return true;
}

function generateTriangle(number) {
    let triangle = '';
    for (let i = 1; i <= number; i++) {
        let spaces = ' '.repeat(number - i);
        let asterisks = '* '.repeat(i)
        triangle += spaces + asterisks + '\n';
    }
    return triangle;
}

function attachTriangleToDOM(triangle) {
    triangleContainer.textContent = triangle;
    rotatedTriangleContainer.textContent = '';
}

function rotate() {
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
