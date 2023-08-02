import React, { ReactNode } from "react";
import Food from "../types/food.type";
import { IUser } from "../types/user.type";
import CardActions from "@mui/material/CardActions";
import { Button } from "react-bootstrap";
import ModalScrutin from "./ModalScrutin";
import useModal from "../hooks/useModal";

interface FoodInfo {
    children?: ReactNode;
    food: Food;
    user: IUser | undefined;

}

export default function CardFooter(props: FoodInfo) {
    const { isOpen, toggle } = useModal();

    return (
        <CardActions>
                <Button variant="success" onClick={toggle} >Select</Button>
                <ModalScrutin isOpen={isOpen} toggle={toggle} food={props.food} user={props.user}/>
        </CardActions>
    )
}