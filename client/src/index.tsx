import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import Footer from './components/Footer/Footer';
import { localStore, persisterStore } from './redux/store';
import './index.scss';
ReactDOM.render(
	<Provider store={localStore}>
		<PersistGate persistor={persisterStore}>
			<App key='1' /> , <Footer key='2' />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
