const express = require('express');
const router = express.Router();


const userRouter = require('./user.router');
const productRouter = require('./product.router');
const supplierRouter = require('./supplier.router')
const customerRouter = require('./customer.router')
const sizeRouter = require('./size.router')
const categoryRouter = require('./category.router.js')
const rolRouter = require('./rol.router')
const orderRouter = require('./order.router')
const orderItemRouter = require('./orderItem.router')
const serviceRouter = require('./service.router')
const stateRouter = require('./state.router')
const tagRouter = require('./tag.router')

//rutas
router.use('/users', userRouter),
router.use('/products', productRouter),
router.use('/suppliers', supplierRouter),
router.use('/customers', customerRouter),
router.use('/size', sizeRouter),
router.use('/category', categoryRouter),
router.use('/rols', rolRouter),
router.use('/orders', orderRouter),
router.use('/orderItems', orderItemRouter),
router.use('./services', serviceRouter),
router.use('./status', stateRouter),
router.use('/tags', tagRouter),

module.exports = router;