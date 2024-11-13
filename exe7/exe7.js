const submit = document.querySelector("button");
submit.addEventListener("click", () => {
  let number = parseFloat(document.querySelector("#numeber").value);
  let dobro = number * 2;
  let terça = number / 3;
  alert(
    `O dobro de ${number} é ${dobro} e a terça parte de ${number} é ${terça}`
  );
});
