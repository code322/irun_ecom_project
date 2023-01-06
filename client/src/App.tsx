import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';

import Register from './pages/Register/Register';
import './App.scss';
import Checkout from './pages/Checkout/Checkout';
import PrivateRoutes from './utils/PrivateRoutes';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/checkout' element={<Checkout />} />
        </Route>

        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
