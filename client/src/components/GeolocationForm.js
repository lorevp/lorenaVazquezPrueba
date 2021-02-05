import React from 'react';
import { Button, Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { spacing } from '@material-ui/system';

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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/addLocations`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                locations
            })
        });

        if(response.status === 200){
            setLocations([]);
        }
    }

    return (
        <>
            <Typography gutterBottom
                style={{
                    color:'#283380'
                }}
            >
                Longitud
            </Typography>
            <Slider
                defaultValue={20}
                value={state.longitude}
                onChange={(event, newValue) => setState({ ...state, longitude: newValue })}
                aria-labelledby="discrete-slider-custom"
                max={-8.562903}
                step={0.000001}
                min={-8.563527}
                valueLabelDisplay="auto"
                style={{
                    marginBottom:'3em',
                    color:'#283380'
                }}
            />
            <Typography gutterBottom>
            Latitud
            </Typography>
            <Slider
                defaultValue={20}
                value={state.latitude}
                onChange={(event, newValue) => setState({ ...state, latitude: newValue })}
                aria-labelledby="discrete-slider-custom"
                min={42.872245}
                step={0.000001}
                max={42.872387}
                valueLabelDisplay="auto"
                style={{
                    marginBottom:'3em',
                    color:'#283380'
                }}
            />
            <div style={{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                paddingTop:'1.5em',
            }}>
                <Button
                    variant="outlined"
                    onClick={addLocation}
                    style={{
                        marginRight:'.5em',
                        color:'#283380'
                    }}
                >
                    Añadir
                </Button>
                <Button
                    variant="outlined"
                    disabled={locations.length === 0}
                    onClick={sendLocations}
                    style={{
                        marginLeft:'.5em',
                        color:'#283380'
                    }}
                >
                    Enviar
                </Button>
            </div>

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