"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldo = 0;
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    saldo += soma;
    campoSaldo.innerHTML = "".concat(saldo);
}
function limparSaldo() {
    saldo = 0;
    campoSaldo.innerHTML = "0";
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
