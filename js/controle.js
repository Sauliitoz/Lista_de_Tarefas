let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");

function addTarefa() {
  let valorInput = input.value;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    ++contador;

    let novoItem = `<div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="iten-icon">
      <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
    </div>
    <div onclick="marcarTarefa(${contador})" class="iten-nome">${valorInput}</div>
    <div class="iten-botao">
      <button onclick="deletar(${contador})"class="delete">Deletar <i class="mdi mdi-delete"></i></button>
    </div>
  </div>
`;
    main.innerHTML += novoItem;

    input.value = "";
    input.focus();
  }
}
function marcarTarefa(id) {
  let item = document.getElementById(id);
  var classe = item.getAttribute("class");

  if (classe == "item") {
    item.classList.add("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-circle-outline");
    icone.classList.add("mdi-check-circle");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("clicado");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("mdi-check-circle");
    icone.classList.add("mdi-circle-outline");
  }
}
function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
}
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});
