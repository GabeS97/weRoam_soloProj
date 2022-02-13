const express = require('express');
const asyncHandler = require('express-async-handler');
const { Activity, Image, Review } = require('../../db/models')
const router = express.Router();

router.post('/', asyncHandler(async (req, res) => {
    const { userId, activityId, title, reviews } = req.body;
    const review = await Review.create({ userId, activityId, title, reviews }, { include: Activity });
    return res.json(review)
}));

router.get(
    "/",
    asyncHandler(async (req, res) => {
        const reviews = await Review.findAll();

        return res.json(reviews);
    })
);

router.put('/:id', asyncHandler(async (req, res) => {
    const { userId, activityId, title, reviews, id } = req.body;
    const reviewId = req.params.id;



    const review = await Review.findOne({ where: { id: reviewId } })
    review.update(req.body);
    return res.json(review);
}))

router.delete('/:id', asyncHandler(async (req, res) => {
    const reviewId = await Review.findByPk(req.params.id);
    reviewId.destroy();
    return res.json(reviewId);
}))

module.exports = router
