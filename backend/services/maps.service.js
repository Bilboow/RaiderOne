const axios = require('axios');
const captainModel = require('../models/captain.model')

// 👉 Define function normally
async function getAddressCoordinate(address) {
    const apiKey = process.env.MAPS_API;
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);

        const features = response.data.features;

        if (!features || features.length === 0) {
            throw new Error("No results found");
        }

        const { lat, lon } = features[0].properties;

        return {
            ltd:lat,
            lng: lon
        };

    } catch (error) {
        console.error("Geocoding Error:", error.message);
        throw error;
    }
}

async function getDistanceTime(origin, destination) {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.MAPS_API;

    //  FIX: calling local function directly
    const start = await getAddressCoordinate(origin);
    const end = await getAddressCoordinate(destination);

    const url = `https://api.geoapify.com/v1/routing?waypoints=${start.ltd},${start.lng}|${end.ltd},${end.lng}&mode=drive&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);

        const route = response.data.features?.[0]?.properties;

        if (!route) throw new Error("No route found");

        return {
            distance_km: (route.distance / 1000).toFixed(2),
            duration_minute: (route.time / 60).toFixed(2)
        };

    } catch (err) {
        console.error("Routing Error:", err.response?.data || err.message);
        throw err;
    }
}

async function getAutoCompleteSuggestions(input) {
    if (!input) {
        throw new Error('query is required');
    }

    const apiKey = process.env.MAPS_API;

    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(input)}&apiKey=${apiKey}`;

    try {
        const response = await axios.get(url);

        const features = response.data.features;

        if (!features || features.length === 0) {
            return []; // No suggestions
        }

        // Extract formatted place names
        const suggestions = features
            .map(f => f.properties.formatted)
            .filter(v => Boolean(v));

        return suggestions;

    } catch (err) {
        console.error("Autocomplete Error:", err.message);
        throw err;
    }
}
async function getCaptainsInTheRadius(ltd,lng,radius) {
    const captains = await captainModel.find({
        location:{
            $geoWithin:{
                $centerSphere:[[ltd,lng],radius/6371]
            }
        }
    });

    return captains;
}

module.exports = {
    getAddressCoordinate,
    getDistanceTime,
    getAutoCompleteSuggestions,
    getCaptainsInTheRadius 
};
