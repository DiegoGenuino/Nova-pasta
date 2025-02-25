
    window.onload = function() {
        // Obtém as consultas armazenadas no localStorage
        let consultas = JSON.parse(localStorage.getItem('consultas')) || [];

        // Obtém a tabela onde as consultas serão exibidas
        let tabela = document.getElementById('tabelaConsultas');

        // Limpa a tabela para garantir que não existam dados antigos
        tabela.innerHTML = "";

        // Adiciona as consultas à tabela
        consultas.forEach(function(consulta) {
            let linha = document.createElement('tr');

            let colunaPaciente = document.createElement('td');
            let colunaData = document.createElement('td');
            let colunaHora = document.createElement('td');

            colunaPaciente.textContent = consulta.patient;
            colunaData.textContent = consulta.date;
            colunaHora.textContent = consulta.time;

            linha.appendChild(colunaPaciente);
            linha.appendChild(colunaData);
            linha.appendChild(colunaHora);

            tabela.appendChild(linha);
        });
    };

