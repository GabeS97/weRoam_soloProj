const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotRouter = require('./spots.js')
const reviewRouter = require('./reviews.js')
// const imageRouter = require('./images.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotRouter);

router.use('/reviews', reviewRouter);

module.exports = router;
// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });
