import React from "react";
// Bootsrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//
import FoodCard from "./foods/FoodCard";
//
import Food from '../types/food.type';
import { useFood } from '../utils/foodsContext';

interface Type {
    option?: any;
}

export default function CardGrid (props: Type) {
    let foodList = useFood();
    
    return(
        <Container>
            <Row className="justify-content-md-center mx-md-n5 my-4">
                {foodList.foods.map((food:Food) => 
                    {
                        return (
                            <Col className="py-2" md={3}>
                                <FoodCard food={food} option={props.option}/>
                            </Col>
                        )
                    }
                )}
            </Row>
        </Container>
    )
    
}
            