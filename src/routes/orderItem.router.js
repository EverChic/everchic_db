const { getAll, create, getOne, remove, update } = require('../controllers/orderItem.controllers');
const express = require('express');

const orderItem = express.Router();

orderItem.route('/')
    .get(getAll)
    .post(create);

orderItem.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = orderItem;