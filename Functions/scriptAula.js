function somar(n1, n2) {
  return n1 + n2 + "";
}

console.log(somar.length);
console.log(somar.name);

function darOi(nome, idade) {
  console.log("oi para você" + nome + idade);
}

darOi.call(null, "Andre", 28);

function descricaoCarro(velocidade) {
  console.log(this.marca + " " + this.ano + velocidade);
}

descricaoCarro.call({ marca: "Honda", ano: 2015 }, 100);

const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Uva", "Pêra"];

carros.forEach.call(carros, (item) => {
  console.log(item);
});

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};

const ul = new Dom("ul");

const l = {
  element: document.querySelector("li"),
};

//ul.ativo.call(l, "ativo");

const hortifrutas = ["Uva", "Maçã", "Banana"];

Array.prototype.pop.call(hortifrutas);
hortifrutas.pop(); //faz a mesma coisa que o codigo acima. Portanto o call não é muito usado no contrutor da Array, somente em ArrayLike

const li = document.querySelectorAll("li");
// uma alternativa, caso precisasse transformar a nodeList em uma Array seria: const arrayLi = Array.from(li);
//Nessa situação acima o código não precisaria do prototype, call e o li na função

const filtro = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});
console.log(filtro);
console.log(li);

const numeros = [33, 22, 358, 434, 54, 5432, 5];
const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};

const honda = {
  marca: "Honda",
};
const acelerarHonda = carro.acelerar.bind(honda, "200 km"); // o 200 vira um argumento fixo junto com o honda

console.log(carro.acelerar("100 km", "10 segundos"));
console.log(acelerarHonda("10 segundos"));
