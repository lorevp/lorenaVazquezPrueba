const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
dotenv.config();

const SITUM_USER = process.env.SITUM_USER;
const SITUM_API_KEY = process.env.SITUM_API_KEY;

const getSitumCreds = () => ({
    'X-API-EMAIL': SITUM_USER,
    'X-API-KEY': SITUM_API_KEY
});

app.use(bodyParser.json());
app.use(cors());
 
app.post('/addLocations', async (req, res) => {
    const response = await fetch(`https://${process.env.API_URL}/api/v1/realtime/positions`, {
        headers: {
            'Content-type': 'application/json',
            ...getSitumCreds()
        },
        method: 'POST',
        body: JSON.stringify({
            "outdoor_position": [
                {
                    "accuracy": 0,
                    "building_ids": [7988],
                    "device_id": 7988,
                    "lat": 42872249,
                    "lng": -8563527,
                    "timestamp": new Date().getTime(),
                    "yaw": 0,
                    "found_items": [
                        {
                            "id": 7988,
                            "lat": 42872249,
                            "lng": -8563527,
                            "type": "BUILDING",
                        },
                    ],
                    // "volatile": {
                    //     "building_origin": 1111,
                    //     "building_destination": 2222,
                    //     "poi_id": 33333
                    // },
                    // "snr": 2.22
                }
            ]
        })
    });

    console.log(response);

    //const json = await response.json();

    //console.log(json);
});
 
app.listen(process.env.SERVER_PORT);