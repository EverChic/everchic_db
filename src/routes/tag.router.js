const { getAll, create, getOne, remove, update } = require('../controllers/tag.controllers');
const express = require('express');

const tagRouter = express.Router();

tagRouter.route('/')
    .get(getAll)
    .post(create);

tagRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = tagRouter;