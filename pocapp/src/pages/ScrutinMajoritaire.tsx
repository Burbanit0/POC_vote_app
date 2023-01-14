import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FoodCard from "../components/FoodCard";
import foodsJson from "../libs/foods.json";
import IUser from "../types/user.type";

export interface Food{
    id:string,
    name:String,
    image:string,
    weight: number
}

interface Props{
    user:IUser | undefined
}

export default function ScrutinMajoritaire(props:Props){
    
    let [foods, setFoods] = useState(Array<Food>);
    
    useEffect(() => {
        setFoods(foodsJson);
      }, []);

    return (
        <>
        <div>
            <Container>
                <Row className="justify-content-md-center mx-md-n3 my-3">
                    {foods.map((food:Food) => 
                        {
                            return (
                                <Col className="py-2" md={3}>
                                    <FoodCard food = {food} user = {props.user}/>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Container>
        </div>
        </>
    )
}