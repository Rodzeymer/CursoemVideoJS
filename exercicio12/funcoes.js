var agora = new Date();
var ano = agora.getFullYear();
var mes = agora.getMonth();
var dia = agora.getDay();
var hora = agora.getHours();
var minuto = agora.getMinutes();

var anoHTML = window.document.querySelector('div#ano');
anoHTML.innerHTML = `<p>O Ano atual é ${ano}</p>`;

var mesHTML = window.document.querySelector('div#mes');
mesHTML.innerHTML = `<p>O Mês atual é ${mes}</p>`;

var diaHTML = window.document.querySelector('div#dia');
diaHTML.innerHTML = `<p>O Ano atual é ${dia}</p>`;
