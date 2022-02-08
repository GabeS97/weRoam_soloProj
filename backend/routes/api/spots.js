const express = require('express');
const { Spot } = require('../../db/models/')
const asyncHandler = require('express-async-handler');
const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {
    const destination = await Spot.findAll({
        order: [['country', 'ASC']],
        // include: [spotLink]
    })
    return res.json(destination);
}))

module.exports = router;
