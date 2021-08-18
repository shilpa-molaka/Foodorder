import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import { useRef,useState } from 'react';
const MealItemForm = (props) => {
    const [isValid,setIsValid] = useState(true);
    const amountInputRef = useRef();
    console.log('amount_' +props.id)
    const formSubmitHandler = (event) =>
    {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum=+enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNum<1 || enteredAmountNum > 5)
        {
            setIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNum);

    };
    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input label="Amount" 
            ref={amountInputRef}
            input={{
               id:'amount_' +props.id,
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }} />
            <button className={classes.button} type="submit">+Add</button>
            {!isValid && <p>Please enter a valid amount</p>}
        </form>
    )
};

export default MealItemForm;