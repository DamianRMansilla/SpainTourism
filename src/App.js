import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {React, useEffect} from 'react';
import Accommodation, { AllContexts, Tours } from './components/Context/AllContext';
import "./components/Header/header";
import "./components/Sidebar/sidebar";
import "./components/Newsletter/newsletter";
import Home from "./Pages/Home/home";
import Ciudades from './Pages/CiudadesVista/ciudades';
import Error404 from './Pages/Error404/error404';
import Madrid from "./components/Ciudades/Madrid/madrid"
import Header from './components/Header/header';
import Alojamientos from './Pages/Alojamientos/GlobalAlojamientos';
import Newsletter from './components/Newsletter/newsletter';
import Footer from './components/Footer/footer';
import MuseoDelPrado from "./components/Imperdibles/MuseoDelPrado/museoDelPrado";
import Boqueria from "./components/Imperdibles/Boqueria/boqueria";
import CaminoDeSantiago from "./components/Imperdibles/CaminoDeSantiago/caminoDeSantiago";
import Invierno from "./components/TodoElAño/Invierno/invierno";
import Otoño from "./components/TodoElAño/Otoño/otoño";
import Verano from "./components/TodoElAño/Verano/verano";
import Primavera from "./components/TodoElAño/Primavera/primavera";
import Playa from './components/Playa/playa';
import CityAccommodation from './components/CiudadesInfo/Alojamiento/ciudadAlojamientos';
import CityTours from './components/CiudadesInfo/Excursiones/ciudadExcursiones';

// export const cityContext = React.createContext();
    
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
      
function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <AllContexts>
          <Accommodation>
            <Tours>
              <Header/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/Ciudades" element={<Ciudades/>}/>
                    <Route exact path="/Playa" element={<Playa/>}/>
                    <Route exact path="/Alojamientos" element={<Alojamientos/>}/>
                    <Route exact path="/Ciudades/:city" element={<Madrid/>}/>
                    <Route exact path="/Ciudades/:city/Alojamiento" element={<CityAccommodation/>}/>
                    <Route exact path="/Ciudades/:city/Alojamiento/:accomodation" component={<CityAccommodation/>}/>
                    <Route exact path="/Ciudades/:city/Tours" element={<CityTours/>}/>
                    <Route exact path="/Imperdibles/MuseoDelPrado" element={<MuseoDelPrado/>}/>
                    <Route exact path="/Imperdibles/MercadoBoqueria" element={<Boqueria/>}/>
                    <Route exact path="/Imperdibles/CaminoDeSantiago" element={<CaminoDeSantiago/>}/>
                    <Route exact path="/TodoElAño/Invierno" element={<Invierno/>}/>
                    <Route exact path="/TodoElAño/Primavera" element={<Primavera/>}/>
                    <Route exact path="/TodoElAño/Verano" element={<Verano/>}/>
                    <Route exact path="/TodoElAño/Otoño" element={<Otoño/>}/>
                    <Route exact path="" element=""/>
                    <Route path="*" element={<Error404/>}/>
                </Routes>
              <Newsletter/>
              <Footer/>
            </Tours>
          </Accommodation>
        </AllContexts>
      </Router>
    </>
  );
}

export default App;
