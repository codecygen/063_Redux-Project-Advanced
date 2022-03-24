// React-Redux-Toolkit-UI-Slice-Manipulated-File

// React-Redux-Async-Code-Implementation
import { useEffect } from 'react';

// React-Redux-Toolkit
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  // React-Redux-Toolkit
  const show = useSelector(state => state.ui.cartIsVisible);

  // React-Redux-Async-Code-Implementation
  const cart = useSelector(state => state.cart);

  // React-Redux-Async-Code-Implementation
  useEffect(() => {
    const sendCartData = async () => {
      const res = await fetch('https://food-order-app-database-fa642-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
    };

    const resData = await res.json();
  }, [cart]);

  return (
    <Layout>
      { /* React-Redux-Toolkit */ }
      {show && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
