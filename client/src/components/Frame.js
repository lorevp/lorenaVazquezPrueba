import { Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import { isMobile } from 'react-device-detect';

const Frame = ({ children}) => {

    return (

        <Grid>
            <div style={{
                width:'100%',
                display:'flex',
                justifyContent:'center',
                height: isMobile ? '100%' : '75%'
            }}>
                <Grid item xs={11} lg={6}>
                    <Card style={{ padding: '1.5em', minHeight: '70vh', marginTop: '1em' }}>
                        {children}
                    </Card>
                </Grid>
            </div>
        </Grid>
    )
}

export default Frame;