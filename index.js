const fs = require('fs');

fs.writeFile('./texto.txt', 'Linea Uno', function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Archivo creado');
    }
});

console.log('Ultima linea de codigo');