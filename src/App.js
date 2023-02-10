import React,{useState,Fragment} from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/meal";


function App() {
  const [showcart, setShowcart]=useState(false);
  const showcarthandler=()=>{
    setShowcart(true);
  }
  const hidecart=()=>{
    setShowcart(false)
  }
  return (
    <Fragment>
     {  <Header onshow={showcarthandler}/>}
      <main>
      <Meal></Meal>
      </main>
      
      {showcart && <Cart onhide={hidecart}/>}
  

    
    </Fragment>
    
  );
}

export default App;
