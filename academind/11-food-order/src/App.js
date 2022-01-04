import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [show, setShow] = useState(false);
  const hideHandler = () => {
    console.log('hideHandler');
    setShow(false);
  }
  const showHandler = () => {
    console.log('showHandler');
    setShow(true);
  }

  return (
    <React.Fragment>
      <CartProvider>
        <Header onShowCart={showHandler} />
        <main>
          <Meals />
          {show && (
            <Cart hideHandler={hideHandler}/>
          )}
        </main>
      </CartProvider>
    </React.Fragment>
  );
}

export default App;
