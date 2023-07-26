import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import foodsJson from "../libs/foods.json";
import IUser from '../types/user.type';
import { Food } from './ScrutinMajoritaire';
import FoodCardNote from '../components/FoodCardNote';
import { Button } from 'react-bootstrap';

// function SaveNote(foods:Array<Food>, user:IUser|undefined) {
//     // code pour garder les notes des aliments 
// }

interface ScrutinType {
    user:IUser|undefined;
}

export default function ScrutinNote(props:ScrutinType) {
    let [foods, setFoods] = useState(Array<Food>);

    useEffect(() => {
        setFoods(foodsJson);
    }, []);

    return(
        <>
        <div>
            <Container>
                <Row className="justify-content-md-center mx-md-n3 my-3">
                    {foods.map((food:Food) => 
                        {
                            return (
                                <Col className="py-2" md={3}>
                                    <FoodCardNote food = {food} user = {props.user}/>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Container>
        </div>
        <Button>Test</Button>
        </>
    )
}