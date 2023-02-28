const pessoa = new Object({
  nome: "André",
});
console.log(pessoa);

const carro = {
  rodas: 4,
  init(valor) {
    this.marca = valor;
    return this;
  },
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const honda = Object.create(carro).init("honda");

console.log(honda.acelerar());

const ferrari = Object.create(carro).init("Ferrari");

console.log(ferrari.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};

const moto = {
  rodas: 2,
  capacete: true,
};

Object.assign(moto, funcaoAutomovel, carro);

console.log(moto);

const motocicleta = {};

Object.defineProperties(motocicleta, {
  rodas: {
    //  value: 2,
    // configurable: false, // significa que não é possível alterar o valor ou deletar a propriedade. normalmente já fica falso por padrão sem precisar colocar
    get() {
      // get pega o valor e o set reseta o valor de acordo com o que é colocado
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

console.log(motocicleta);
