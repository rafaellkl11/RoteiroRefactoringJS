const {readFileSync} = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js");
var {gerarFaturaStr, gerarFaturaHTML } = require("./apresentacao.js");

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());

console.log(gerarFaturaStr(faturas, calc));
console.log(gerarFaturaHTML(faturas, calc));