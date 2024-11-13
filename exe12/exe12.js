
const submit = document.querySelector("button");
submit.addEventListener('click', () => {
    let preco = parseFloat(document.querySelector("#preco").value);
    let output = document.querySelector(".output");
    if (!preco) {
        output.innerHTML = `Insira um valor no espaço em Branco`
        return;
    }
    let desconto = 0.05;
    let novoPrecoProduto = preco * desconto;
    
    output.innerHTML = `O Produto com o preço de R$ ${preco} receberá um desconto de 5% e ficará com o novo preço de: ${novoPrecoProduto.toFixed(2)}`;
});