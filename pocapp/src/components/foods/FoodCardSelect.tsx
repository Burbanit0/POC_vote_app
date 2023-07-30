import Food from '../../types/food.type';
import React, {useEffect, useState, ReactNode} from 'react';
import  {Card} from 'react-bootstrap';

interface FoodInfo {
    children?: ReactNode;
    food: Food;
    data:string[];
}

export default function FoodCardSelect(props: FoodInfo) {

  const [selectedColor, setSelectedColor] = useState<string>();

  function changeColor(id:string) {
    if(selectedColor === "secondary"){
      setSelectedColor("");
      const index = props.data.indexOf(props.food.id);
      props.data.splice(index, 1);
    } else {
      setSelectedColor("secondary");
      props.data.push(props.food.id);
    }
  }
  useEffect(() => {
    }, [selectedColor]);

    return(
      <Card style={{ width: '18rem' }} bg={selectedColor} onClick={() => changeColor(props.food.id)}>
          <Card.Img variant="top" src={`/assets/images/${props.food.image}`} width="100" height="180"/>
          <Card.Body>
              <Card.Title>
                  {props.food.name}
              </Card.Title>
              <Card.Text>
                  Description de la carte
              </Card.Text>
          </Card.Body>
      </Card>
  )
};