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

console.log(sumar(4,2));