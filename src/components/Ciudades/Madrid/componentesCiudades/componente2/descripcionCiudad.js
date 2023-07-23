import { Link, useParams } from "react-router-dom"
import "./descripcionCiudad.css"

export default function DescripcionCiudad(){
    var {city} = useParams()
    var titles = [{localCity: "Madrid", title: "Madrid, ciudad cosmopolita."},{localCity: "Barcelona", title: "Barcelona, como nunca antes."},{localCity: "Bilbao", title: 306186},{localCity: "San Sebastian", title: 2324048},{localCity: "Malaga", title: 306732}];
    
    for(let i = 0; i < titles.length; i++){
        if(city === titles[i].localCity){
            var mainTitle = titles[i].title
        }}
        
    return(
        <>
            <div className="cityMain">
                <div className="cityDescription">
                    <h2>{mainTitle}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="cityButtons">
                    <p className="desc-title">Información sobre <strong>{city}</strong></p>
                    <ul className="button-list">
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-bed"></i>Hoteles y alojamientos.</li>
                        </Link>
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-bus"></i>Paseos, visitas y excursiones.</li>
                        </Link>
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-utensils"></i>Restaurantes y gastronomía.</li>
                        </Link>
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-plane-arrival"></i>Como llegar.</li>
                        </Link>
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-suitcase"></i>Agencias de viaje.</li>
                        </Link>
                        <Link className="cityButton last-child" to="/">
                            <li><i class="fa-solid fa-calendar"></i>Calendario de festividades.</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
    {/* <i class="fas fa-plane"></i> */}
}