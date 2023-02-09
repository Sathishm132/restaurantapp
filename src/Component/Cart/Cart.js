import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart=props=>{
    const Cartitems=<ul>
        {[{id:'c1',name:'sushi',amount:2,price:245,}].map(cartitems=>(<li>{cartitems.name}
        </li>))}</ul>
    return(
       <Modal>
         {Cartitems}
         <div className={classes.total}>
         <span>Total Amount</span>
            <span>30.67</span>
         </div>
            
            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>Order</button>
            </div>
       </Modal>
           
        
    )
}
export default Cart;