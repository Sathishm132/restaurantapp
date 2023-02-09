import Input from '../UI/Input'
import classes from './Mealform.module.css'
const MealForm=props=>{
    return(
        <form className={classes.form}>
            <Input lable="amount" input={{
                type:"number",
                id:"amount",
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'


            }}></Input>
    
        <button>+ Add</button>
        
        </form>
       
    )
}
export default MealForm