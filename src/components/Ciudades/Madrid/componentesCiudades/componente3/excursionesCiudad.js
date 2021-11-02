import { Link } from "react-router-dom"
import "./excursionesCiudad.css"
import Madrid from "../../../../../img/madrid.jpeg"
import Bernabeu from "../../../../../img/Bernabeu.jpg"
import MuseoDelPrado from "../../../../../img/museoDelPrado.jpg"
import Toledo from "../../../../../img/toledo_landscape.jpg"
import Avila from "../../../../../img/avila.jpg"
import Palacio from "../../../../../img/palacio_real.jpg"

export default function ExcursionesCiudad(){
    return(
        <>
            <h1 className="titleExcursions">Excursiones</h1>
            <div className="excursions">
                <Link to=""><div className="excursion">
                    <img src={Madrid}/>
                    <p>Tour Panorámico</p>
                </div></Link>
                <Link to=""><div className="excursion">
                    <img src={MuseoDelPrado}/>
                    <p>Museo del Prado</p>
                </div></Link>
                <Link to=""><div className="excursion">
                    <img src={Palacio}/>
                    <p>Palacio Real y Catedral</p>
                </div></Link>
                <Link to=""><div className="excursion">
                    <img src={Bernabeu}/>
                    <p>Santiago Bernabéu</p>
                </div></Link>
                <Link to=""><div className="excursion">
                    <img src={Avila}/>
                    <p>Tour a Ávila y Segovia</p>
                </div></Link>
                <Link to=""><div className="excursion">
                    <img src={Toledo}/>
                    <p>Tour a Toledo</p>
                </div></Link>
            </div>
        </>
    )
}