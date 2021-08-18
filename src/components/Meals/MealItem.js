import classes from './MealItem.module.css';
import Card from '../UI/Card';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../Store/CartContext';
const MealItem = (props) => {
    const cart_Ctx = useContext(CartContext)
    const price=`$ ${props.price.toFixed(2)}`
    const addToCartHandler = amount => {
        cart_Ctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
        })
    }
    //console.log(props.items.name);
    return <Card>
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h5 className={classes.price}>{price}</h5>
        </div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
    </Card>

}

export default MealItem;