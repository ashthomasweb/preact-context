import { h } from 'preact'
import style from './style.css'

const Home = () => {
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
    </div>
  )
}

export default Home
