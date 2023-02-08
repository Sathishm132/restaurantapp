
 import React,{Fragment} from "react"
 import mealsimage from "../../assets/meal.webp"
 import clases from './Header.module.css'
import HeaderCart from "./HeaderCartButton"
 const Header=props=>{
    return <Fragment>
        <header className={clases.header}>
          <h1>meal</h1>
          <HeaderCart></HeaderCart>
        </header>
        <div className={clases["main-image"]}>
            <img src={mealsimage} alt="imagde"/>
        </div>

        
    </Fragment>
    
}
export default Header