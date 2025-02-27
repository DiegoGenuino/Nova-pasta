function agendar() {
    const patient = document.getElementById('namePatient').value.trim();
    const date = document.getElementById('consultationDate').value.trim();
    const time = document.getElementById('consultationTime').value.trim();

    // Verifica se todos os campos foram preenchidos
    if (patient && date && time) {
        // Cria um objeto de consulta
        const consulta = { patient, date, time };

        // Obtém as consultas existentes no localStorage
        let consultas = localStorage.getItem('consultas');
        consultas = consultas ? JSON.parse(consultas) : []; // Garante que seja sempre um array

        // Adiciona a nova consulta ao array
        consultas.push(consulta);

        // Salva o array de consultas de volta no localStorage com formatação legível
        localStorage.setItem('consultas', JSON.stringify(consultas, null, 2));

        console.log("Consultas salvas:", consultas); // Depuração

        // Atualiza a tabela
        adicionarConsultaNaTabela(consulta);

        // Limpa os campos de entrada
        limparCampos();
    } else {
        alert("Preencha todos os campos!");
    }
}

function adicionarConsultaNaTabela(consulta) {
    const tabela = document.getElementById('tabelaConsultas');
    const linha = document.createElement('tr');

    linha.appendChild(criarColuna(consulta.patient));
    linha.appendChild(criarColuna(consulta.date));
    linha.appendChild(criarColuna(consulta.time));

    tabela.appendChild(linha);
}

function criarColuna(texto) {
    const coluna = document.createElement('td');
    coluna.textContent = texto;
    return coluna;
}

function limparCampos() {
    document.getElementById('namePatient').value = "";
    document.getElementById('consultationDate').value = "";
    document.getElementById('consultationTime').value = "";
}
