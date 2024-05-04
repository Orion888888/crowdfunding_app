const router = require('express').Router();

const blogRoutes = require('./blogRoutes');
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/blog', blogRoutes);
router.use('/post', postRoutes);

module.exports = router;