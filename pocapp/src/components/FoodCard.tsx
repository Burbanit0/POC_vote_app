import React, { ReactNode } from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, styled } from "@mui/material";
import Button from "react-bootstrap/Button";
import useModal from "../hooks/useModal";
import ModalScrutin from "../components/ModalScrutin";
import { Food } from "../pages/ScrutinMajoritaire";
import IUser from "../types/user.type";

interface FoodInfo {
    children?: ReactNode;
    food: Food;
    user: IUser | undefined;

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
    const { isOpen, toggle } = useModal();

    return(
        <StyledCard>
            <CardMedia component="img" 
                image= {`/assets/images/${props.food.image}`} 
                height="190"/>
            <CardContent>
                <Typography variant="h5" color="text.secondary" align="center">
                    {props.food.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="success" onClick={toggle} >Select</Button>
                <ModalScrutin isOpen={isOpen} toggle={toggle} food={props.food} user={props.user}/>
            </CardActions>
        </StyledCard>
    )
}