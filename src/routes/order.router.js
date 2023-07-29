const { getAll, create, getOne, remove, update } = require('../controllers/order.controllers');
const express = require('express');

const orderRouter = express.Router();

orderRouter.route('/')
    .get(getAll)
    .post(create);

orderRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = orderRouter;