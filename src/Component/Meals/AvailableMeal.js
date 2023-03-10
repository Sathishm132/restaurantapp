import { Fragment } from "react"
import Card from "../UI/Card";

import classes from './AvailableMeal.module.css'
import Mealitem from "./Mealitem";
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  
const AvailableMeal=props=>{
    const meallist=DUMMY_MEALS.map((meal)=>(
    <Mealitem
    id={meal.id}
    key={meal.key}
    name={meal.name}
    description={meal.description}
    price={meal.price}
    />))
    return<Fragment>
      <Card>
      <ul>
            {meallist}

        </ul>
      </Card>
       
    </Fragment>

}
export default AvailableMeal