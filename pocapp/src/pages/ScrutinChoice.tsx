import React from 'react';
import Typography from '@mui/material/Typography';
import GridChoice from '../components/GridChoice';
import { motion } from 'framer-motion';

export default function ScrutinChoice(){

    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
        >
            <Typography variant="h3" color="text.primary" align="center">
                Choix multiple
            </Typography>
            <GridChoice/>
        </motion.div>
    )
}