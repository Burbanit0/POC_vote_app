import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import foodsJson from "../libs/foods.json";
import { Food } from "./ScrutinMajoritaire";
import userService from "../services/user.service";
import IUser from "../types/user.type";

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
// 	padding: 10,
// 	margin: `0 50px 15px 50px`,
// 	background: isDragging ? "blue" : "white",
// 	color: isDragging ? "white" : "black",
// 	border: `1px solid black`,
// 	fontSize: `20px`,
// 	borderRadius: `5px`,

// 	...draggableStyle
// })


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
        <>
        <h2>Ordonnez les plats selon vos préférences.</h2>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="foods">
					{(provided) => (
					<ListGroup>
						<div className="foods" {...provided.droppableProps} ref={provided.innerRef}>
							{foods.map((food, index) => {
								return (
									<ListGroup.Item className="my-2">
										<Draggable key={food.id.toString()} draggableId={food.id.toString()} index={index}>
											{(provided, snapshot) => (
												<div
													ref={provided.innerRef}
													{...provided.draggableProps}
													{...provided.dragHandleProps}
													// style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
													>
													{food.name}
												</div>
											)}
										</Draggable>
									</ListGroup.Item>
								)
							})}
							</div>
						</ListGroup>
					)}
				</Droppable>
			</DragDropContext>

			<Button href="/scrutinW" onClick={()=> SaveList(foods, props.user)}>Save List</Button>
        </>
    )
}