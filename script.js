const form = document.getElementById("form-compromisso");
const lista = document.getElementById("lista-compromissos");

form.addEventListener("submit", function(e) {
    e.preventDefault();

const titulo = document.getElementById("titulo").value;
const descricao = document.getElementById("descricao").value;
const data = document.getElementById("data").value;
const hora = document.getElementById("hora").value;

const item = document.createElement("li");
item.innerHTML = `<strong> ${titulo} <br> ${descricao ? descricao + "<br>" : ""} 📅 ${data} ⏰ ${hora}`;

lista.appendChild(item);

form.reset();
});

