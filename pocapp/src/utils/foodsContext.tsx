import React, { createContext, useContext, useState } from "react";

import Food from "../types/food.type";
import foodsJson from "../libs/foods.json";


const myFood = {
    foods: Array<Food>(),
}

const FoodContext = createContext<{
    foods: Array<Food>;
}>(myFood);

interface Props {
    children: React.ReactNode;
  }

export const FoodProvider: React.FC<Props> = ({children}) => {
    const [foods, setFoods] = useState(foodsJson);

    return (
        <FoodContext.Provider value={{ foods }}>
            {children}
        </FoodContext.Provider>
    );
};

export const useFood = () => useContext(FoodContext);