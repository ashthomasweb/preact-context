import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import MapPage from '../routes/map'


const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<MapPage path='/map/' />
			</Router>
		</main>
	</div>
);

export default App;
