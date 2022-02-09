const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Image } = require('../../db/models')
const router = express.Router();

// const asyncHandler = (handler) => (req, res, next) => {
//     handler(req, res, next). catch(next);
// }

router.post('/', asyncHandler(async (req, res) => {
    const { address, city, state, country, price, name, userId } = req.body;
    const newActivity = await Activity.create({
        address,
        city,
        state,
        country,
        price,
        name,
        userId
    });
    return res.json(newActivity);
}))

router.get('/', asyncHandler(async (req, res) => {
    const spot = await Activity.findAll({
        include: { model: Image }
    });
    return res.json(spot)
}))

router.put('/:d', asyncHandler(async (req, res) => {
    const { address, city, state, country, price, name, userId } = req.body;
    const editActivity = await Activity.update({
        address,
        city,
        state,
        country,
        price,
        name,
        userId
    })
    return res.json(editActivity)
}))

module.exports = router
