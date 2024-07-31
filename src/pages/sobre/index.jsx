import './index.scss'
import { Link } from 'react-router-dom';

export default function Sobre(){
    return(
        <div className="main-panel">
             <header>
          <img className='main-logo' src="/assets/images/logo.png" />
          <h1>React FreiS</h1>
              <Link to ='/'>Inicio</Link>
              <Link to ='/sobre'>Sobre</Link>
        </header>


        </div>
    )
}