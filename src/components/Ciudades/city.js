import "../Header/header.css"
import "../Sidebar/sidebar.css"
import ImagenCiudad from './componentesCiudades/CityImage/imagenCiudad.js'
import DescripcionCiudad from "./componentesCiudades/CityDescription/descripcionCiudad.js";
import ExcursionesCiudad from "./componentesCiudades/CityTours/excursionesCiudad.js";
import Food from "./componentesCiudades/CityFood/food.js";
import Map from "./componentesCiudades/CityMaps/maps.js";
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