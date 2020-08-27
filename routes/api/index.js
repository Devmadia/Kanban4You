const router = require('express').Router();
// this file will serve as a means to collect all of the API routes and package them up

const userRoutes = require('./user-routes.js');

// route for userRoutes
router.use('/users', userRoutes);



module.exports = router;