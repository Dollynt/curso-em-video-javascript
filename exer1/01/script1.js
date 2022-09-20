function verificar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if (hora >= 0 && hora < 12 ) {
        msg.innerHTML += 'BOM DIA!!'
        foto.src = 'manha.png'
        document.body.style.background = '#d9b263'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += 'BOA TARDE!!'
        foto.src = 'tarde.png'
        document.body.style.background = '#e4914d'
    } else {
        msg.innerHTML += 'BOA NOITE!!'
        foto.src = 'noite.png'
        document.body.style.background = '#0e2931'
    }
}
    