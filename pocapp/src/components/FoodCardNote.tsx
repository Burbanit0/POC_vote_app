import { Food } from "../pages/ScrutinMajoritaire";
import React, {ReactNode} from 'react';
import  {Card, InputGroup, Form} from 'react-bootstrap';
import IUser from "../types/user.type";

interface FoodInfo {
    children?: ReactNode;
    food: Food;
    user: IUser | undefined;
}

export default function FoodCardNote(props: FoodInfo) {

    return(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={`/assets/images/${props.food.image}`} width="100" height="180"/>
        <Card.Body>
            <Card.Title>
                {props.food.name}
            </Card.Title>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon">NOTE</InputGroup.Text>
                <Form.Control type="number"/>
            </InputGroup>
        </Card.Body>
    </Card>
  )
};