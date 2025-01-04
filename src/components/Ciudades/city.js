import "../Header/header.css"
import "../Sidebar/sidebar.css"
import "./city.css"
// import WeatherApi from '../Weather/weather.js'
import ImagenCiudad from './componentesCiudades/componente1/imagenCiudad.js'
import DescripcionCiudad from "./componentesCiudades/componente2/descripcionCiudad.js";
import ExcursionesCiudad from "./componentesCiudades/componente3/excursionesCiudad.js";
import Food from "./componentesCiudades/componente4/food.js";
import Map from "../Maps/maps.js";
import Breadcrumbs from "../Breadcrumbs/breadcrumbs.js";
//import { MdMuseum } from "react-icons/md";


export default function City(){
    return(
        <div>
            <ImagenCiudad/>
            <Breadcrumbs/>
            <DescripcionCiudad/>
            <ExcursionesCiudad/>
            <Food/>
            {/* <WeatherApi/> */}
            <Map/>
        </div>
        
    )
}