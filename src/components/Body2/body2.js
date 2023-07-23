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

export default function MainCities(){
    var mainCities = [{city: "Madrid", id: 1, class: "madrid-city", route: 'mercadosanmiguel', img: Madrid, playa: 'no'}, 
                       {city: "Barcelona",  id: 2, class: "barcelona-city", route: 'alhambra', img: Barcelona, playa: 'no'}, 
                       {city: "San Sebastian",  id: 3, class: "sansebastian-city", route: 'toledo', img: SanSebastian, playa: 'no'}, 
                       {city: "Malaga",  id: 4, class: "malaga-city", route: 'ronda', img: Malaga, playa: 'no'}, 
                       {city: "Sevilla",  id: 5, class: "sevilla-city", route: 'museodelprado', img: Sevilla, playa: 'no'}, 
                       {city: "Valencia",  id: 6, class: "valencia-city", route: 'mercadolaboqueria', img: Valencia, playa: 'no'},
                       {city: "Santiago de Compostela",  id: 7, class: "santiago-city", route: 'caminodesantiago', img: SantiagoDeCompostela, playa: 'no'}, 
                       {city: "Mallorca",  id: 8, class: "mallorca-city", route: 'bachiadelaconcha', img: Mallorca, playa: 'no'}]
    

    return(
        <div className="masVisitadosGlobal">
            <h1 className="masVisitados">Destinos mas visitados</h1>
            <p className="subtitle1">No podes perderte estos destinos</p>
            <div className="destinosGlobal">
                {mainCities.map(
                    mainCity =>{
                        return(
                            <Link key={mainCities.id} to={`/Ciudades/${mainCity.city}#imageCity`}>
                                <div className="destinos">
                                    <div className={`imgDiv ${mainCity.class} city-image-main`}>
                                        {/* <img className="imgDestinos" src={mainCity.img} alt={`${mainCity.city}`}/> */}
                                    </div>
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
