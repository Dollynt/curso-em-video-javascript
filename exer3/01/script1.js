array = []
contador = 0
result = document.getElementById('result')
function add() {
    numero = document.getElementById('number')
    table = document.getElementById('table')
    if (contador == 1) {
       contador = 0
       result.innerHTML = ''
    }
    if (numero.value.length == 0) {
        window.alert('Digite algum número para adicionar.')
    } else {
        if (numero.value < 1 || numero.value > 100) {
            window.alert('Digite um número entre 1 e 100')
        } else {
            if (array.includes(numero.value) == true) {
                window.alert('Número já inserido. Insira outro.')
            } else {
                var option = document.createElement('option')
                array.push(numero.value)
                table.size = array.length
                option.text = `${numero.value} foi adicionado com sucesso.`
                table.appendChild(option)
            }
        }  
    }
    
}

function finish() {
    if (array.length == 0) {
        window.alert('Digite um número antes de finalizar.')
    } else {
    array.sort()
    biggest = array[array.length - 1]
    smallest = array[0]
    soma = sum(array)
    
    media = soma / array.length
    result.innerHTML = `O maior valor adicionado foi ${biggest}<br>`
    result.innerHTML += `O menor valor adicionado foi ${smallest}<br>`
    result.innerHTML += `A soma de todos os elementos é ${soma}<br>`
    result.innerHTML += `A média de todos os elementos é ${media}<br>`
    contador = 1
    }
}
    

function sum (array) {
    soma = 0
    for(pos in array) {
        soma += Number(array[pos])
    }
    return soma
}   