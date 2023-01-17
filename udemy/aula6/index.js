const alunos = ['Luiz', 'Lucas', 'Maria'];
console.log(alunos[1]);
alunos[alunos.length] = "Luiza"; //add no fim
alunos[alunos.length] = "Fabio";
alunos[alunos.length] = "Nicolas";
alunos.push('Olivia'); //add no fim
alunos.unshift('Sergio') //add no indice 0
alunos.pop(); //remove do final
const removido = alunos.pop(); // salva o removido numa constante
alunos.shift(); //remove indice 0
delete alunos[1]; // caso queira apagar um item de uma lista usar delete alunos[1] para nao alterar o resto do array 
alunos.push('Luiza', 'Edurado')
alunos.slice(0, 3); //fatiamento = cortar o array em certos pontos especificos
console.log(alunos);
