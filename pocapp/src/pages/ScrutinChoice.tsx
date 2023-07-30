import React from 'react';
import Typography from '@mui/material/Typography';
import CardGrid from '../components/Grid';

export default function ScrutinChoice(){

    return(
        <>
            <Typography variant="h3" color="text.primary" align="center">
                Choix multiple
            </Typography>
            <CardGrid/>
        </>
    )
}