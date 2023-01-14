import React, { ReactNode } from "react";
import Card from "react-bootstrap/Card";
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

export default function FoodCard(props: FoodInfo ) {
    const { isOpen, toggle } = useModal();

    return(
        <Card className="box">
            <Card.Img variant="top" src={`/assets/images/${props.food.image}`} width="100" height="180"/>
            <Card.Body>
                <Card.Title>
                    {props.food.name}
                </Card.Title>
                    <Button variant="success" onClick={toggle}>Select</Button>
                    <ModalScrutin isOpen={isOpen} toggle={toggle} food={props.food} user={props.user}/>
            </Card.Body>
        </Card>
    )
}