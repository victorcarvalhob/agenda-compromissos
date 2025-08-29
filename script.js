const form = document.getElementById("form-compromisso");
const lista = document.getElementById("lista-compromissos");

let compromissos = [];
let editandoId = null; 

form.addEventListener("submit", function(e) {
    e.preventDefault();

const titulo = document.getElementById("titulo").value;
const descricao = document.getElementById("descricao").value;
const data = document.getElementById("data").value;
const hora = document.getElementById("hora").value;

if (editandoId) {
    compromissos = compromissos.map(c =>
        c.id === editandoId ? { id: c.id, titulo, descricao, data, hora } : c
    );
    editandoId = null;
} else {
    const novo = {
        id: Date.now(),
        titulo,
        descricao,
        data,
        hora
    };
    compromissos.push(novo);
}

renderizarCompromissos();
form.reset();
});

function renderizarCompromissos() {
    lista.innerHTML = "";

    compromissos.forEach(c => {
        const item = document.createElement("li");
        item.innerHTML = `
        <div>
        <strong> ${c.titulo}</strong><br>
        ${c.descricao ? c.descricao + "<br>" : ""}
        📅 ${c.data} ⏰ ${c.hora}
        </div>
        <div class="botoes">
        <button class="btn-editar" onclick="editarCompromisso(${c.id})">Editar</button>
        <button class="btn-excluir" onclick="excluirCompromisso(${c.id})">Excluir</button>
        </div>`;
        lista.appendChild(item);
    })
}

function excluirCompromisso(id) {
    compromissos = compromissos.filter(c => c.id !== id);
    renderizarCompromissos();
}

function editarCompromisso(id) {
    const comp = compromissos.find(c => c.id === id);
    if (comp) {
        document.getElementById("titulo").value = comp.titulo;
        document.getElementById("descricao").value = comp.descricao;
        document.getElementById("data").value = comp.data;
        document.getElementById("hora").value = comp.hora;

        editandoId = id;
    }
}

