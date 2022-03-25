// React-Redux-Toolkit-UI-Slice-Manipulated-File

// React-Redux-Async-Code-Implementation
import { useEffect } from 'react';

// React-Redux-Async-Code-Implementation
import { uiActions } from './store/ui-slice';

// React-Redux-Toolkit
import { useSelector, useDispatch } from 'react-redux';

// React-Redux-Async-Code-Implementation
import Notifications from './components/UI/Notifications';

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

  // React-Redux-Async-Code-Implementation
  useEffect(() => {

    
    // const sendCartData = async () => {
    //   const res = await fetch('https://food-order-app-database-fa642-default-rtdb.firebaseio.com/cart.json', {
    //     method: 'PUT',
    //     body: JSON.stringify(cart),
    //   });

    //   dispatch(uiActions.showNotification({
    //     status: 'pending',
    //     title: 'Sending...',
    //     message: 'Sending cart data!'
    //   }));

    //   if (!res.ok) {
    //     throw new Error('Sending cart data failed.');
    //   }

      const resData = await res.json();
      console.log(resData);

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Data is successfully sent!'
      }));
    };

    // Prevents cart data to be overwritten to Firebase when
    // the app is restarted
    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(err => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Data is failed to sent!'
      }));
    });
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
