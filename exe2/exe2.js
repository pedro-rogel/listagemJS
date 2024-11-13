const button = document.querySelector("button");
button.addEventListener("click", () => {
    const nome = document.querySelector("input").value;
    alert(`Bem vindo, ${nome}!`)
})
