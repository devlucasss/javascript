function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return 'Defina dois numeros'
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
    return `${primeiraFrase}${segundaFrase}`
}
function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os numeros ${num1} e ${num2} ${saoIguais} são iguais. `
}
function criaSegundaFrase(num1, num2) {
    soma = num1 + num2
    let maiordez = 'menor';
    let maiorvinte = 'menor';
    if(soma > 10) {
        maiordez = 'maior';
    }
    if(soma > 20) {
        maiorvinte = 'maior';
    }
    return `Sua soma é ${soma}, que é ${maiordez} que 10 e ${maiorvinte} que 20`
}

var n1 = 9; 
var n2 = 9;
console.log(comparaNumeros(n1, n2))