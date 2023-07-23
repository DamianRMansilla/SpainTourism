import { useParams } from "react-router-dom";
import {React} from 'react';
import "./maps.css"

export default function Map(){
    var {city} = useParams();
    console.log(city)
    // var {API} = 'AIzaSyDWRFCyrr081dikgwDkfm-SKREndhzM0sc'
    var cities = [{city: "Madrid", punto: "Puerta+del+Sol"}, 
                  {city: "Barcelona", punto: "Mercado+de+La+Boqueria"}]

    return(
        <>
            {cities.map( 
                cityMap =>{
                    if(cityMap.city === city){
                        return(
                            <div className="mapContainer">
                                <iframe width="90%" height="400px" style={{border:0, margin: "auto"}} loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
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


//${cityMap.punto},