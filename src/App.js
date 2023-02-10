import React,{useState,} from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/meal";
import Cartprovider from "./store/cartprovider";


function App() {
  const [showcart, setShowcart]=useState(false);
  const showcarthandler=()=>{
    setShowcart(true);
  }
  const hidecart=()=>{
    setShowcart(false)
  }
  return (
    <Cartprovider>
     {  <Header onshow={showcarthandler}/>}
      <main>
      <Meal></Meal>
      </main>
      
      {showcart && <Cart onhide={hidecart}/>}
  

    
      </Cartprovider>
    
  );
}

export default App;
