let idade = 18;

// tipo um if e else
let verificar = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(idade);
console.log(verificar);

let valor = null;
let resultado = valor ?? "valor padrão";

console.log(resultado);

let a = 5,
  b = 10;

console.log(a == b); // false (igualdade)
console.log(a === b); // false (igualdade estrita)
console.log(a != b); // true (diferente)
console.log(a !== b); // true (diferente estrito)
console.log(a < b); // true (menor que)
console.log(a > b); // false (maior que)
console.log(a <= b); // true (menor ou igual)
console.log(a >= b); // false (maior ou igual)

let age = 25;
let temCarteira = true;

if (age >= 18 && temCarteira) {
  console.log("pode dirigir.");
}

if (age < 18 || !temCarteira) {
  console.log("Não pode dirigir.");
}

let tarefaConcluida = true;
if (tarefaConcluida) {
  console.log("Tarefa concluida");
}

let prioridades = 2;
if (prioridades === 3) {
  console.log("Prioridade Alta");
} else {
  console.log("Prioridade não é alta");
}

let prioridade = 2;
console.log(prioridade === 3 ? "Prioridade alta" : "Prioridade não é alta");
let verificacao =
  prioridade === 3 ? "Prioridade alta" : "Prioridade não é alta";

// ruim
if (prioridade === 1) {
  console.log("Prioridade baixa");
} else if (prioridade === 2) {
  console.log("Prioridade média");
} else if (prioridade === 3) {
  console.log("Prioridade alta");
} else if (prioridade === 4) {
  console.log("Prioridade MUITO ALTA!");
} else {
  console.log("Prioridade desconhecida");
}

// ruim
let diaSemana = new Date().getDay();
console.log(diaSemana);
if (diaSemana === 0) {
  console.log("Domingo");
}
if (diaSemana === 1) {
  console.log("Segunda");
}
if (diaSemana === 2) {
  console.log("Terça");
}
if (diaSemana === 3) {
  console.log("Quarta");
}
if (diaSemana === 4) {
  console.log("Quinta");
}
if (diaSemana === 5) {
  console.log("sexta");
}
if (diaSemana === 6) {
  console.log("Sabado");
}

switch(diaSemana) {
    case 0:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sabado")
        break;

    default:
        console.log("Erro!!")
        break;
}

// loop for
for (let i = 0;i < 5; i++) {
    console.log(i)
}

// loop while
let contador = 0
while (contador < 5) {
  console.log(contador)
  contador++
}

let numero = 5

do {
  console.log(numero)
  numero --
} while (numero > 0)