import Nav from './components/Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<Nav />
			</div>
		</BrowserRouter>
	);
};

export default App;
