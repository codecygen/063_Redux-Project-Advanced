// React-Redux-Toolkit-Cart-Slice-Manipulated-File

// React-Redux-Toolkit
import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  // React-Redux-Toolkit
  const cartItems = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <CartItem
            item={{
              key: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price
            }}
          />
        ))}

      </ul>
    </Card>
  );
};

export default Cart;
