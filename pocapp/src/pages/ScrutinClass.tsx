import React from "react";
import { useFood } from "../utils/foodsContext";
import GridDrag from "../components/GridDrag";
import { Typography } from "@mui/material";


export default function ScrutinClass(){
	let foods = useFood();

    return (
        <>
		<Typography variant="h3" color="text.primary" align="center">
			Classement par ordre de preference
		</Typography>
		<GridDrag foods={foods.foods}/>
		</>
    )
}