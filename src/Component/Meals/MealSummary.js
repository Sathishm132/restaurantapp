import { Fragment } from "react"
import classes from "./Meal.module.css"

const MealSummary=props=>{
    return<Fragment>
        <div className={classes.Meal}>
            <h1> welcome To sharpener Reasaurt</h1>
            <p>“Food for us comes from our relatives, 
                whether they have wings or fins or roots. That is how we consider food. 
                Food has a culture. 
                It has a history. It has a story. It has relationships.”</p>
        </div>
    </Fragment>
}
export default MealSummary