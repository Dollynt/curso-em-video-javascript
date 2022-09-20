function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nascimento = document.getElementById('txtano')
    var res = document.getElementById('resultado')

    if (ano_nascimento.value.length == 0) {
        window.alert('ERRO. Preencha os campos vazios e tente novamente.')
    } else if(ano_nascimento.value > ano_atual) {
        window.alert('ERRO. Ano inválido, digite um ano válido e tente novamente.')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano_atual - ano_nascimento.value
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            document.body.style.background = '#32A0FA'
            res.innerHTML = `Detectamos um homem com ${idade} anos.`
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'baby_m.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'teen_m.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'adult_m.png')
            } else {
                img.setAttribute('src', 'old_m.png')
            }
        } else if (sex[1].checked) {
            res.innerHTML = `Detectamos uma mulher com ${idade} anos.`
            document.body.style.background = 'rgb(221, 154, 221)'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'baby_f.png')
            } else if(idade < 21) {
                img.setAttribute('src', 'teen_f.png')
            } else if(idade < 50) {
                img.setAttribute('src', 'adult_f.png')
            } else {
                img.setAttribute('src', 'old_f.png')
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
    
}