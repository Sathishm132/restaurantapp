import Input from '../UI/Input'
import classes from './Mealform.module.css'
import {  useRef,useState } from 'react'
const MealForm=props=>{
    const [amountvalid,setAmountvalid]=useState(true)
    const inputref=useRef();
    const submithandler=event=>{
        event.preventDefault()
        
        const enteredamount=inputref.current.value;
        const enteredamountnumber=+enteredamount;
       
       
        if(enteredamount.trim().length===0||
        enteredamountnumber<1||
        enteredamountnumber>5){
            setAmountvalid(false)
            return
        }
        console.log(enteredamountnumber)
        props.onaddtocart(enteredamountnumber)
    }
    return(
        <form className={classes.form} onSubmit={submithandler}>
            <Input ref={inputref} lable="amount" input={{
                type:"number",
                id:"amount",
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'


            }}></Input>
    
        <button>+ Add</button>
        {!amountvalid&&<p>enter valid amount</p>}
        
        </form>
       
    )
}
export default MealForm