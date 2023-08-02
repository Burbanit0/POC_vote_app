import React from "react";
import { useFood } from "../utils/foodsContext";
import GridDrag from "../components/GridDrag";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";


export default function ScrutinClass(){
	let foods = useFood();

    return (
        <motion.div 
			initial={{opacity:0}}
			animate={{opacity:1}}
			exit={{opacity:0}}>
		<Typography variant="h3" color="text.primary" align="center">
			Classement par ordre de preference
		</Typography>
		<Container>
			<GridDrag foods={foods.foods}/>
		</Container>
		
		</motion.div>
    )
}