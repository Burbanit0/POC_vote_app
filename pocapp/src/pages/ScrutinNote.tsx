import React from 'react';
import Typography from '@mui/material/Typography';
import CardGrid from '../components/Grid';
import Note from '../components/actions/Note';
import { motion } from 'framer-motion';


export default function ScrutinNote() {

    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
            <Typography variant="h3" color="text.primary" align="center">
                Attribution d'une note
            </Typography>
            <div>
                <CardGrid option={<><Note/></>}/>
            </div>
        </motion.div>
    )
}