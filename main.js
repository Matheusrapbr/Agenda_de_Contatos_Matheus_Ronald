Form.addEventListener('submit', function(e) {
    e.preventDefault();

    cadastrar();
})

    function cadastrar() {

    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    var tabela = document.getElementById("tabela");
    var linha = tabela.insertRow(-1);

    var celulaNome = linha.insertCell(0);
    var celulaTelefone = linha.insertCell(1);

    celulaNome.innerHTML = nome;
    celulaTelefone.innerHTML = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
} 