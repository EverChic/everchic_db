const catchError = require('../utils/catchError');
const Order = require('../models/Order');

const getAll = catchError(async(req, res) => {
    const results = await Order.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Order.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Order.findByPk(id);
    if(!result) return res.sendStatus(400);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Order.destroy({ where: {id} });
    if(!result) return res.sendStatus(400);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Order.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(400);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}