const submit = document.querySelector("button");
submit.addEventListener("click", ()=>{
    let largura = parseFloat(document.querySelector("#largura").value);
    let altura = parseFloat(document.querySelector("#altura").value);
    let area = largura * altura;
    let litroTinta = area / 2;

    let output = document.querySelector("#saida");
    output.innerHTML = `<p>A área da parede é: ${area}</p><br>
    E a quantidade de tita necessária para o serviço é de exatamente: ${litroTinta} m²`

});