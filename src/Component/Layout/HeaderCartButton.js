import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCart.module.css"
import Cartcontext from "../../store/Cartcontext";

const HeaderCart=props=>{
    const cartctx=useContext(Cartcontext)
   
    const numberofcartitems=cartctx.items.reduce((currNumber,items)=>{
        return currNumber+items.amount;
    },0);
   console.log(numberofcartitems)
    return<button className={classes.button} onClick={props.onclick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span> your cart</span>
        <span className={classes.badge}>{numberofcartitems}</span>
    </button>
}
export default HeaderCart;