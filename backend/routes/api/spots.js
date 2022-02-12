const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Image } = require('../../db/models')
const router = express.Router();

// const asyncHandler = (handler) => (req, res, next) => {
//     handler(req, res, next). catch(next);
// }

router.post('/', asyncHandler(async (req, res) => {
    const { address, city, state, country, price, name, userId, imageLink } = req.body;
    const newActivity = await Activity.create({
        address,
        city,
        state,
        country,
        price,
        name,
        userId,
        imageLink
    });
    return res.json(newActivity);
}))

router.get('/', asyncHandler(async (req, res) => {
    const spot = await Activity.findAll();

    console.log(spot)
    return res.json(spot)
}))

router.put('/:id', asyncHandler(async (req, res) => {
    // const { address, city, state, country, price, name, userId, id } = req.body;
    // const activityId = parseInt(userId, 10);
    // console.log(req.params.id, '******&*********')
    // let editActivity = await Activity.update({
    //     address,
    //     city,
    //     state,
    //     country,
    //     price,
    //     name,
    // },
    //     { where: { id: activityId } }
    // )
    // editActivity = await Activity.findOne({ where: { id: activityId } });
    // return res.json(editActivity)
    const activityId = req.params.id;

    const activity = await Activity.findOne({ where: { id: activityId } })
    activity.update(req.body);
    return res.json(activity);
}))


router.delete('/:id', asyncHandler(async (req, res) => {
    const activityId = await Activity.findByPk(req.params.id);

    activityId.destroy();
    return res.json(activityId)

}))

module.exports = router
