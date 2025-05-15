const prompt = require('prompt-sync')();

// 1. Programa para verificar se um número é par ou ímpar
// Primeiro ede um número para o usuário
// Depois verifica se o número é par ou ímpar

 let valor1 = Number(prompt("digite um número:"))
 if(valor1%2==0){
    console.log("par")
 }else{
    console.log("impar")
 }






// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

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






// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.


let n1 = Number(prompt("Digite uma nota:"))

if(n1>=7){
    console.log("Aprovado")
}else if(n1>=5 && n1<7){
    console.log("Recuperação")
}else{
    console.log("Reprovado")
}






// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

let op = 0;

do{
    console.log("\nDigite 1 para ver tarefas");
    console.log("Digite 2 para acessar notas");
    console.log("Digite 3 para assistir à aula");
    console.log("Digite 4 para solicitações");
    console.log("Digite 0 para sair opção\n");
    
    op = Number(prompt("Digite um numero de Opção: "));
    switch(op){
        case 1:
            console.log("Ver tarefas!");
            break
        case 2:
            console.log("Acessar notas!");
            break
        case 3: 
            console.log("Assistir à aula!");
            break
        case 4: 
            console.log("Solicitações!");
            break
        case 0:
            console.log("Saiu");
            break
        default:
            console.log("Digite uma opção correta");
            break
    }
}while(op != 0);






//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

let peso = Number(prompt("Digite o seu peso:"))
let altura = Number(prompt("Digite a sua altura:"))
let imc = peso / (altura * altura)

if(imc<=18.5){
    console.log("Você está do peso")
}else if(imc>=18.5 && imc <=24.9){
    console.log("Seu peso está na medida correta")
}else if(imc>=25 && imc <=29.9){
    console.log("Você está um pouco sobrepeso")
}else{
    console.log("Você está em estado de obesidade")
}
console.log(imc)




//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let a = Number(prompt("Digite o lado A:")) 
let b = Number(prompt("Digite o lado B:"))
let c = Number(prompt("Digite o lado C:"))
if(a<b+c && b<a+c && c<a+b){
    console.log("É um triângulo")
    if(a==b && b==c){
        console.log("Triângulo equilátero")
    }else if(a==b || a==c || b==c){
        console.log("Triângulo isósceles")
    }else{
        console.log("Triângulo escaleno")
    }
}else{
    console.log("Não é um triângulo")
}





// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let valor1 = Number(prompt("Digite a quantidade de maças que comprou? "));
if(valor1<=12){
    valor1= valor1*0.30    
}else{
    valor1= valor1*0.25
}
console.log("valor comprado em maças foi", valor1)




// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

let n1 = Number(prompt("Digite um numero: "));
let n2 = Number(prompt("Digite outro numero: "));


if(n1>n2){
    console.log("numero 1:", n2, "numero 2:", n1);

}else{
    console.log("numero 1:", n1, "numero 2:", n2);
}





// // 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

for(let i = 10; i > 0; i--){
    console.log(i)
}





// // 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let num = parseFloat(prompt('Digite um numero'));
for (let i = 0; i < 10; i++) {
  console.log(num);
}






// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let soma = 0;
for (let i = 0; i < 5; i++) {
  soma += parseFloat(prompt('Digite um numero: '));
}
console.log(soma);





//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

let n2 = Number(prompt('Digite um número: '))
for ( let n1=1; n1<=10; n1++){
    console.log(`${n1} x ${n2} = ${n1*n2}`);
}





//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

let somaMedia = 0;
let contadorMedia = 0;
let numeroMedia;

console.log("Digite números decimais para calcular a média. Digite 0 para parar.");

while (true) {
  numeroMedia = Number(prompt("Digite um número:"));

  if (numeroMedia === 0) {
    break; // Sai do loop se o usuário digitar 0
  }

  somaMedia += numeroMedia;
  contadorMedia++;
}

if (contadorMedia > 0) {
  let media = somaMedia / contadorMedia;
  console.log(`A média aritmética dos números é: ${media.toFixed(2)}`);
} else {
  console.log("Nenhum número válido foi inserido para calcular a média.");
}





//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

let numeroFatorial = Number(prompt("Digite um número inteiro não negativo para calcular o fatorial:"));

if (numeroFatorial < 0) {
  console.log("Fatorial não definido para números negativos.");
} else if (numeroFatorial === 0) {
  console.log("O fatorial de 0 é 1.");
} else {
  let fatorial = 1;
  for (let i = 1; i <= numeroFatorial; i++) {
    fatorial *= i;
  }
  console.log(`O fatorial de ${numeroFatorial} é: ${fatorial}`);
}






//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

console.log("Os 10 primeiros números de Fibonacci são:");

let a = 0;
let b = 1;

console.log(a);
console.log(b);

for (let i = 3; i <= 10; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}