import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import foodsJson from "../libs/foods.json";
import { Food } from "./ScrutinMajoritaire";
import userService from "../services/user.service";
import IUser from "../types/user.type";
import { Typography } from "@mui/material";

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	padding: 2,
	margin: `0 2px 2px 2px`,
	background: isDragging ? "grey" : "white",
	color: isDragging ? "white" : "black",
	border: `1px solid black`,
	fontSize: `20px`,
	borderRadius: `5px`,
	...draggableStyle
})


function SaveList(foods:Array<Food>, user:IUser | undefined){
	let test:string[] = [];
	foods.forEach(food => {
		test.push(food.id);
	})
	userService.saveOrder(user?._id, test);
}

interface ScrutinType {
	user:IUser | undefined;
}

export default function ScrutinClass(props:ScrutinType){
    let [foods, setFoods] = useState(Array<Food>);

	useEffect(() => {
        setFoods(foodsJson);
      }, []);

    const onDragEnd = (result: DropResult) => {
		const { source, destination } = result
		if (!destination) return

		const items = Array.from(foods)
		const [ newOrder ] = items.splice(source.index, 1)
		items.splice(destination.index, 0, newOrder)

		setFoods(items)
	}

    return (
        <><Container>
			<Row className="justify-content-md-center">
				<Col xs={6}>
					<h2>Ordonnez les plats selon vos préférences.</h2>
				</Col>
			</Row>
			<Row>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="foods">
						{(provided) => (
							<Row className="justify-content-md-center" md={4}>
								<Col xs={4}>
									<div className="foods" {...provided.droppableProps} ref={provided.innerRef}>
										{foods.map((food, index) => {
											return (
												<Draggable key={food.id.toString()} draggableId={food.id.toString()} index={index}>
													{(provided, snapshot) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
														>
															<Typography variant="h5" color="text.primary" align="center">
																{food.name}
															</Typography>
														</div>
													)}
												</Draggable>
											);
										})}
										{provided.placeholder}
									</div>
								</Col>
							</Row>
						)}
					</Droppable>
				</DragDropContext>
			</Row>
		</Container>
		<Container>
				<Row className="justify-content-md-center">
					<Col md="auto">
						<Button href="/scrutinW" onClick={() => SaveList(foods, props.user)}>Save List</Button>
					</Col>
				</Row>
			</Container></>
    )
}