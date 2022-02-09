const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Image } = require('../../db/models')
const router = express.Router();

// const asyncHandler = (handler) => (req, res, next) => {
//     handler(req, res, next). catch(next);
// }

router.get('/', asyncHandler(async (req, res) => {
    const spot = await Activity.findAll({
        include: { model: Image }
    });
    return res.json(spot)
}))

module.exports = router
