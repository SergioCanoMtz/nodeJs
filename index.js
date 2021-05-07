const os = require('os');
const math = require('./math.js'); //En una varible const vamos a alamacenar lo que vamos a requerir y eso lo hacemos con require()
let num1 = 4, num2 = 5;

console.log(math);
console.log(os.platform());
console.log(os.release());
console.log("Free mem: "+ os.freemem());
console.log("Total Memory: "+ os.totalmem());

const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if(err){
        console.log(err);
    }
    console.log('Archivo Creado');
});

console.log('Ultima linea de codigo');

fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});

/* const http = require('http');

const handleServer = function (req, res) {
    res.writeHead(200, {'Content-type':'text/html'});
    res.write('<h1>Hola mundo desde NodeJS</h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000');
}) */

/* o  con Express JS*/

const express = require('express');
const colors = require('color');
const server = express();

server.get('/', (req, res) =>{
    res.send('<h1>Hola mundo desde Node JS y Express JS</h1>');
    res.end();
})

server.listen(3000, ()=>{
    console.log('Server on port 3000'.red);
})


/* console.log("El resultado de la suma entre "+num1+" y "+num2+" es: "+math.suma(num1,num2));
console.log("El resultado de la resta entre "+num1+" y "+num2+" es: "+math.resta(num1,num2));
console.log("El resultado de la mult entre "+num1+" y "+num2+" es: "+math.mul(num1,num2));
console.log("El resultado de division entre "+num1+" y "+num2+" es: "+math.dv(num1,num2)); */