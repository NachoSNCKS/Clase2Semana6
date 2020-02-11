function factorial(num:number) : number{
    let res = 1
    for(let i=1; i<= num; i++){
        res *= i
    }
    return res
}
function longitud(num : number) : number{
    let numRestante = num
    let cont = 0
    while (true){
        numRestante = Math.floor(numRestante / 10)
        cont++
        if(numRestante == 0){
            break;
        } 
    }
    return cont
}

//ESTA ES LA CLASE CON LA FUNCION QUE DESEAMOS PROBAR
export class LNC{
    lnctoDecimal(num : number) : number{
        // 123 / 10 = 12
        // 123 % 10 = 3
        let numRestante = num
        let tam = longitud(num)
        let suma = 0
        for (let i=0; i<tam ; i++){
            let dig = numRestante % 10
            suma += dig * factorial(i+1)
            numRestante = Math.floor(numRestante / 10)
            console.log(numRestante)
        }
        return suma;
    }
}