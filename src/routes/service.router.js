const { getAll, create, getOne, remove, update } = require('../controllers/service.controllers');
const express = require('express');

const sreviceRouter = express.Router();

sreviceRouter.route('/')
    .get(getAll)
    .post(create);

sreviceRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = sreviceRouter;