const comida = "Pizza";
const agua = new String("agua");

console.log(comida.length);

//const frase = "A melhor comida";
//console.log(frase[frase.length - 1]);
//console.log(frase.charAt(frase.length));

//const frase = "A melhor linguagem é";
//const linguagem = " JavaScript";

//const fraseFinal = frase.concat(linguagem, "!!");

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";

console.log(listaFrutas.includes(fruta, 4));

console.log(fruta.startsWith("ba"));
console.log(fruta.endsWith("na"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(12)); // ele vai mostrar os caracteres de acordo com o que foi colocado no intervalo; se colocar apenas um número ele mostra toda a frase sem o caractere daquele numero. Se colocar negativo ele corta o final da frase.
console.log(transacao1.slice(-4));
console.log(transacao1.slice(3, 6));

console.log(linguagem.substring(0, 4)); // mesma funcionalidade do slice, mas não utiliza os valores negativos.

console.log(fruta.indexOf("n")); // vai sempre retornar o primeiro item com a letra indicada
console.log(fruta.lastIndexOf("na")); // retorna o último ítem com a letra indicada ou onde inicia a sílaba

const preco = "R$ 99,00";

const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((item) => {
  console.log(item.padStart(10));
});

const frase2 = "Ta";
frase2.repeat(5);

let listaItens = "camisas bonés calças bermudas vestidos saias";
listaItens = listaItens.replace(/[ ]+/g, ", "); // utilizando regular expression ele pega em todos os ítens, sem ela iria substituir somente o primeiro
listaItens = listaItens.replace("camisas", "shirts"); // coloca primeiro o que vai modifica e depois a modificação

const arrayLista = listaItens.split("s, "); //removeu s, e espaço e quebrou a linha para ser cada ítem da Array.

console.log(arrayLista);

const htmlText = "<div>O melhor item</div><div> A melhor lista</div>";
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section");

console.log(htmlText);
console.log(htmlArray);
console.log(novoHtml);

const sexo1 = "Feminino";
const sexo2 = "feminino";
const sexo3 = "FEMININO";

console.log(sexo1.toUpperCase() === "FEMININO");

const valor = "  R$ 23,00";
valor.trim();
valor.trimStart();
valor.trimEnd();
