add = document.getElementById('add');
subtract = document.getElementById('subtract');
divide = document.getElementById('divide');
multiply = document.getElementById('multiply');


let solutionEl = document.getElementById("solution-el");


add.addEventListener('click', () => {
    num1 = document.getElementById("num1-el").value;
    num2 = document.getElementById("num2-el").value;
    let result = parseFloat(num1) + parseFloat(num2);
    solutionEl.textContent = result;
})

subtract.addEventListener('click', () => {
    num1 = document.getElementById("num1-el").value;
    num2 = document.getElementById("num2-el").value;
    let result = parseFloat(num1) - parseFloat(num2);
    solutionEl.textContent = result;
})

divide.addEventListener('click', () => {
    num1 = document.getElementById("num1-el").value;
    num2 = document.getElementById("num2-el").value;
    let result = parseFloat(num1) / parseFloat(num2);
    solutionEl.textContent = result;
})

multiply.addEventListener('click', () => {
    num1 = document.getElementById("num1-el").value;
    num2 = document.getElementById("num2-el").value;
    let result = parseFloat(num1) * parseFloat(num2);
    solutionEl.textContent = result;
})