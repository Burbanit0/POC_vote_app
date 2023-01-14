import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Food } from "./ScrutinMajoritaire";
import ClickableReactCard from '../components/FoodCardSelect';

import foodsJson from "../libs/foods.json";
import Button from 'react-bootstrap/Button';


export default function ScrutinChoice() {
    let [foods, setFoods] = useState(Array<Food>);
    let [data, setData] = useState(Array<string>);

    function colored() {
        console.log(data)
    }

    useEffect(() => {
        setFoods(foodsJson);
      }, [foods]);

    return(
        <>
            <Container>
                <Row className="justify-content-md-center mx-md-n5 my-4">
                    {foods.map((food:Food) => 
                        {
                            return (
                                <Col className="py-2" md={3}>
                                    <ClickableReactCard food={food} data={data}/>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Container>

            <Button onClick={() => colored()}>Test</Button>
        </>
    )
}