const { Cars } = require('./../models')
var express = require('express');

module.exports = class {
    static displayCreatePage(req, res, next) {
        res.render('createCar')
    }

    static displayEditPage(req, res, next) {
        const carId = req.params.id
        
        Cars.findAll({
            where: {id: carId}
        })

            .then((result) => {
                // const car = [result]
                // console.log(car)
                // res.render('editCar', {car, carId})
                res.render('editCar', {carId})
            })

            .catch((err) => {
                console.log(err)
            })
    }
    
    static getCars(req, res, next) {
        Cars.findAll()
            .then((result) => {
                const car = [...result]
                console.log(result)
                res.status(200)
                res.render('index', {car});
            })

            .catch((err) => {
                console.log(err)
            })
    }

    static createCar(req, res, next) {
        Cars.create({
            name: req.body.nama,
            price: req.body.harga,
            size: req.body.ukuran,
            image: req.body.foto
        })

            .then((result) => {
                console.log(req.body)
                res.status(201)
                res.redirect('/')
            })

            .catch((err) => {
                console.log(err)
            })
    }

    static editCar(req, res, next) {
        Cars.update({
            name: req.body.nama,
            price: req.body.harga,
            size: req.body.ukuran,
            image: req.body.foto
        }, {where: {id: req.body.carId}})

            .then(() => {
                // console.log(req.body)
                console.log('Data mobil telah diperbarui!')
                // res.status(200).send({
                //     status: 200,
                //     data: req.body
                // })
                res.redirect('/')
            })

            .catch((err) => {
                console.error('Data mobil tidak ditemukan!')
                res.status(404).status({
                    status: 404,
                    message: 'Data mobil tidak ditemukan!'
                })
            })
    }

    static deleteCar(req, res, next) {
        Cars.destroy({
            where: {id: req.params.id}
        })

            .then(() => {
                console.log('Data mobil telah dihapus!')
                res.status(200)
                res.redirect('/')
            })

            .catch((err) => {
                console.log(err)
            })
    }

    static smallFilter(req, res, next) {
        Cars.findAll({
            where: {size: "Small"}
        })

            .then((result) => {
                const car = [...result]
                console.log(result)
                res.status(200)
                res.render('index', {car});
            })

            .catch((err) => {
                console.log(err)
            })
    }

    static mediumFilter(req, res, next) {
        Cars.findAll({
            where: {size: "Medium"}
        })

            .then((result) => {
                const car = [...result]
                console.log(result)
                res.status(200)
                res.render('index', {car});
            })

            .catch((err) => {
                console.log(err)
            })
    }

    static largeFilter(req, res, next) {
        Cars.findAll({
            where: {size: "Large"}
        })

            .then((result) => {
                const car = [...result]
                console.log(result)
                res.status(200)
                res.render('index', {car});
            })

            .catch((err) => {
                console.log(err)
            })
    }


}