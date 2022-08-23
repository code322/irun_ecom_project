import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import SignUp from './pages/SignUp/SignUp';
import Product from './pages/Product/Product';
const App = () => {
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
					<Route path='/signup' element={<SignUp />} />
				</Routes>
			</>
		</BrowserRouter>
	);
};

export default App;
