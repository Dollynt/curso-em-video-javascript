function par_impar_verify(number) {
    if (number % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

function soma(number1, number2) {
    return number1 + number2
}
number = 6
//var verify = par_impar_verify(number)
console.log(`O número ${number} é ${par_impar_verify(number)}`)