import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../Store/CartContext';
import { useContext } from 'react';
import CartItem from './CartItem';
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
   const hasItems = cartCtx.items.length;
   const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
   const cartItemRemoveHandler = (id) =>{
       cartCtx.removeItem(id);

   };
   const cartItemAddHandler = item => {
    cartCtx.addItem(item);
   }
   const cartItems =(
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>(
        <CartItem onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)} key={item.id} name = {item.name} amount={item.amount} price={item.price}></CartItem>
    ))}
    </ul>
    );
    return(
        <Modal onClose={props.onClose}>
            <div>{cartItems}</div>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
                {hasItems > 0 && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )

}

export default Cart;