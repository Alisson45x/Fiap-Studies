console.log("Daniel")

// para informação
console.info("Informação")

// para avisos
console.warn("AVISO!")

// para erros
console.error("Erro!")


console.table([
    {
        id: 1,
        tarefa: "Study JS",
    },
    {
        id: 2,
        tarefa: "Practise Code",
    },
]);

console.group("Grupo de logs")
console.log('log 1')
console.log('log 2')
console.log('log 3')
console.groupEnd()

let casa = ""
console.time("timer")
if (casa = "casa") {
    console.log("casa")
}

console.timeEnd("timer")

var antigo = "Forma antiga de declarar variáveis"

let userName = "Danilo"

const API_URL = "URL"

// para texto
let texto = "Ola"
console.log("Nome = " + texto + " Tipo: " + typeof(texto))

// para numero
let numero = 45
console.log("Numero = " + numero + " Tipo: " + typeof(numero))

// para boolean
let itsCompleted = true
console.log("True/False = " + itsCompleted + " Tipo: " + typeof(itsCompleted))

// para sem valor
let semValor
console.log("Sem valor = " + semValor + " Tipo: " + typeof(semValor))

// para null
let nulo = null
console.log("Nulo = " + nulo + " Tipo: " + typeof(nulo))

// para simbolo
let uniqueId = Symbol("ID")
console.log(typeof(uniqueId))
console.log(uniqueId)

// para numero grande
let bigNumero = 45555555555555555n
console.log("bigNumero = " + bigNumero + " Tipo: " + typeof(bigNumero))

let tasks = [
  {
    id: 1,

    title: "Aprender JavaScript",

    completed: false,

    assignee: {
      name: "João",

      email: "joao@example.com",
    },
    toggleComplete() {
      this.completed = !this.completed;
    },
  },
];

console.table(tasks);

let hoje = new Date();
console.log(hoje);

let amanha = new Date("12-03-2008");
console.log(amanha);

let pattern = /^\+55\(\d{2}\)\d{4,5}\-\d{4}$/;
console.log(pattern.test("+55(11)92299-0899")); // true
console.log(pattern.test("+55(11)2299-0899")); // true

console.log(Number("45"))
console.log("45")

console.log(parseFloat("45.5"))
console.log("45.5")

console.log(Boolean("Texto"))
console.log(Boolean(""))

let a = 10
let b = 3

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

let contador1 = 0
let contador2 = 0
console.log(++contador1)
console.log(contador1++)

console.log(++contador2)
console.log(contador2++)

let x = 10;
x += 5; // x = 15
x -= 3; // x = 12
x *= 2; // x = 24
x /= 4; // x = 6
x %= 2; // x = 0
x **= 3; // x = 0 (0 elevado a 3)

console.log(10 == "10");   // true (compara valor somente)
console.log(10 === "10");  // false (compara valor e tipo)
console.log(5 != "5");     // false (valor é igual)
console.log(5 !== "5");    // true (valor igual, mas tipo diferente)

console.log(true && false);  // false (AND)
console.log(true || false);  // true  (OR)
console.log(!true);          // false (NOT)