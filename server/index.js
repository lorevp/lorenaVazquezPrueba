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

const session = new Date().getTime();

const sendLocation = location => new Promise(resolve => {
    setTimeout(async () => {
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
                        "lat": location.latitude,
                        "lng": location.longitude,
                        "timestamp": new Date().getTime(),
                        "yaw": 0,
                        "timestamp_session": session
                    }
                ]
            })
        });
        console.log(response);
        resolve();
    }, 1000)
}) 

const sendLocations = async locations => {
    for(let i = 0; i < locations.length; i++){
        //ESTO DEBERÍA LLAMAR A UN MÉTODO QUE AGREGUE A UNA COLA PARA MANTENER SIEMPRE EL INTERVALO DE 1S
        await sendLocation(locations[i]);
    }
}
 
app.post('/addLocations', async (req, res) => {
    sendLocations(req.body.locations);
    return res.status(200).json({ success: true });
});
 
app.listen(process.env.SERVER_PORT);