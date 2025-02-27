window.onload = function () {
    carregarConsultas();
};

function carregarConsultas() {
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    let tabela = document.getElementById('tabelaConsultas');

    // Limpa a tabela antes de adicionar novas linhas
    tabela.innerHTML = "";

    consultas.forEach((consulta, index) => {
        let linha = document.createElement('tr');

        let colunaPaciente = criarColuna(consulta.patient);
        let colunaData = criarColuna(consulta.date);
        let colunaHora = criarColuna(consulta.time);
        let colunaAcoes = document.createElement('td');

        // Botão de excluir
        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.onclick = () => excluirConsulta(index);

        colunaAcoes.appendChild(botaoExcluir);

        linha.appendChild(colunaPaciente);
        linha.appendChild(colunaData);
        linha.appendChild(colunaHora);
        linha.appendChild(colunaAcoes);

        tabela.appendChild(linha);
    });
}

function criarColuna(texto) {
    let coluna = document.createElement('td');
    coluna.textContent = texto;
    return coluna;
}

function excluirConsulta(index) {
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    consultas.splice(index, 1);
    localStorage.setItem('consultas', JSON.stringify(consultas, null, 2)); // Formatação JSON legível
    carregarConsultas(); // Atualiza a tabela sem recarregar a página
}

function baixarJSON() {
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(consultas, null, 2));
    baixarArquivo(dataStr, "consultas.json");
}

function baixarXML() {
    let consultas = JSON.parse(localStorage.getItem('consultas')) || [];
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<consultas>\n';
    
    consultas.forEach(consulta => {
        xml += `  <consulta>\n`;
        xml += `    <patient>${consulta.patient}</patient>\n`;
        xml += `    <date>${consulta.date}</date>\n`;
        xml += `    <time>${consulta.time}</time>\n`;
        xml += `  </consulta>\n`;
    });

    xml += '</consultas>';
    let dataStr = "data:text/xml;charset=utf-8," + encodeURIComponent(xml);
    baixarArquivo(dataStr, "consultas.xml");
}

function baixarArquivo(dataStr, nomeArquivo) {
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", nomeArquivo);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
