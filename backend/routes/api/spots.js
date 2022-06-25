const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image, Review, User } = require('../../db/models')

const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
    singleMulterUpload,
    singlePublicFileUpload,
    multipleMulterUpload,
    multiplePublicFileUpload,
} = require("../../awsS3");


const router = express.Router();


router.post('/',
    multipleMulterUpload('images'),
    asyncHandler(async (req, res) => {
        const { address, city, state, country, price, title, name, userId, spotId, } = req.body;
        const images = await multiplePublicFileUpload(req.files);
        const newSpot = await Spot.create({
            address,
            city,
            state,
            country,
            price,
            name,
            title,
            userId,
            spotId,
            images,
        });
        return res.json(newSpot);
    }))

router.get(
    '/',
    asyncHandler(async (req, res) => {
        const spot = await Spot.findAll({
            include: Image,
        });
        return res.json(spot)
    }))

router.put('/:id', asyncHandler(async (req, res) => {
    const spotId = req.params.id;

    const spot = await Spot.findOne({ where: { id: spotId } })
    spot.update(req.body);
    return res.json(spot);
}))


router.delete('/:id', asyncHandler(async (req, res) => {
    const spotId = await Spot.findByPk(req.params.id);

    spotId.destroy();
    return res.json(spotId)

}))

router.get('/:spotId', asyncHandler(async (req, res) => {
    const { spotId } = req.params

    const spot = await Spot.findByPk(spotId, {
        include: [Image, User]
    })
    return res.json(spot)
}))

module.exports = router
