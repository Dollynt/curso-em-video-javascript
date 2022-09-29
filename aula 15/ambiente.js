let num = [1,2,3]
num[0] = 5
num.push(6)
//num.length
num.sort()
console.log(num.indexOf(6))
//console.log(num.sort())

/*for (var pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
    
}*/

for (let pos  in num) {
    console.log(num[pos])
        
    }
