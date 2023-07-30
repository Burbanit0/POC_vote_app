import React from "react";
import { Typography } from "@mui/material";
import CardGrid from "../components/Grid";

export default function ScrutinMajoritaire(){
    
    return (
        <>
        <Typography variant="h3" color="text.primary" align="center">
            Scrutin Majoritaire 
        </Typography>
        <div>
            <CardGrid />
        </div>
        </>
    )
}