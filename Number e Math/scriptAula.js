console.log(Number.isNaN(NaN));
console.log(Number.isNaN("gfs"));
console.log(Number.isNaN(5));

console.log(Number.isInteger(10.5456));
console.log(Number.parseFloat("3255.44")); // transforma tudo em numero, se tiver qualquer outro caractere no início ele retorna NaN; exceto espaço.
console.log(Number.parseFloat("35.99 reais"));

console.log(Number.parseInt("3255.44")); // tira os decimais e deixa somente integral

const preco = 2.99;
preco.toFixed(); // 3 em formato string que é o padrão de retorno
const carro = 1000.45587;
console.log(carro.toFixed(2));

let valor = 10.32323;
valor = valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

console.log(valor);

console.log(Math.PI);

console.log(Math.abs(3 - 7)); // transforma negativo em positivo
console.log(Math.ceil(1.585)); // arredonda sempre pra cima
console.log(Math.floor(1.585)); // arredonda sempre pra baixo
console.log(Math.round(1.585)); // arredonda o normal do padrão matemático;

console.log(Math.max(5, 2, 1, 80)); // retorna o maior número dentro da lista
console.log(Math.min(5, 2, 1, 80)); // retorna o menor número dentro da lista
console.log(Math.random()); // retorna um número aleatório.
console.log(Math.random() * 10); // retorna um número aleatório dentro do período colocado nesse caso 0 a 10.

const aleatorio = Math.floor(Math.random() * 10);

console.log(aleatorio);

// Número random entre 72 e 32
const exemplo = Math.floor(Math.random() * (72 - 32 + 1)) + 32;
// formula - Math.floor(Math.random() * (max - min + 1)) + min; ou
//Math.ceil(Math.random() * (max - min + 1)) + min;

console.log(exemplo);
