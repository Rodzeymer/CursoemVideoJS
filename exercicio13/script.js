function carregar(){

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();

    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora <12){
        //BOM DIA
        img.src = 'img13/morning.jpg';
        document.body.style.background ="#e3cd9f";
        msg.innerHTML = `BOM DIA! Agora são ${hora} horas!`
    }else if (hora >=12 && hora <=18){
        //BOA TARDE
        img.src = 'img13/afternoon.jpg'
        document.body.style.background ="#f1da0a";
        msg.innerHTML = `BOA TARDE! Agora são ${hora} horas!`
    }else{
        //BOA NOITE
        img.src = 'img13/evening.jpg'
        document.body.style.background ="#4925ca";
        msg.innerHTML = `BOA NOITE! Agora são ${hora} horas!`
    }
}
