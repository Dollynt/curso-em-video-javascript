let amigo = {nome:'José',
            sexo:'M', 
            peso:70, 
            engordar(p=0){
           console.log('engordou')
           this.peso += p     
           console.log(`peso atual = ${amigo.peso}`)
}}

console.log(amigo.engordar(2))