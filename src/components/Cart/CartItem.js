// React-Redux-Toolkit-Cart-Slice-Manipulated-File

// React-Redux-Toolkit
import { useDispatch } from 'react-redux';

import classes from './CartItem.module.css';

// React-Redux-Toolkit
import { cartActions } from '../../store/cart-slice';

const CartItem = (props) => {
  // React-Redux-Toolkit
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;

  // React-Redux-Toolkit
  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  // React-Redux-Toolkit
  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price
    }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
