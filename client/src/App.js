import { HashRouter as Router } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import Background from './components/Background';
import Routes from './routes';
import './App.css';

function App() {
	return (
		<div>
			<LazyLoad>
				<Background/>
				<Router basename="/">
					<Routes/>
				</Router>
			</LazyLoad>
		</div>
	);
}

export default App;
