import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import MapPage from '../routes/map'
import Home from '../routes/home'

const App = () => (
  <div id='app'>
    <Header />
    <main>
      <Router>
        <Home path='/' />
      </Router>
      <Router>
        <MapPage path='/map/' />
      </Router>
    </main>
  </div>
)

export default App;
