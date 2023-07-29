const { getAll, create, getOne, remove, update } = require('../controllers/state.controllers');
const express = require('express');

const stateRouter = express.Router();

stateRouter.route('/')
    .get(getAll)
    .post(create);

stateRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = stateRouter;