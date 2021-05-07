function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    if(num2 == 0){
        console.log('no se puede dividir por 0');
    } else {
        return num1 / num2;
    }
}

//exportamos .suma que contiene la funcion sumar

/* exports.suma = sumar;
exports.resta = restar; 
exports.mul = mult; 
exports.dv = div; */  

/* o */

const Math = {};

Math.suma = sumar;
Math.resta = restar;
Math.mul = mult;
Math.dv = div;

module.exports = Math;

