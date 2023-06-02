import { h } from 'preact'
import { useReducer } from 'preact/hooks'
import style from './style.css'
import Modal from '../../components/modal'
import { GlobalReducer, initialGlobalState } from '../../context/global/GlobalReducer'
import { GlobalContext } from '../../context/global/GlobalState'

const Home = () => {

  const [state, dispatch] = useReducer(GlobalReducer, initialGlobalState )

  return (
    <div class={style.home}>
      <a href='https://preactjs.com'>
        <img
          src='../../assets/icons/openlayers-logo.png'
          alt='OpenLayers Logo'
          height='360'
          width='360'
        />
      </a>
      <h1>Welcome to OpenLayers. </h1>
      <section>
        <p style={{ textAlign: 'center', fontSize: '30px', margin: '0 auto', left: 0, right: 0, position: 'relative' }}>
          This is an ongoing study project with various implementations of the OpenLayers
          library. Please use navigation at top to explore.
        </p>
      </section>
    <GlobalContext.Provider value={{ state, dispatch }} >

      <Modal />
    </GlobalContext.Provider>

    </div>
  )
}

export default Home
