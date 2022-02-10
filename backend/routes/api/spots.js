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
    // console.log('..........', req.params.id)
    // const { address, city, state, country, price, name, userId, id } = req.body;
    // const editActivity = await Activity.update( {where: id}, {
    //     address,
    //     city,
    //     state,
    //     country,
    //     price,
    //     name,
    //     userId
    // })
    // res.status(201)
    // return res.json(editActivity)
    console.log(router.put())
    const activityId = parseInt(req.params.id, 10);
    const activityName = await Activity.findByPk(activityId);

    const updateActivity = await activityName.update(activityId)

    return res.json(updateActivity)
}))


router.delete('/:id', asyncHandler(async(req, res) => {
    const { id } = req.body;
    console.log('............', id)
    const activityId = await Activity.findByPk(id);
    console.log(activityId)
    activityId.destroy();
    // return res.json({ message: `${activityId.name} removed!`})
    return res.json(activityId)
}))

module.exports = router
