const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'c',
    default: true,
    desc: 'Completado true o false'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Crear un elemento por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento de la lista', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}