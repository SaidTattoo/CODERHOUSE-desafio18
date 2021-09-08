

const suma = (a, b) => {
 return validNumber(a) + validNumber(b)
}

const resta = (a, b) => {
 return a - b
}

const multiplicacion = (a, b) => {
 return a * b
}

const division = (a, b) => {
 return a  / b
}

const validNumber = (num)=>{
    if(isNaN(num)){
        return 0 
    }
    return parseInt(num)
 } 

module.exports = {
    suma,
    resta,
    multiplicacion,
    division,
    validNumber
}
