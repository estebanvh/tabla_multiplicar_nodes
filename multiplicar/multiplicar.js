const fs = require('fs');
var colors = require('colors');


let datos = '';

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} debe ser un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            datos += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}`, datos, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo se llama ${colors.green("tabla-" + base)}`);
        })

    })
}


let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        datos += `${base} * ${i} = ${base * i}\n`;
    }
    console.log(datos);
}

module.exports = {
    crearArchivo,
    listarTabla
}