const input = document.querySelector('.input-tarefa');
const btn = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');



function criaLi() {
   const li = document.createElement('li');
   return li;
}

input.addEventListener('keypress', (event) => {
   if(event.key === 'Enter') {
      if(!input.value) return;
      criaTarefa(input.value);
      limpaInput()
   }
})

function criaBotaoApagar(li) {
   li.innerText += ' '
   const botaoApagar = document.createElement('button');
   botaoApagar.innerText = 'Apagar';
   li.appendChild(botaoApagar);
   botaoApagar.setAttribute('class', 'apagar');
   botaoApagar.setAttribute('title', 'Apagar esta tarefa');
}

function limpaInput() {
   input.value = '';
   input.focus();
}

function salvarTarefas() {
   const liTarefas = tarefas.querySelectorAll('li');
   const listaDeTarefas = [];

   for (let tarefa of liTarefas) {
      let tarefaTexto = tarefa.innerText;
      tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
      listaDeTarefas.push(tarefaTexto);
   }

   const tarefasJSON = JSON.stringify(listaDeTarefas);
   localStorage.setItem('tarefas', tarefasJSON)
}

function adicionarTarefasSalvas() {
   const tarefas = localStorage.getItem('tarefas');
   const listaDeTarefas = JSON.parse(tarefas);
   
   for (let tarefa of listaDeTarefas) {
      criaTarefa(tarefa);
   }
}

adicionarTarefasSalvas();

function criaTarefa(inputTxt) {
   const li = criaLi();
   tarefas.appendChild(li);
   li.innerText = inputTxt;
   criaBotaoApagar(li);
   salvarTarefas();
}

btn.addEventListener('click', function () {
   if(!input.value) return;
   criaTarefa(input.value);
   limpaInput();
});

document.addEventListener('click', (e) => {
   const element = e.target;
   if (element.classList.contains('apagar')) {
      element.parentElement.remove();
      salvarTarefas();
   }
});