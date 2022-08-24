import Nav from './components/Nav/Nav';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import Product from './pages/Product/Product';
import { RootState } from './redux/rootReducer';
import { useSelector } from 'react-redux';
import Register from './pages/Register/Register';
import './App.scss';
import Checkout from './pages/Checkout/Checkout';
const App = () => {
	const isLoggedIn = useSelector(
		(state: RootState) => state.authReducer.isLoggedIn
	);
	return (
		<BrowserRouter>
			<>
				<Nav />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/product/:id' element={<Product />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='/login' element={<Login />} />
					<Route path='/checkout' element={<Checkout />} />

					<Route
						path='/register'
						element={isLoggedIn ? <Navigate to='/' /> : <Register />}
					/>
				</Routes>
			</>
		</BrowserRouter>
	);
};

export default App;
