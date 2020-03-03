'use strict'
/**
 * Date: 02/05/2020
 * Author: Edwin Anaya H.
 * Url: https://documentation.com/
 */

function registraduria (req, res) {

    const data={
        status: '200',
        msg: 'Verificacion correcta!',
        data: {
            varification: Math.floor(Math.random() * 2) + 0
        }
    }
    
    res.status(200).send(data)
}

function policia (req, res) {
    
    const data={
        status: '200',
        msg: 'Verificacion correcta!',
        data: {
            varification: Math.floor(Math.random() * 2) + 0
        }
    }
    
    res.status(200).send(data)
}

function addi (req, res) {

    const data={
        status: '200',
        msg: 'Evaluación correcta!',
        data: {
            varification: Math.floor(Math.random() * 101) + 0
        }
    }
    
    res.status(200).send(data)
}

module.exports = { registraduria, policia, addi }