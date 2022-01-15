function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Hora atual: ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12){
        //BOM DIA
        img.src = '../imagens/manha-p.jpg'
        document.body.style.background = '#F2CCB6'
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = '../imagens/tarde-p.jpg'
        document.body.style.background = '#D9731A'
    } else{
        //BOA NOITE
        img.src = 'imagens/noite-p.jpg'
        document.body.style.background = '#152840'
    }
}