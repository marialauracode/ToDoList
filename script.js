function adicionarTarefa() {
    var msgSucesso = 'Tarefa adicionada com sucesso!'
    var msgErro = 'Escreva uma tarefa válida!'

    var inputTarefa = document.getElementById('inputTarefa')
    var tarefa = inputTarefa.value

    if (tarefa == "") {
        document.getElementById('mensagemErro').textContent = msgErro
        document.getElementById('mensagemSucesso').textContent = ""
    } else {
        document.getElementById('mensagemSucesso').textContent = msgSucesso
        document.getElementById('mensagemErro').textContent = ""

        var lista = document.getElementById('listaTarefas')
        var novaTarefa = document.createElement('li')

        novaTarefa.textContent = tarefa
        lista.appendChild(novaTarefa)

        inputTarefa.value = ""
    }

}