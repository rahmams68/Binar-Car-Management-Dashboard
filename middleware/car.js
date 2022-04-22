const { Cars } = require('./../models')
var express = require('express');

module.exports = function(req, res, next) {
    const carId = req.params.id
    const car = Cars.findAll({
        where: {id: carId}
    })

    if (!car) {
        return res.status(404).json({
            error: 'Mobil tidak ditemukan!'
            // Buat halaman 404, nanti render
        })
    }
    
    req.car = car
    next()
}