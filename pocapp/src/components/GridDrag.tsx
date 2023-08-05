import React, { useState } from "react";
import FoodCard from "../components/foods/FoodCard";
import {GridContextProvider, GridDropZone, GridItem, swap} from "react-grid-dnd";
import Food from "../types/food.type";

interface Props {
    foods: Array<Food>;
}

export default function GridDrag(props: Props) {
    let [items, setItems] = useState(props.foods);

    function onChange(sourceId: string, sourceIndex: number, targetIndex: number) {
		const nextState = swap(items, sourceIndex, targetIndex);
		setItems(nextState);
	}

    return(
        <GridContextProvider onChange={onChange}>
			<GridDropZone
				id="items"
				boxesPerRow={4}
				rowHeight={300}
                style={{ height: 400 }}
				>
				{items.map(item => (
					<GridItem key={item.id} style={{padding: '10px'}}>
						<FoodCard food={item}/>
					</GridItem>
				))}
			</GridDropZone>
      	</GridContextProvider>
    )
}