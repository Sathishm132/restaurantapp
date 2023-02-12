import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import Cartcontext from '../../store/Cartcontext';
const Cart=props=>{
    const cartcntx=useContext(Cartcontext)
    const totalAmount=`Rs${cartcntx.totalAmount.toFixed(2)}`;
   const haveitem=cartcntx.items.length>0
   const additemhandler=(item)=>{
    cartcntx.additem({...item,amount:1});
   }
   const removeitemhandler=id=>{
    cartcntx.removeitem(id)
   }
    const Cartitems=(<ul
    className={classes['cart-items']}>
        {cartcntx.items.map((item)=>(
            <CartItem 
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={additemhandler.bind(null,item)}
            onRemove={removeitemhandler.bind(null,item.id)}
            />
        ))}</ul>);
    return(
       <Modal>
        
        {Cartitems}
        
         
         <div className={classes.total}>
        
         <span>Total Amount</span>
            <span>{totalAmount}</span>
         </div>
            
            <div className={classes.actions}>
                <button className={classes['button--alt']}  onClick={props.onhide}>close</button>
                {haveitem&&<button className={classes.button}>Order</button>}
            </div>
       </Modal>
           
        
    )
}
export default Cart;