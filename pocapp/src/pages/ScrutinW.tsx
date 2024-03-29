import React, {useState} from "react";
//Bootstrap:
import { Grid, LinearProgress, Typography } from "@mui/material";
import CardGrid from "../components/Grid";
import Weight from "../components/actions/Weight";
import { motion } from "framer-motion";

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
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}>
            <Typography variant="h3" color="text.primary" align="center">
                Attribution d'un poids
            </Typography>
            <Grid height={30}>
            </Grid>
            <Grid container>
                <Grid xs={4}>
                </Grid>
                <Grid xs={4}> 
                    <LinearProgress variant="buffer" value={total} sx={{width:500, height:10, borderRadius:2}}/>
                </Grid>
                <Grid xs={4}>
                </Grid>
            </Grid>
            <CardGrid option={<><Weight total={total} sub={sub} add={add}/></>}/>    
        </motion.div>
        
    )
}