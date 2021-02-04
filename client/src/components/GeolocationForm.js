import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

const GeolocationForm = () => {
    const [state, setState] = React.useState({
        latitude: null,
        longitude: null
    });

    const [locations, setLocations] = React.useState([]);

    const addLocation = () => {
        setLocations([ ...locations, state ]);
    }

    const sendLocations = async () => {
    }

    return (
        <>
            <Typography gutterBottom>
                Latitud
            </Typography>
            <Slider
                defaultValue={20}
                value={state.latitude}
                onChange={(event, newValue) => setState({ ...state, latitude: newValue })}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
            />
            <Typography gutterBottom>
                Longitud
            </Typography>
            <Slider
                defaultValue={20}
                value={state.longitude}
                onChange={(event, newValue) => setState({ ...state, longitude: newValue })}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
            />
            <Button
                variant="outlined"
                color="primary"
                onClick={addLocation}
            >
                Añadir
            </Button>
            <Button
                variant="outlined"
                color="primary"
                onClick={sendLocations}
            >
                Enviar
            </Button>

            <div>
                {locations.map((location, index) => (
                    <div key={`location_${index}`}>
                        Longitud: {location.longitude} || Latitud: {location.latitude}
                    </div>
                ))}
            </div>


        </>
    )
}

export default GeolocationForm;