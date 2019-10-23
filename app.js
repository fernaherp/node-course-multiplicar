//requireds
//const fs = require('fs');
// const fs = require('express');
// const fs = require('../fs');

// let base = 3;

// for( let i = 1; i <= 10; i++ ) {
//     console.log(`${base} * ${i} = ${base * i}`);
// }

const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
    case 'listar':
        listarTabla( argv.base, argv.limite );
        break;
    case 'crear':
        crearArchivo( argv.base, argv.limite )
            .then(archivo => console.log('Archivo creado: ' + colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}
