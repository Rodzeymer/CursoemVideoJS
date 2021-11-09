var agora = new Date();
var ano = agora.getFullYear();
var mes = agora.getMonth();
var dia = agora.getDay();
var hora = agora.getHours();
var minuto = agora.getMinutes();

var res = window.document.querySelector('div#res')
res.innerHTML = `<p>Sua velocidade atual é de <strong> ${vel}</strong> Km/h!!</p>`
