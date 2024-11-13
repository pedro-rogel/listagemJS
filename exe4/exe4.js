const submit = document.querySelector("#bt");
submit.addEventListener("click", function soma(){
    let number1 = parseFloat(document.querySelector("#number1").value);
    let number2 = parseFloat(document.querySelector("#number2").value);
    let soma = number1 + number2;
    alert(soma);
    return soma;

});


  