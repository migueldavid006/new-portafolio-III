import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faBars,faXmark,faCaretDown} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import img0 from './../../assets/img/black_jack_21.png'
import img1 from './../../assets/img/carrito.png'
import img2 from './../../assets/img/cerebro.png'
import img3 from './../../assets/img/clima.png'
import img4 from './../../assets/img/cotizador.png'
// import img5 from './../../assets/img/cripto.png'
// import img6 from './../../assets/img/express.png'

const Header = () => {
  return (
 
    <div>



      
      <nav id="menu" className="menu">
        <div className="contenedor contenedor-botones-menu">
          <button id="btn-menu-barras" className="btn-menu-barras"><FontAwesomeIcon  icon={faBars}/></button>
          <button id="btn-menu-cerrar" className="btn-menu--cerrar"> <FontAwesomeIcon  icon={faXmark} /></button>

        </div>

      <div id='qwe' className="contenedor contenedor-enlaces-nav">
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


      <div className="contenedor contenedor-grid">
          <div className="grid activo" id="grid">

              <div className="categorias">

                <button className='btn-regresar'>REGRESAR</button>
                  <h3 className='subtitulo'>categorias</h3>
                <a href="#" data-categoria="html-css">HTML CSS <span>icono</span></a>
                <a href="#" data-categoria="javascript">JAVASCRIPT <span>icono</span> </a>
                <a href="#" data-categoria="react">REACT <span>icono</span> </a>
                <a href="#" data-categoria="pyton">PYTHON <span>icono</span> </a>
                <a href="#" data-categoria="php">PHP <span>icono</span> </a>
                <a href="#" data-categoria="wordpress">WORDPRESS <span>icono</span> </a>
                <a href="#" data-categoria="prestashop">PRESTASHOP <span>icono</span> </a>
                <a href="#" data-categoria="next">HTML CSS <span>icono</span> </a>
              </div>

              <div className="contenedor-subcategorias">
                  <div className="subcategoria activo" data-categoria="html-css">
                    <div className="enlaces-subcategoria">
                      <button className="btn-regresar"><span> = REGRESAR</span></button>
                        <h3 className='subtitulo'>HTML CSS</h3>
                        <a href="#"> MENU CATEGORIAS Y SUBCATEGORIAS </a>
                        <a href="#"> INMOBILIARIA </a>
                        <a href="#"> TIENDA DE MUEBLES </a>
                        <a href="#"> AGENCIA DE VIAJES</a>
                        <a href="#"> AUDIFONOS</a>
                    </div>
                 
                 
                    <div className="poster">
                        <a href="#">  <img className='img0' src={img0} alt="" /> </a>

                    </div>


                        
                       <div className="galeria">

                            <a href="#">
                              <img className='img4' src={img4} alt="" />
                            </a>
                            <a href="#">
                              <img className='img1' src={img1} alt="" />
                            </a>
                            <a href="#">
                              <img className='img2' src={img2} alt="" />
                            </a>
                            <a href="#">
                              <img className='img3' src={img3} alt="" />
                            </a>

                    </div>
                  </div>
              </div>

          </div>
      </div>

      </nav>
   
      
    </div>
  )}

export default Header