const { getAll, create, getOne, remove, update } = require('../controllers/size.controllers');
const express = require('express');

const sizeRouter = express.Router();

sizeRouter.route('/')
    .get(getAll)
    .post(create);

sizeRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = sizeRouter;