const { argv } = require('./config/yargs');
var colors = require('colors');

//const multiplicar = require('./multiplicar/multiplicar');
/*usando destructuracion */
const { crearArchivo: crearArchivoTablas, listarTabla } = require('./multiplicar/multiplicar');

//console.log('sin paquete ', process.argv);
//console.log('con paquete ', argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':

        console.log('======================='.green);
        console.log(` Tabla de ${argv.base}`.green);
        console.log('======================='.green);

        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivoTablas(argv.base, argv.limite)
            .then(nombre => console.log(nombre))
            .catch(e => console.log(e));
        break;
    default:
        console.log(`Comando \'${comando} no es válido, consultar --help para información`);
        break;
}