import { useContext } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { mapCitiesContext } from '../../Context/AllContext';

export default function CityComponent(props){
    const citiesOnMap = useContext(mapCitiesContext);
    
    return(
        <>
            {citiesOnMap.map(
                cities =>{
                    var cityClassname = cities.city.replaceAll(' ','-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                    var cityAllTogether = cities.city.replaceAll(' ','').toLowerCase();
                    if(cities.inMap === 'yes' && cityAllTogether === props.leftMap){
                        return(
                            <div className={`map-side-city-element ${cityClassname}-side-element`}>
                                <div className={`city-box vertical-${cityClassname}-image`} style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.9)), url('../../../img/Cities/${cityClassname}.jpg')`}}>
                                    <div className='city-text-container'>
                                        <Link to={`/Ciudades/${cities.city}#imageCity`} className='city-name'>{cities.city}</Link>
                                        <Link to={`/Ciudades/${cities.city}/Alojamiento#AccommodationTitle`} className='city-link'>Hoteles y alojamientos</Link>
                                        <Link to={`/Ciudades/${cities.city}/Tours`} className='city-link'>Paseos, visitas y excursiones</Link>
                                        <Link to={``} className='city-link'>Restaurantes y gastronomia</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            )}
        </>
    )
}

