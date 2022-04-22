var express = require('express');
var router = express.Router();
var controller = require('./../controller/cars')
// var middle = require('./../middleware/car')

/* DISPLAY PAGES */
router.get('/create', controller.displayCreatePage)
router.get('/edit/:id', controller.displayEditPage)

/* DISPLAY HOME & CRUD FUNCTION */
router.get('/', controller.getCars)
router.post('/car/create', controller.createCar)
router.post('/car/edit', controller.editCar)
router.get('/car/delete/:id', controller.deleteCar)

/* FILTERS */
router.get('/smallCar', controller.smallFilter)
router.get('/mediumCar', controller.mediumFilter)
router.get('/largeCar', controller.largeFilter)

router.post('/test', (req, res) => {
    res.send({
        id: req.params.id,
        data: req.body
    })
})

module.exports = router;