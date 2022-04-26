import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faBars,faXmark,faCaretDown} from '@fortawesome/free-solid-svg-icons'
import './style.css'

const Header = () => {
  return (
 
    <div>

      
      <nav id="menu" className="menu">
        <div className="contenedor contenedor-botones-menu">
          <button id="btn-menu-barras" className="btn-menu-barras"><FontAwesomeIcon  icon={faBars}/></button>
          <button id="btn-menu-cerrar" className="btn-menu--cerrar"> <FontAwesomeIcon  icon={faXmark} /></button>

        </div>

      <div className="contenedor contenedor-enlaces-nav">
          <div className="btn-departamentos" id="btn-departamentos">
            <p>project <span>Portfolio</span></p>
             <FontAwesomeIcon className='icono-down' icon={faCaretDown} />
          </div>


          <div className="enlaces">
            <a href="">About</a>
            <a href="">LinkedIn</a>
            <a href="">Repositories</a>
            <a href="">List Projects</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
   
      
    </div>
  )}

export default Header