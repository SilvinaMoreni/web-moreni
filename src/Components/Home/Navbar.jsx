
import './Encabezado.css'

function BarraNav() {
  return (
    <div className='barra'>

          <img className='logo' src="../img/logo-moreni.png" alt="logo"/>

            <ul>
              <li><a href="inicio"> INICIO</a></li>
              <li><a href="nosotros"> NOSOTROS</a></li>
              <li><a href="servicios">SERVICIOS</a></li>
              <li><a href="productos">PRODUCTOS</a></li>
              <li><a href="contacto">CONTACTO</a></li>
            </ul>
            
    </div>
  );
}

export default BarraNav;
