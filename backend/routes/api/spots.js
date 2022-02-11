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

router.put('/:id', asyncHandler(async (req, res) => {
    // console.log('this is req.params.id:', req.params.id)
    const { address, city, state, country, price, name, userId, id } = req.body;
    const activityId = parseInt(req.params.id, 10);
    // console.log('...........', activityId)
    // console.log('this is the id:', id)
    let editActivity = await Activity.update({
        address,
        city,
        state,
        country,
        price,
        name,
        // userId: activityId
    },
        { where: { id: activityId } }
    )
    editActivity = await Activity.findByPk(activityId);
    console.log('this is my editAct:', editActivity)
    return res.json(editActivity)
}))


router.delete('/:id', asyncHandler(async (req, res) => {
    const { id } = req.body;
    // console.log('............', id)
    const activityId = await Activity.findByPk(id);
    console.log(activityId)
    activityId.destroy();
    // return res.json({ message: `${activityId.name} removed!`})
    return res.json(activityId)
}))

module.exports = router
