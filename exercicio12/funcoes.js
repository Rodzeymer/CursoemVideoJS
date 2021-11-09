var agora = new Date();
var ano = agora.getFullYear();
var mes = agora.getUTCMonth();
var dia = agora.getUTCDay();
var hora = agora.getHours();
var minuto = agora.getMinutes();

var anoHTML = window.document.querySelector('div#ano');
anoHTML.innerHTML = `<p>O Ano atual é ${ano}</p>`;

var mesHTML = window.document.querySelector('div#mes');
mesHTML.innerHTML = `<p>O Mês atual é ${mes}</p>`;

var diaHTML = window.document.querySelector('div#dia');
diaHTML.innerHTML = `<p>O Dia atual é ${dia}</p>`;

var horaHTML = window.document.querySelector('div#hora')
horaHTML.innerHTML = `<p>O Ano atual é ${hora}</p>`;

var minutoHTML = window.document.querySelector('div#minuto')
minutoHTML.innerHTML = `<p>O Ano atual é ${minuto}</p>`;
