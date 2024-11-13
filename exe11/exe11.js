const submit = document.querySelector("#bt");
submit.addEventListener("click" , () => {
    let a = parseFloat(document.querySelector("#a").value);
    let b = parseFloat(document.querySelector("#b").value);
    let c = parseFloat(document.querySelector("#c").value);


    let delta = b**2 - 4 * a * c;

    let output = document.querySelector("#saida");
    output.innerHTML = `<p> O valor de Delta é : ${delta}</p>` 
});