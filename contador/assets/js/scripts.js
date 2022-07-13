var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
function subtrai() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function somar() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

