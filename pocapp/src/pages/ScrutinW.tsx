import React, {useState} from "react";
//Bootstrap:
import { Typography } from "@mui/material";
import CardGrid from "../components/Grid";
import Weight from "../components/actions/Weight";

export default function ScrutinW () {
    let [total, setTotal] = useState(100);

    function add(value: number){
        
    }

    return (
        <>
        <Typography variant="h3" color="text.primary" align="center">
            Attribution d'un poids
        </Typography>
        <CardGrid option={<><Weight total={total}/></>}/>    
        </>
        
    )
}