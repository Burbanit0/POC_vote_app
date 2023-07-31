import React, {useState} from "react";
//Bootstrap:
import { Grid, LinearProgress, Typography } from "@mui/material";
import CardGrid from "../components/Grid";
import Weight from "../components/actions/Weight";

export default function ScrutinW () {
    let [total, setTotal] = useState(100);

    function add(value: number){
        if (total > 0) {
            setTotal(total - 1);
        }
    }

    function sub(value: number){
        if (total < 100 && value > 0) {
            setTotal(total + 1);
        }
    }

    return (
        <>
        <Typography variant="h3" color="text.primary" align="center">
            Attribution d'un poids
        </Typography>
        <Grid container>
            <Grid xs={2}> 
                <LinearProgress variant="buffer" value={total} sx={{width:500}}/>
            </Grid>
        </Grid>
        <CardGrid option={<><Weight total={total} sub={sub} add={add}/></>}/>    
        </>
        
    )
}