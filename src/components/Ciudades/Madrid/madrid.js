import "../../Header/header.css"
import "../../Sidebar/sidebar.css"
import "./madrid.css"
import WeatherApi from '../../Weather/weather.js';
import ImagenCiudad from "./componentesCiudades/componente1/imagenCiudad";
import DescripcionCiudad from "./componentesCiudades/componente2/descripcionCiudad";
import ExcursionesCiudad from "./componentesCiudades/componente3/excursionesCiudad";
import Food from "./componentesCiudades/componente4/food";
import Map from "../../Maps/maps";
//import { MdMuseum } from "react-icons/md";


export default function Madrid(){
    return(
        <div>
            <ImagenCiudad/>
            <DescripcionCiudad/>
            <ExcursionesCiudad/>
            <Food/>
            <WeatherApi/>
            <Map/>
        </div>
        
    )
}