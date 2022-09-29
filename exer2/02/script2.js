function tabuada() {
    numero = document.getElementById('number')
    tabela = document.getElementById('tabuada')
    number = Number(numero.value)
    tabela.innerHTML = ''
    tabela.size = '11'
    
    if(numero.value.length == 0) {
        window.alert('ERRO. Preencha o campo "Número".')
        tabela.size = '0'
    } else {
        for (var counter = 0; counter <= 10 ; counter++) {
            var option = document.createElement('option')
            option.text = `${number} * ${counter} = ${number * counter}`
            tabela.appendChild(option)
            }
    }
      
    
}
    