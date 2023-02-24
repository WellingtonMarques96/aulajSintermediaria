const carros = ["Ford", "Fiat", "Honda"];

carros.forEach((item, index, array) => {
  //array[index] = "teste";
  console.log(item, index, array);
});

const li = document.querySelectorAll("li");

const retornoForEach = li.forEach((i) => {
  i.classList.add("ativa");
});

const novaArray = carros.map((item, index, array) => {
  return item.toUpperCase();
});

const numeros = [2, 4, 5, 6, 78];
const numerosx2 = numeros.map((n) => n * 2); // sem chaves não precisa colocar o return, com a chaves precisa colocar o return

console.log(numerosx2);

console.log(novaArray);
console.log(carros); // novaArray não alterou a Array original carros.

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

const tempoAulas = aulas.map((aula) => aula.min);

const nomeAulas = (aula) => aula.nome;

const arrayNomeAulas = aulas.map(nomeAulas);

console.log(arrayNomeAulas);
console.log(tempoAulas);

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {});

const aulas1 = [10, 25, 30];

const reduceAulas1 = aulas1.reduce((acumulador, item) => {
  return acumulador + item;
}, 0); // ele retorna undefined na segunda itereração caso não tenha return na função. lembrando que o valor do acumulador é zero nesse exemplo
console.log(reduceAulas1);

const numerosAleatorios = [10, 25, 30, 3, 54, 33, 22];
const maiorNumero = numerosAleatorios.reduce(
  (anterior, atual) => (anterior > atual ? anterior : atual),
  0
);
//const numerosAleatorios = [10, 25, 30, 3, 54, 33, 22];
//const maiorNumero = numerosAleatorios.reduce((anterior, atual) => {
//  if (0 > 10) return anterior;
//  else return atual;
//}, 0); ESSE É O JEITO DETALHADO

console.log(maiorNumero);

const frutas = ["Banana", "Pera", "Uva"];
const temUva = frutas.some((item) => {
  return item === "Uva";
});

const every = frutas.every((item) => {
  return item;
});

const indexUva = frutas.findIndex((item) => {
  return item === "Uva";
});

console.log("index: ", indexUva);
console.log(temUva);
console.log(every);

const sequencia = [6, 43, 22, 88, 101, 29];

const maiorQue3 = sequencia.every((n) => n > 5);

console.log(maiorQue3);

const frutas1 = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];

const arrayFrutas = frutas1.filter((item) => {
  return item;
});

console.log(arrayFrutas);
