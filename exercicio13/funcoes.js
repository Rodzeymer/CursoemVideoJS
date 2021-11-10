var agora = new Date();
var ano = agora.getFullYear();
var mes = agora.getUTCMonth()+1;
var dia = ("0" + agora.getDate()).slice(-2);
var hora = agora.getHours();
var minuto = ("0" + agora.getMinutes()).slice(-2);