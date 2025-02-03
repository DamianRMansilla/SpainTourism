import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { useContext } from 'react';
import './playa.css'
import { allContexts } from '../Context/AllContext';

export default function Playa(){

    const city = useContext(allContexts);

    return(
        <>
            <div className='beach-main-container'>
                <h1>Playas Imperdibles</h1>
                <div className='beach-container'>
                    {city.map(
                        mainCity =>{
                            if(mainCity.playa === 'yes'){
                                return(
                                    <Link to={`/Ciudades/${mainCity.city}#imageCity`} playa={mainCity.playa} className='playa-item' key={mainCity.id}>
                                        <div className='beach-city-container'>
                                            <div className={`imgDiv ${mainCity.city.split(' ').join('').toLowerCase() + '-city'} city-image-main`}></div>
                                            <p>{mainCity.city}</p>
                                        </div>
                                    </Link>
                                )
                            }
                        }
                    )}
                </div>
            </div>
        </>
    )
}