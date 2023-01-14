import React, { ReactNode} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Food } from "../pages/ScrutinMajoritaire";
import ButtonGroup from "react-bootstrap/ButtonGroup";

interface FoodInfo {
    children?: ReactNode;
    food: Food;
    score: number;
    sub:(id:string) => void;
    add:(id:string) => void;
}

export default function FoodCardW(props: FoodInfo ) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/assets/images/${props.food.image}`} width="100" height="180"/>
            <Card.Body>
                <Card.Title>
                    {props.food.name}
                </Card.Title>
                <Card.Text>
                    Description de la carte
                </Card.Text>
                    <ButtonGroup className="justify-content-md-center">
                        <Button onClick={() => props.sub(props.food.id)}> - </Button>
                        Score : {props.food.weight}
                        <Button onClick={() => props.add(props.food.id)}> + </Button>
                    </ButtonGroup>
            </Card.Body>
        </Card>
    )
}