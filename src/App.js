import React,{Fragment} from "react";
import Cart from "./Component/Cart/Cart";
import Header from "./Component/Layout/Header";
import Meal from "./Component/Meals/meal";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main>
      <Meal></Meal>
      </main>
      
      <Cart></Cart>
  

    
    </Fragment>
    
  );
}

export default App;
