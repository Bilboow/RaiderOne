const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controller')
const {query} = require('express-validator');


router.get('/get-coordinates',
    query('address').isString().isLength({min:3}),
    authMiddleware.authUser ,mapController.getCoordinates
);

router.get(
    '/get-distance-time',
    query('origin')
        .isString()
        .isLength({ min: 3 })
        .withMessage("Origin must be a string of at least 3 characters"),

    query('destination')
        .isString()
        .isLength({ min: 3 })
        .withMessage("Destination must be a string of at least 3 characters"),

    authMiddleware.authUser,

    mapController.getDistanceTime
);

router.get(
    '/get-suggestions',
    query('input')
        .isString()
        .isLength({min:3}),
    
    authMiddleware.authUser,

    mapController.getAutoCompeletSuggestions
)

module.exports = router;