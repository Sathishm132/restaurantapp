import MealForm from "./Mealform";
import classes from "./MealItem.module.css"

const Mealitem=props=>{
    const price=`Rs ${props.price.toFixed(2)}`
    return(
        

        <li className={classes.meal}>
            <div >
                <h3 >{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
           <MealForm></MealForm>
            </div>
            
        </li>
        
    
    )
}
export default Mealitem;