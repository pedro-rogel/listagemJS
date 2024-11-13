const submit = document.querySelector("button");
submit.addEventListener("click", ()=>{
    let numbe1 = parseFloat(document.querySelector("#number1").value);
    let number2 = parseFloat(document.querySelector("#number2").value);
    let media = ((numbe1 + number2) / 2);
    alert(media)
    return media;
});

