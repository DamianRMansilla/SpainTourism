import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { tourContext } from "../../Context/AllContext";
import { HashLink as Link } from "react-router-hash-link";
import './ciudadExcursiones.css'

export default function CityTours(){

    var {city} = useParams()
    const tour = useContext(tourContext)

    return(
        <>
            <h1>Tours</h1>
            <div className='accommodation-container'>
                {tour.map(
                    tourCity =>{
                        
                        if(tourCity.city === `${city}`){
                            return(
                                <Link to={`Alojamiento/${tourCity.tour}`} key={tourCity.id}>
                                    <div className='accommodation-info-container'>
                                        <div className={`hotel-image  ${tourCity.tour.replaceAll(' ','-').toLowerCase()}`}></div>
                                        <div className="accommodation-info">
                                            <span className="accommodation-name">{tourCity.tour}</span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        } 
                    }
                )}
            </div>
        </>
    )
}