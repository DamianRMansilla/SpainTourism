import Madrid from "../../img/Cities/madrid1.jpg"
import Barcelona from "../../img/Cities/barcelona.jpg"
import Malaga from "../../img/Cities/malaga.jpg"
import Sevilla from "../../img/Cities/sevilla.jpg"
import Valencia from "../../img/Cities/valencia.jpg"
import SanSebastian from "../../img/Cities/peineViento.jpg"
import SantiagoDeCompostela from "../../img/Cities/catedralSantiagoCompostela.jpg";
import Mallorca from "../../img/Cities/mallorca.jpg";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function MainCities(props){
    var mainCities = [{city: "Madrid", id: 1, class: "madrid-city", route: 'mercadosanmiguel', img: Madrid, playa: 'no', id: 'mas-visitados-1'}, 
                       {city: "Barcelona",  id: 2, class: "barcelona-city", route: 'alhambra', img: Barcelona, playa: 'no', id: 'mas-visitados-2'}, 
                       {city: "Malaga",  id: 4, class: "malaga-city", route: 'ronda', img: Malaga, playa: 'no', id: 'mas-visitados-3'}, 
                       {city: "Mallorca",  id: 8, class: "mallorca-city", route: 'bachiadelaconcha', img: Mallorca, playa: 'no', id: 'mas-visitados-4'},
                       {city: "San Sebastián",  id: 3, class: "sansebastian-city", route: 'toledo', img: SanSebastian, playa: 'no', id: 'mas-visitados-5'}, 
                       {city: "Santiago de Compostela",  id: 7, class: "santiagodecompostela-city", route: 'caminodesantiago', img: SantiagoDeCompostela, playa: 'no', id: 'mas-visitados-6'}, 
                       {city: "Sevilla",  id: 5, class: "sevilla-city", route: 'museodelprado', img: Sevilla, playa: 'no', id: 'mas-visitados-7'}, 
                       {city: "Valencia",  id: 6, class: "valencia-city", route: 'mercadolaboqueria', img: Valencia, playa: 'no', id: 'mas-visitados-8'},
                    ]
    

    return(
        <div className="masVisitadosGlobal">
            <h1 className="title">Nuestros destinos mas visitados</h1>
            <p className="subtitle1">Con o sin playa, en verano o en invierno, no puedes irte de España sin conocer estas ciudades.</p>
            <div className="cardContainer">
                {mainCities.map(
                    mainCity =>{
                        return(
                            <Link to={`/Ciudades/${mainCity.city}#imageCity`} key={mainCity.id}>
                                <div className="cardImageText">
                                    <div className={`imageCardHeight ${mainCity.class} city-image-main`}></div>
                                    <p>{mainCity.city}</p>
                                </div>
                            </Link>
                        )
                    }
                )}
            </div>
        </div>
    )
}
