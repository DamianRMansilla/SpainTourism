import { useParams } from "react-router-dom";
import {React} from 'react';
import "./maps.css"

export default function Map(){
    var {city} = useParams();
    var cities = [{city: "Madrid", punto: "Puerta+del+Sol", id:1}, 
                  {city: "Barcelona", punto: "Mercado+de+La+Boqueria", id:2}]

    return(
        <>
            {cities.map( 
                cityMap =>{
                    if(cityMap.city === city){
                        return(
                            <div key={cityMap.id} className="mapContainer">
                                <iframe width="74%" title="map" height="400px" style={{border:0, margin: "auto"}} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"
                                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_PASS}&q=${city}&zoom=15`}>
                                </iframe>
                            </div>
                        )
                    }
                })
            }
        </>
    )

}


