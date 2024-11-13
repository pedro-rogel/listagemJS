const submit = document.querySelector("button");
const sucessor = document.querySelector("#sucessor");
const antecessor = document.querySelector("#antecessor");

sucessor.addEventListener("click", () => {
  let number = parseFloat(document.querySelector("#number").value);
  let sucessor = number + 1;
  alert(sucessor);
  return sucessor;
});

antecessor.addEventListener("click", () => {
  let number = parseFloat(document.querySelector("#number").value);
  let antecessor = number - 1;
  alert(antecessor);
  return antecessor;
});
