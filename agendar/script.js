function agendar() {
    let patient = document.getElementById('namePatient').value;
    let date = document.getElementById('consultationDate').value;
    let time = document.getElementById('consultationTime').value;
    let status = document.getElementById('status');

    // Verifica se todos os campos foram preenchidos
    if (patient && date && time) {
        // Cria um objeto de consulta
        let consulta = { patient, date, time };

        // Obtém as consultas existentes no localStorage, ou cria um array vazio se não houver nenhuma
        let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

        // Adiciona a nova consulta ao array
        consultas.push(consulta);

        // Salva o array de consultas de volta no localStorage
        localStorage.setItem('consultas', JSON.stringify(consultas));

        // Atualiza a tabela
        let tabela = document.getElementById('tabelaConsultas');

        // Cria uma nova linha para a tabela
        let linha = document.createElement('tr');
        let colunaPaciente = document.createElement('td');
        let colunaData = document.createElement('td');
        let colunaHora = document.createElement('td');

        colunaPaciente.textContent = patient;
        colunaData.textContent = date;
        colunaHora.textContent = time;

        // Adiciona as células à linha
        linha.appendChild(colunaPaciente);
        linha.appendChild(colunaData);
        linha.appendChild(colunaHora);

        // Adiciona a linha à tabela
        tabela.appendChild(linha);

        // Limpa os campos de entrada
        document.getElementById('namePatient').value = "";
        document.getElementById('consultationDate').value = "";
        document.getElementById('consultationTime').value = "";

        status.textContent = "Consulta agendada com sucesso!";
        status.style.color = "green";
    } else {
        alert("Preencha todos os campos!");
    }
}
