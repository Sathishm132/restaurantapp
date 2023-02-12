import MealForm from "./Mealform";
import classes from "./MealItem.module.css"
import { useContext } from "react";
import Cartcontext from "../../store/Cartcontext";

const Mealitem=props=>{
    const cartcntx=useContext(Cartcontext);
    const price=`Rs ${props.price.toFixed(2)}`
    const addtocarthandler=amount=>{
        cartcntx.additem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
            totalAmount:props.price

        })
    }
    return(
        

        <li className={classes.meal}>
            <div >
                <h3 >{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
           <MealForm onaddtocart={addtocarthandler}></MealForm>
            </div>
            
        </li>
        
    
    )
}
export default Mealitem;