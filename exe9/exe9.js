const submit = document.querySelector("button");
const limpar = document.querySelector("#excluir");
submit.addEventListener("click", () => {
  let taxa = 3.45;
  let real = parseFloat(document.querySelector("#number").value);
  let dolar = real / taxa;
  let output = document.querySelector("#saida");
  output.innerHTML = `<p> O seu salario: R$${real}, pode comprar exatamente ${dolar} dolar(es) </p>`;
});
limpar.addEventListener("click", () => {
  let output = document.querySelector("#saida");
  output.innerHTML = ``;
});
