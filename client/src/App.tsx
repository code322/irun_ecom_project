import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';

const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Nav />
				<Routes>
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
