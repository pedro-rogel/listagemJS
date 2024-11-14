//  13) Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
// seu novo salário, com 15% de aumento.

const submit = document.querySelector("button");
submit.addEventListener('click', () => {
    let salario = parseFloat(document.querySelector("#salario").value);
    let name = document.querySelector("#nome").value;
    let output = document.querySelector("#output");
    let aumento = (salario * 0.15) + salario;
    output.innerHTML = `O funcionario ${name} recebe um salario de ${salario} reais , com isso ele terá um aumento de 15%. <br> O salário ficará R$ ${aumento}`
});
