const express = require('express');
const asyncHandler = require('express-async-handler');
const { Spot, Image, Review } = require('../../db/models')
const { restoreUser } = require('../../utils/auth');
const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    const { userId, spotId, title, reviews } = req.body;
    const review = await Review.create({ userId, spotId, title, reviews });
    return res.json(review)
}));

router.get(
    "/",
    restoreUser,
    asyncHandler(async (req, res) => {
        // const id = req.params.id;
        const spotId  = req.params.spotId
        const reviews = await Review.findAll({
        });

        return res.json(reviews);
    })
);

// router.get(
//     "/:id",
//     restoreUser,
//     asyncHandler(async (req, res) => {
//         const id = req.params.id;
//         console.log(id)
//         const reviews = await Review.findAll({ where : { id }});

//         return res.json(reviews);
//     })
// );


router.put(
    '/:id',
    asyncHandler(async function(req, res) {
        const reviewId = req.params.reviewId;

        const review = await Review.findOne({ where: {id: reviewId}});
        review.update(req.body)
        return res.json(review);
    })
);


router.delete('/:id', asyncHandler(async (req, res) => {
    const reviewId = await Review.findByPk(req.params.id);
    reviewId.destroy();
    return res.json(reviewId);
}))

module.exports = router
