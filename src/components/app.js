import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import MapPage from '../routes/map'
import Home from '../routes/home'
// import { GlobalContext, GlobalReducer, initialGlobalState } from '../context/global/GlobalReducer';
// import { useReducer } from 'preact/hooks';

const App = () => {
  // const [state, dispatch] = useReducer(GlobalReducer, initialGlobalState)

  return (
    // <GlobalContext.Provider value={{ state, dispatch }} >

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
    // </GlobalContext.Provider>
  )
}


export default App;
