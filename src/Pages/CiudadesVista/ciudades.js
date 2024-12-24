import React from 'react';
import Body2 from "../../components/Body2/body2"
import { HashLink as Link } from "react-router-hash-link";
import { useContext } from 'react';
import './ciudades.css'
import { allContexts } from '../../components/Context/AllContext';
import Breadcrumbs from '../../components/Breadcrumbs/breadcrumbs';


export default function Ciudades(){
    
    const city = useContext(allContexts)

    return(
        <>
            <div className='citiesMainContainer'>
                <Breadcrumbs/>
                <h1 className='title'>Que ciudades te faltan recorrer?</h1>
                <div className='cardContainer'>
                    {city.map(
                        mainCity =>{
                            return(
                                <Link to={`/Ciudades/${mainCity.city}#imageCity`} playa={mainCity.playa} className='playa-item' key={mainCity.id}>
                                    <div className='cardImageText'>
                                        <div className={`imageCardHeight ${mainCity.city.split(' ').join('').toLowerCase() + '-city'} city-image-main`}></div>
                                        <p>{mainCity.city}</p>
                                    </div>
                                </Link>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}