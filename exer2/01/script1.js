function contar() {
    var inicio = document.getElementById('beginning')
    var fim = document.getElementById('end')
    var passo = document.getElementById('step')
    var msg = document.getElementById('msg')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERRO. Preencha todos o campos.')
    } else {
        if (passo.value < 1) {
            window.alert('Valor de passo inválido. Valor substituído por 1')
            passo.value = 1
        }
        var beginning = Number(inicio.value)
        var end = Number(fim.value)
        var step =  Number(passo.value)
        msg.innerHTML = 'Contagem:<br>'

        if (beginning < end) {
            //Contagem positiva
            for (var counter = beginning; counter <= end; counter += step) {
                if (counter == end || (counter + step) > end ){ 
                    //condicional para não terminar com '==>'
                    msg.innerHTML += ` ${counter}`
                } else {
                    msg.innerHTML += ` ${counter} ==>`
                }
            }
        } else {
            //Contagem negativa
            for (var counter = beginning; counter >= end; counter -= step) {
                if (counter == end || (counter - step) < end) {
                    //condicional para não terminar com '==>'
                    msg.innerHTML += ` ${counter}`
                } else {
                    msg.innerHTML += ` ${counter} ==>`
                }
            }
        }
        
    }

    
    
}