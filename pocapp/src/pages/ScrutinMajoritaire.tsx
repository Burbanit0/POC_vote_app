import React from "react";
import { Typography } from "@mui/material";
import CardGrid from "../components/Grid";
import { motion } from "framer-motion";

export default function ScrutinMajoritaire(){
    
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
        <Typography variant="h3" color="text.primary" align="center">
            Scrutin Majoritaire 
        </Typography>
        <div>
            <CardGrid />
        </div>
        </motion.div>
    )
}