var agora = new Date();
var ano = agora.getFullYear();
var mes = agora.getMonth();
var dia = agora.getDay();
var hora = agora.getHours();
var minuto = agora.getMinutes();

var ano = window.document.querySelector('div#ano')
ano.innerHTML = `<p>O Ano atual é ${ano}</p>`;
