import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React, {useState} from 'react';
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
import CityAccomodation from './components/CiudadesInfo/Alojamiento/ciudadAlojamientos';
import CityTours from './components/CiudadesInfo/Excursiones/ciudadExcursiones';



export const cityContext = React.createContext();


function App() {

  return (
    <>
      <Router>
        <AllContexts>
          <Accommodation>
            <Tours>
              <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/Ciudades" component={Ciudades}/>
                    <Route exact path="/Playa" component={Playa}/>
                    <Route exact path="/Alojamientos" component={Alojamientos}/>
                    <Route exact path="/Ciudades/:city" component={Madrid}/>
                    <Route exact path="/Ciudades/:city/Alojamiento" component={CityAccomodation}/>
                    <Route exact path="/Ciudades/:city/Alojamiento/:accomodation" component={CityAccomodation}/>
                    <Route exact path="/Ciudades/:city/Tours" component={CityTours}/>
                    <Route exact path="/Imperdibles/MuseoDelPrado" component={MuseoDelPrado}/>
                    <Route exact path="/Imperdibles/MercadoBoqueria" component={Boqueria}/>
                    <Route exact path="/Imperdibles/CaminoDeSantiago" component={CaminoDeSantiago}/>
                    <Route exact path="/TodoElAño/Invierno" component={Invierno}/>
                    <Route exact path="/TodoElAño/Primavera" component={Primavera}/>
                    <Route exact path="/TodoElAño/Verano" component={Verano}/>
                    <Route exact path="/TodoElAño/Otoño" component={Otoño}/>
                    <Route exact path="" component=""/>
                    <Route path="*" component={Error404}/>
                </Switch>
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
