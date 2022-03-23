// React-Redux-Toolkit-UI-Slice-Manipulated-File

// React-Redux-Toolkit
// 
import { useDispatch, useSelector } from 'react-redux';

// React-Redux-Toolkit
import { uiActions } from '../../store/ui-slice';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  // React-Redux-Toolkit
  const dispatch = useDispatch();

  // React-Redux-Toolkit
  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  // React-Redux-Toolkit
  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    // React-Redux-Toolkit
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
