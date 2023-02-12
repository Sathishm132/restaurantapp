import { useReducer } from "react"
import Cartcontext from "./Cartcontext"

const defaultcartstate={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==="ADD"){
       
        const updatedamount=state.totalAmount+action.item.price*action.item.amount;
        const exisistingitemindex=state.items.findIndex(
            (item)=>item.id===action.item.id);
            
            const existingitem=state.items[exisistingitemindex];
           
            let updateditems;
            if(existingitem){
               const updateditem={
                    ...existingitem,
                    amount:existingitem.amount+action.item.amount
                };
                    updateditems=[...state.items]
                    updateditems[exisistingitemindex]=updateditem;
            }else{
                updateditems=state.items.concat(action.item);
            }
           
           
        return{
            items:updateditems,
            totalAmount:updatedamount,
        }
    }
    if(action.type==="REMOVE"){
      const exisistingitemindex=state.items.findIndex(
        (item)=>item.id===action.id
      );
      const existingitem=state.items[exisistingitemindex];
      const updatedamount=state.totalAmount-existingitem.price;
      let updateditems;
      if(existingitem.amount===1){
        updateditems=state.items.filter(item=>item.id!==action.id);
      }else{
        const updateditem={...existingitem,amount:existingitem.amount-1};
        updateditems=[...state.items];
        updateditems[exisistingitemindex]=updateditem
      }
      return{
        items:updateditems,
        totalAmount:updatedamount,
      }

    }
    return defaultcartstate;
}
const Cartprovider=props=>{
    const[cartstate,dispatchcart]=useReducer(cartReducer,defaultcartstate)
    const additemhandler=item=>{
        dispatchcart({type:"ADD",item:item});
    }
    const removeitemhandler=id=>{
        dispatchcart({type:"RREMOVE",id:id});
    }
    const cartcontext={
        items:cartstate.items,
        totalAmount:cartstate.totalAmount,
        additem: additemhandler ,
        removeitem: removeitemhandler,
    }
    return <Cartcontext.Provider value={cartcontext}>
        {props.children}
    </Cartcontext.Provider>
}
export default Cartprovider