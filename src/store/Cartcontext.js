import React from "react";
const Cartcontext=React.createContext({
    item:[],
    totalamount:0,
    additem:(item)=>{},
    removeitem:(id)=>{},
})
export default Cartcontext;