import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import Servicios from './Servicios.jsx';
import IntroVideo from './IntroVideo.jsx';
import Nosotros from './Nosotros.jsx';  
import Certificaciones from './Certificaciones.jsx';
import Productos from './Productos.jsx';


function App() {
  return ( 
    <div className="App">

      
      <Navbar/>
      <IntroVideo/>
      <Nosotros/>
      <Servicios/>
      <Certificaciones/>
      <Productos/>
      <Footer/>
    </div>
    );
}

export default App;

