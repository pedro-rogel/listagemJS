/* --A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado. -- */

const submit = document.querySelector("button");
submit.addEventListener("click", () => {
  let output = document.querySelector("#output");
  let valorCarro = 90;
  let km = 0.2;
  let kmPercorrido = parseFloat(document.querySelector("#km").value);
  let diasPercorridos = parseInt(document.querySelector("#dias").value);
  let total = kmPercorrido * km + valorCarro * diasPercorridos;
  output.innerHTML = `Você passou ${diasPercorridos} dias com o carro alugado, e ${kmPercorrido} km percorridos. <br>
    Com isso, o total que você irá pagar para a locadora será: ${total}`;
});
