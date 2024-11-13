const submit = document.querySelector("button");
submit.addEventListener("click", () => {
  let metros = parseFloat(document.querySelector("#number").value);
  let km = metros / 1000;
  let hm = metros / 100;
  let dam = metros / 10;
  let dm = metros * 10;
  let cm = metros * 100;
  let mm = metros * 1000;
  
  let output = document.querySelector("#saida")
  output.innerHTML = `<p>${metros} metros na seguintes medidas: <br> ${km} km, ${hm} hm, ${dam} dam, ${dm} dm, ${cm} cm, ${mm} mm</p>`;
});
