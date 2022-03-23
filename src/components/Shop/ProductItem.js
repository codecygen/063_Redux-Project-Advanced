// React-Redux-Toolkit-Cart-Slice-Manipulated-File

// React-Redux-Toolkit
import { cartActions } from '../../store/cart-slice';
// React-Redux-Toolkit
import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  // React-Redux-Toolkit
  const dispatch = useDispatch();

  // Destructuring
  const { title, price, description, id } = props;

  // React-Redux-Toolkit
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          {/* React-Redux-Toolkit */}
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
