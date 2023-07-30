import React from 'react';
import Typography from '@mui/material/Typography';
import CardGrid from '../components/Grid';
import Note from '../components/actions/Note';


export default function ScrutinNote() {

    return(
        <>
        <Typography variant="h3" color="text.primary" align="center">
            Attribution d'une note
        </Typography>
        <div>
            <CardGrid option={<><Note/></>}/>
        </div>
        
        </>
    )
}