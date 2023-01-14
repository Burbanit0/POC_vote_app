import React, { useEffect, useState } from "react";
//Bootstrap:
import ProgressBar from "react-bootstrap/ProgressBar";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import FoodCardW from "../components/FoodCardW";
import foodsJson from "../libs/foods.json";

import userService from "../services/user.service";
import IUser from "../types/user.type";

import { Food } from "./ScrutinMajoritaire";

export interface Poids {
	image: string,
	poids: number
}

interface ScrutinType {
	user:IUser | undefined;
}

function SaveList(foods:Array<Food>, user:IUser | undefined){
    let test:Poids[] = [];
	foods.forEach(food => {
		let a: Poids = {image: food.id, poids: food.weight}
		test.push(a);
	})
	userService.savePoids(user?._id, test);
}

export default function ScrutinW (props:ScrutinType) {
    let [total, setTotal] = useState(100);

    let [foods, setFoods] = useState(Array<Food>);
    useEffect(() => {
        setFoods(foodsJson);
      }, [foods]);

    function substract(foodId:string){
        foods = foods.map(food => {
            if (food.id === foodId) {
                if (food.weight > 0) {
                    food.weight = food.weight -1;
                    setTotal(total + 1);
                }
            }
            return food;
        });
        setFoods(foods);
    }

    function add(foodId:string) {
        foods = foods.map(food => {
            if (food.id === foodId) {
                if (total > 0) {
                    food.weight = food.weight + 1;
                    setTotal(total - 1);
                }
            }
            return food;
        });
        setFoods(foods);
    }

    return (
        <>
            <p> Nombre de points restants à attribuer (Max = 100)</p>
            <ProgressBar now={total} label={`${total}`} />

            <Container>
                <Row className="justify-content-md-center mx-md-n5 my-4">
                    {foods.map((food:Food) => 
                        {
                            return (
                                <Col className="py-2" md={3}>
                                    <FoodCardW food = {food} score = {total} sub = {(foodId) => substract(foodId)} add = {(foodId) => add(foodId)}/>
                                </Col>
                            )
                        }
                    )}
                </Row>
            </Container>
            <Button onClick={()=> SaveList(foods, props.user)}>Save List</Button>
        </>
        
    )
}