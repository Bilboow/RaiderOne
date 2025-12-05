const mapService = require('../services/maps.service');
const {validationResult} = require('express-validator')

module.exports.getCoordinates = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const {address} = req.query;

    try{
        const coordinates = await mapService.getAddressCoordinate(address);
        res.status(200).json(coordinates);
    }catch(error){
        res.status(404).json({message:'Coordinate not found'});
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    try {
        // Validate request input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { origin, destination } = req.query;

        if (!origin || !destination) {
            return res.status(400).json({
                errors: [
                    { msg: "Origin is required", path: "origin" },
                    { msg: "Destination is required", path: "destination" }
                ]
            });
        }

        const distanceTime = await mapService.getDistanceTime(origin, destination);

        return res.status(200).json(distanceTime);

    } catch (err) {
        console.error("Controller Error:", err.message);
        
        return res.status(500).json({
            message: 'Internal server error',
            error: err.message
        });
    }
};

module.exports.getAutoCompeletSuggestions = async (req,res,next)=>{
    try {
        // Validate query input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;

        const suggestions = await mapService.getAutoCompleteSuggestions(input);

        res.status(200).json(suggestions);

    } catch (err) {
        console.error("Autocomplete Controller Error:", err.message);
        res.status(500).json({ message: 'Internal server error' });
    }
};