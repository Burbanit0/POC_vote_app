import Food from '../../types/food.type';
import React, { ReactNode} from 'react';
import { Card, CardContent, CardMedia, Typography, styled } from "@mui/material";

interface FoodInfo {
    children?: ReactNode;
    food: Food;
}

const StyledCard = styled(Card)`
    ${({ theme }) => `
    cursor: pointer;
    background-color: white;

    :visited {
      background-color:red;
    }
    `}
  `;

export default function FoodCardSelect(props: FoodInfo) {

    return(
      <StyledCard>
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
  </StyledCard>
  )
};