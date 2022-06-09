const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image, Review } = require('../../db/models')
const router = express.Router();

// const asyncHandler = (handler) => (req, res, next) => {
//     handler(req, res, next). catch(next);
// }

router.post('/', asyncHandler(async (req, res) => {
    const { address, city, state, country, price, name, userId, imageId, spotId } = req.body;
    const newSpot = await Spot.create({
        address,
        city,
        state,
        country,
        price,
        name,
        userId,
        imageId,
        spotId
    });
    return res.json(newSpot);
}))

router.get('/', asyncHandler(async (req, res) => {
    const spot = await Spot.findAll({
        include: Image
    });
    return res.json(spot)
}))

router.put('/:id', asyncHandler(async (req, res) => {
    const spotId = req.params.id;

    const Spot = await Spot.findOne({ where: { id: spotId } })
    Spot.update(req.body);
    return res.json(Spot);
}))


router.delete('/:id', asyncHandler(async (req, res) => {
    const spotId = await Spot.findByPk(req.params.id);

    spotId.destroy();
    return res.json(spotId)

}))

router.get('/:spotId', asyncHandler(async (req, res) => {
    const { spotId } = req.params

    const spot = await Spot.findByPk(spotId, {
        include: Image
    })
    return res.json(spot)
}))

module.exports = router
