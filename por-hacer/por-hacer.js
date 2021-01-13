const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFileSync('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err)
    })
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}


const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => { return tarea.descripcion === descripcion })
    if (index >= 0) {
        listadoPorHacer[index] = { descripcion, completado };
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion, ) => {
    cargarDB();

    let i1 = listadoPorHacer.length;
    listadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion)
    let i2 = listadoPorHacer.length;

    guardarDB();

    if (i1 === i2) return false;
    else return true;

}

module.exports = {
    crear,
    cargarDB,
    getListado,
    actualizar,
    borrar
}