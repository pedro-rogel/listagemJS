const submit = document.querySelector("button");
submit.addEventListener("click", () => {
    let name = document.querySelector("#name").value;
    let salary = document.querySelector("#salary").value;
    alert(`O funcionario(a) ${name} tem um salário de R$ ${salary}`)
})