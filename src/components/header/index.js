import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
  <header class={style.header}>
    <a href='/map/' class={style.logo}>
      <h1>OpenLayers Study</h1>
    </a>
    <nav>
      <Link activeClassName={style.active} href='/map/'>
        Coordinate Finder
      </Link>
    </nav>
  </header>
)

export default Header;
