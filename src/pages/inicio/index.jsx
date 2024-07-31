
import './index.scss';
import { Link } from 'react-router-dom';


export default function Inicio() {
  return (
    <div className="main-panel">
        <header>
          <img className='main-logo' src="/assets/images/logo.png" />
          <h1 className='titulo'>React FreiS</h1>
              <Link className='inicio-link' to ='/'>Inicio</Link>
              <Link className='sobre-link' to ='/sobre'>Sobre</Link>
        </header>
    </div>
  );
}
