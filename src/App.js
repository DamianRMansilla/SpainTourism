import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import {React, useEffect} from 'react';
import Accommodation, { AllContexts, Tours, MapCities, ListaComunidades } from './components/Context/AllContext';
import "./components/Header/header";
import "./components/Sidebar/sidebar";
import "./components/Newsletter/newsletter";
import Home from "./Pages/Home/home";
import Ciudades from './Pages/CiudadesVista/ciudades';
import Error404 from './Pages/Error404/error404';
import City from "./components/Ciudades/city"
import Header from './components/Header/header';
import Alojamientos from './Pages/Alojamientos/GlobalAlojamientos';
import Newsletter from './components/Newsletter/newsletter';
import Footer from './components/Footer/footer';
import MuseoDelPrado from "./components/HomeComponents/Imperdibles/MuseoDelPrado/museoDelPrado";
import Boqueria from "./components/HomeComponents/Imperdibles/Boqueria/boqueria";
import CaminoDeSantiago from "./components/HomeComponents/Imperdibles/CaminoDeSantiago/caminoDeSantiago";
import Invierno from "./components/HomeComponents/TodoElAño/Invierno/invierno";
import Otoño from "./components/HomeComponents/TodoElAño/Otoño/otoño";
import Verano from "./components/HomeComponents/TodoElAño/Verano/verano";
import Primavera from "./components/HomeComponents/TodoElAño/Primavera/primavera";
import Playa from './components/Playa/playa';
import CityAccommodation from './components/CiudadesInfo/Alojamiento/ciudadAlojamientos';
import CityTours from './components/CiudadesInfo/Excursiones/ciudadExcursiones';
import Comunidades from './Pages/Comunidad/comunidad';
import Drag from './components/Drag-Drop/drag'

// export const cityContext = React.createContext();
    
// function ScrollToTop() {
//   const location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return null;
// }
      
function App() {

  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <AllContexts>
          <Accommodation>
            <Tours>
              <MapCities>
                <ListaComunidades>
                  <Header/>
                    <Routes>
                        <Route exact path="/" element={<Home/>}/>
                        <Route exact path="/Ciudades" element={<Ciudades/>}/>
                        <Route exact path="/Playa" element={<Playa/>}/>
                        <Route exact path="/Alojamientos" element={<Alojamientos/>}/>
                        <Route exact path="/:comunidad" element={<Comunidades/>}/>
                        <Route exact path="/Ciudades/:city" element={<City/>}/>
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
                        <Route exact path="/Drag" element={<Drag/>}/>
                        <Route exact path="" element=""/>
                        <Route path="*" element={<Error404/>}/>
                    </Routes>
                  <Newsletter/>
                  <Footer/>
                </ListaComunidades>
              </MapCities>  
            </Tours>
          </Accommodation>
        </AllContexts>
      </Router>
    </>
  );
}

export default App;
