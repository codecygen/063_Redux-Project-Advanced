// React-Redux-Toolkit-UI-Slice-Manipulated-File

// React-Redux-Async-Code-Implementation
import { useEffect } from 'react';

// React-Redux-Toolkit
import { useSelector, useDispatch } from 'react-redux';

// React-Redux-Async-Code-Implementation
import Notifications from './components/UI/Notifications';

// React-Redux-Action-Creator-Thunk
// React-Redux-Async-Code-Implementation
import { sendCartData, fetchCartData } from './store/cart-actions';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

// React-Redux-Async-Code-Implementation
// This is outside the component function
// It will not be rendered if the component is re-rendered
// It will only render this when the app is restarted.
// This state will keep track of the case if app is restarted
// Based on that, it will prevent http request to be sent to
// Firebase in order to prevent application to overwrite the 
// cart value in the database
let isInitial = true;

function App() {
  // React-Redux-Async-Code-Implementation
  // This is for error handling of http request
  const dispatch = useDispatch();

  // React-Redux-Toolkit
  const show = useSelector(state => state.ui.cartIsVisible);

  // React-Redux-Async-Code-Implementation
  const cart = useSelector(state => state.cart);

  // React-Redux-Async-Code-Implementation
  const notification = useSelector(state => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      // React-Redux-Action-Creator-Thunk
      // React-Redux-Async-Code-Implementation
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {/* React-Redux-Async-Code-Implementation */}
      {notification &&
        <Notifications
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        { /* React-Redux-Toolkit */}
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
