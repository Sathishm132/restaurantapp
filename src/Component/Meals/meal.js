import { Fragment } from "react"
import AvailableMeal from "./AvailableMeal"
import MealSummary from "./MealSummary"

const Meal=props=>{
    return<Fragment>
        <MealSummary></MealSummary>
        <AvailableMeal></AvailableMeal>
    </Fragment>
}
export default Meal