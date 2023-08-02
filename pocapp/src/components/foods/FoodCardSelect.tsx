import Food from '../../types/food.type';
import React, { ReactNode, useState} from 'react';
import { Card, CardContent, CardMedia, Typography, styled } from "@mui/material";

interface FoodInfo {
    children?: ReactNode;
    food: Food;
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

export default function FoodCardSelect(props: FoodInfo) {

    let [color, setColor] = useState("white");

    function changeColor() {
      if (color === "white") {
        setColor("grey");
      } else {
        setColor("white");
      }
    }


    return(
      <StyledCard onClick={() => changeColor()} sx={{ border: 3, borderColor: color, boxShadow: 5}}>
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