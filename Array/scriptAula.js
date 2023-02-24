//const instrumentos = ["Guitarra", "Baixo", "Violão"];
//const precos = [49, 99, 69, 89];

//const dados = [
// new String("Tipo 1"),
//["Carro", "Portas", { cor: "Azul", preco: 2000 }],
//function andar(nome) {
//  console.log(nome);
//},
//];

//const carros = new Array("ford", "Fiat", "Honda");

//carros[2] = "Ferrari";
//carros[3] = "Kia";
//carros[20] = "Volvo";

//console.log(carros.length);

//const li = document.querySelectorAll("li");

//const arrayLi = Array.from(li);

//const obj = {
//  0: "Andre",
//  1: "Rafael",
//  2: "Teste",
// length: 3,
//};

//const objArray = Array.from(obj);

//console.log(li);
//console.log(arrayLi);

//const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

//console.log(frutas.length);

const instrumentos = ["Guitarra", "Baixo", "Violão"];
instrumentos.sort(); //organizou por ordem alfabética

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort(); //numero a ordem vai de caractere em caractere, portanto ele alinha todos que iniciem em 1, depois que iniciem com 2 e assim sucessivamente.

console.log(instrumentos);
console.log(idades);

const carros = ["Ford", "Fiat", "VW"];
carros.unshift("Kia", "Ferrari");
const novaArray = carros.push("GM", "Toyota");

//console.log(novaArray);

//console.log(carros);

//console.log(carros.shift()); //retorna o primeiro item e remove o mesmo

//console.log(carros.pop() retorna e remove o último item)

console.log(carros);

//console.log(carros.reverse());

console.log(carros.splice(2, 0, "Fusca")); //primeiro parametro indica após qual posição o novo item vai ficar, o segundo indica quantos serão removidos

console.log(carros);

console.log(["item0", "item1", "item2", "item3", "item4"].copyWithin(2, 0, 2));
//primeiro parâmetro indica qual é o alvo, ou seja a partir do item2 será feita uma cópia e ela ficará nessa posição. o segundo parâmetro indica quais os items serão copiados

console.log(["item0", "item1", "item2", "item3"].fill("Banana", 0, 2));

const transporte1 = ["Barco", "Avião"];
const transporte2 = ["Carro", "Moto"];
const transportes = transporte1.concat(transporte2);

console.log(transportes);

const linguagens = ["html", "css", "js", "php", "python"];

linguagens.includes("css"); // verifica se tem ou não retorna boolean
linguagens.indexOf("python"); // verifica se tem o item na Array e retorna a sua posíção
linguagens.indexOf("js"); // caso tenhamos dois com o mesmo nome ele retorna o primeiro e ignora o segundo
linguagens.lastIndexOf("js"); // retorna o último ítem da Array com o nome colocado

console.log(linguagens.slice());

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
const novoHtml = htmlString.join("h1");

console.log(htmlString);
