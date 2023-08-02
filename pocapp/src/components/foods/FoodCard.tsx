import React, { ReactNode, } from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, styled } from "@mui/material";
import Food from "../../types/food.type";

interface FoodInfo {
    children?: ReactNode;
    food: Food;
    option?: any;
}

const StyledCard = styled(Card)`
    ${({ theme }) => `
    cursor: pointer;
    transition: ${theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.standard, 
    })};
    &:hover {
        transform: scale(1.05);
      }
    `}
`;

export default function FoodCard(props: FoodInfo ) {
 
    return(
        <StyledCard sx={{boxShadow: 5}}>
            <CardMedia component="img" 
                image= {`/assets/images/${props.food.image}`} 
                height="190"
                alt={`${props.food.image}`}
                className="CardMedia"
                />
            <CardContent>
                <Typography variant="h5" color="text.secondary" align="center">
                    {props.food.name}
                </Typography>
            </CardContent>
            <CardActions>
                {props.option}
            </CardActions>
        </StyledCard>
    )
}