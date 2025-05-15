// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

const prompt = require('prompt-sync')();2

let idade = Number(prompt('Digite sua idade: '))
if(idade <= 13){ 
    console.log('você é uma criança')
}else if(idade <= 17){
    console.log('Você é um adolescente')
}else if(idade <= 59){
    console.log('Você é um adulto')
}else{
    console.log('Você é um idoso')
}
