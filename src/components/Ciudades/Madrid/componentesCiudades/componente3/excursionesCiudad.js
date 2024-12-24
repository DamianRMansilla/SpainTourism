import { Link, useParams } from "react-router-dom";
import "./excursionesCiudad.css";
import Madrid from "../../../../../img/madrid.jpeg";
import Bernabeu from "../../../../../img/Bernabeu.jpg";
import MuseoDelPrado from "../../../../../img/museoDelPrado.jpg";
import Toledo from "../../../../../img/toledo_landscape.jpg";
import Avila from "../../../../../img/avila.jpg";
import Palacio from "../../../../../img/palacio_real.jpg";
import Barcelona from "../../../../../img/barcelona.jpg"

export default function ExcursionesCiudad(){
    var {city} = useParams()

    var intro = [{city: "Madrid", h4: "A pie, en bicicleta, viajando menos de 1 hora fuera de la ciudad o como quieras, Madrid te ofrece muchas actividades a toda hora.", id:'intro-1'},
                 {city: "Barcelona", h4: "Playa, playa, playa", id:'intro-2'}]

    var tours = [{city: "Madrid", tour: "Tour Panoramico", image: Madrid, id:1}, 
                 {city: "Madrid", tour: "Museo del Prado", image: MuseoDelPrado, id:2}, 
                 {city: "Madrid", tour: "Palacio Real y Catedral", image: Palacio, id:3}, 
                 {city: "Madrid", tour: "Santiago Bernabéu", image: Bernabeu, id:4}, 
                 {city: "Madrid", tour: "Tour a Ávila y Segovia", image: Avila, id:5}, 
                 {city: "Madrid", tour: "Tour a Toledo", image: Toledo, id:6},
                 {city: "Barcelona", tour: "Tour Panoramico", image: Barcelona, id:7}, ]

    return(
        <>
            <div className="excursion-container" id="excursiones">
                <h1 className="titleExcursions main-title">Que visitar en {city}</h1>
                {intro.map(
                    main =>{
                        if(main.city === city){
                            return(
                                <h4 className="titleExcursions" key={main.id}>{main.h4}</h4>
                            )
                        }
                    }
                )}
                <div className="excursions">
                    {tours.map(
                        tour =>{
                            if(tour.city === city){
                                return(
                                        <Link to="" key={tour.id}><div className="excursion">
                                            <img src={tour.image} alt={tour.tour}/>
                                            <p className="excursion-name">{tour.tour}</p>
                                        </div></Link>
                                )
                            }
                        }
                    )}
                </div>
            </div>
        </>
    )
}