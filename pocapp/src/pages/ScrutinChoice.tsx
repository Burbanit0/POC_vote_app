import React from 'react';
import Typography from '@mui/material/Typography';
import GridChoice from '../components/GridChoice';

export default function ScrutinChoice(){

    return(
        <>
            <Typography variant="h3" color="text.primary" align="center">
                Choix multiple
            </Typography>
            <GridChoice/>
        </>
    )
}