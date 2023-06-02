import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
  <header class={style.header}>
    <a href='/' class={style.logo}>
      <img
        src='../../assets/icons/openlayers-logo.png'
        style={{ height: '100%', margin: '0px 10px' }}
      />
      <h1>OpenLayers</h1>
    </a>
    <nav>
      <Link activeClassName={style.active} href='/'>
        Home
      </Link>
      <Link activeClassName={style.active} href='/map/'>
        Coordinate Finder
      </Link>
      <Link activeClassName={style.active} href='/wind-chart/'>
        Wind Direction
        </Link>
    </nav>
  </header>
)

export default Header;
