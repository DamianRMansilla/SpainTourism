import { Link, useParams } from "react-router-dom";
import "./excursionesCiudad.css";
import Madrid from "../../../../img/madrid.jpeg";
import Bernabeu from "../../../../img/Bernabeu.jpg";
import MuseoDelPrado from "../../../../img/museoDelPrado.jpg";
import Toledo from "../../../../img/toledo_landscape.jpg";
import Avila from "../../../../img/avila.jpg";
import Palacio from "../../../../img/palacio_real.jpg";
import Barcelona from "../../../../img/barcelona.jpg"
import ReactDOM from 'react-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ExcursionesCiudad(){
    var {city} = useParams();

    var intro = [{city: "Madrid", h4: "A pie, en bicicleta, viajando menos de 1 hora fuera de la ciudad o como quieras, Madrid te ofrece muchas actividades a toda hora.", id:'intro-1'},
                 {city: "Barcelona", h4: "Playa, playa, playa", id:'intro-2'}]

    var tours = [{city: "Madrid", tour: "Tour Panoramico", image: Madrid, id:1, tourDesc:'El tour panoramico de Madrid te llevará a los principales atractivos de la ciudad, como la Puerta del Sol, el Palacio Real, el Museo del Prado y el Parque del Retiro, todo en un recorrido guiado.'}, 
                 {city: "Madrid", tour: "Museo del Prado", image: MuseoDelPrado, id:2, tourDesc:'La visita al Museo del Prado ofrece un recorrido por obras maestras de artistas como Velázquez, Goya y El Bosco, sumergiéndote en la historia del arte europeo.'}, 
                 {city: "Madrid", tour: "Palacio Real y Catedral", image: Palacio, id:3, tourDesc:'Este tour te llevará a explorar el majestuoso Palacio Real de Madrid, con sus salones y jardines, y la imponente Catedral de la Almudena, con su arquitectura única y vistas panorámicas.'}, 
                 {city: "Madrid", tour: "Santiago Bernabéu", image: Bernabeu, id:4, tourDesc:'El tour del Santiago Bernabéu te permitirá conocer el estadio del Real Madrid, visitando su museo, vestuarios, el campo, la sala de trofeos y disfrutando de vistas panorámicas del emblemático lugar.'}, 
                 {city: "Madrid", tour: "Tour a Ávila y Segovia", image: Avila, id:5, tourDesc:'Este tour te llevará a Ávila, famosa por su muralla medieval, y a Segovia, donde podrás admirar su acueducto romano, el Alcázar y la imponente catedral, todo en un día lleno de historia.'}, 
                 {city: "Madrid", tour: "Tour a Toledo", image: Toledo, id:6, tourDesc:'El tour a Toledo te llevará a descubrir la ciudad imperial, visitando su impresionante catedral, el Alcázar, el barrio judío y monumentos que reflejan su rica historia medieval.'},
                 {city: "Barcelona", tour: "Tour Panoramico", image: Barcelona, id:7}, ]

    return(
        <>
            <div className="excursion-container" id="excursiones">
                <h1 className="main-title">Qué visitar en {city}</h1>
                {intro.map(
                    main =>{
                        if(main.city === city){
                            return(
                                <p className="titleExcursions" key={main.id}>{main.h4}</p>
                            )
                        }
                    }
                )}
                <div className="excursions">
                    {tours.map(
                        tour =>{
                            if(tour.city === city){
                                return(
                                        <Link to="" key={tour.id} className="exc-link">
                                            <div className="excursion">
                                                <img src={tour.image} alt={tour.tour}/>
                                                <p className="excursion-name">{tour.tour}</p>
                                                <p className="excursion-description">{tour.tourDesc}</p>
                                                <span className="mas-info-button">Más Info</span>
                                            </div>
                                        </Link>
                                )
                            }
                        }
                    )}
                </div>
                <Link to={`/ciudades/${city}/tours`} className="excursions-see-all">Ver todos <FontAwesomeIcon icon={faArrowRight} className="exc-arrow"/></Link>
            </div>
        </>
    )
}