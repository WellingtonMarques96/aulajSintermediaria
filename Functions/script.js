// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const p = document.querySelectorAll("p");
const totalCaracteres = Array.prototype.reduce.call(
  p,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function elementoHtml(tag, classe, conteudo) {
  const elementos = document.createElement(tag);
  classe ? elementos.classList.add(classe) : null;
  conteudo ? (elementos.innerHTML = conteudo) : null;
  return elementos;
}

console.log(elementoHtml("li", "azul", "Esse é o conteúdo"));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const h1Titulo = elementoHtml.bind(null, "h1", "titulo");

console.log(h1Titulo("Cursos de HTML"));
