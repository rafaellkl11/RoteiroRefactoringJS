const formatarMoeda = require("./util")

function gerarFaturaStr (fatura, calc) {
    let faturaStr = `Fatura ${fatura.cliente}\n`

    for (let apre of fatura.apresentacoes) {
        const peca = calc.repo.getPeca(apre);
        const valor = calc.calcularTotalApresentacao(apre);
        faturaStr += `  ${peca.nome}: ${formatarMoeda(valor)} (${apre.audiencia} assentos)\n`;

    }

    faturaStr += `Valor total: ${formatarMoeda(calc.calcularTotalFatura(fatura.apresentacoes))}\n`;
    faturaStr += `Créditos acumulados: ${calc.calcularTotalCreditos(fatura.apresentacoes)} \n`;
    return faturaStr;
}

function gerarFaturaHTML(fatura, calc){
    let html = `<html>\n`;
    html += `<p>Fatura ${fatura.cliente}</p>\n`;
    html += `<ul>\n`;

    for (let apre of fatura.apresentacoes) {
        const peca = calc.repo.getPeca(apre);
        const valor = calc.calcularTotalApresentacao(apre);

        html += `  <li>${peca.nome}: ${formatarMoeda(valor)} (${apre.audiencia} assentos)</li>\n`;
    }

    html += `</ul>\n`;

    html += `<p>Valor total: ${formatarMoeda(
        calc.calcularTotalFatura(fatura.apresentacoes)
    )}</p>\n`;

    html += `<p>Créditos acumulados: ${calc.calcularTotalCreditos(
        fatura.apresentacoes
    )}</p>\n`;

    html += `</html>`;

    return html;
}

module.exports = {
    gerarFaturaStr,
    gerarFaturaHTML
}