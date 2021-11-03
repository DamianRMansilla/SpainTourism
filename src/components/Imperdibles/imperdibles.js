import "./imperdibles.css"
import Boqueria from "../../img/Imperdibles/boqueria.jpg"
import Alhambra from "../../img/Imperdibles/alhambra.jpg"
import Ronda from "../../img/Imperdibles/ronda.jpg"
import CaminoDeSantiago from "../../img/Imperdibles/caminoSantiago.jpg"
import Toledo from "../../img/Imperdibles/toledo.jpg"
import { Link } from "react-router-dom"

export default function Imperdibles(){
    return(
        <div className="imperdiblesGlobal">
            <h1 className="imperdiblesTitulo">Imperdibles</h1>
            <p className="imposible">Imposible irse sin vistarlos</p>
            <div className="imperdiblesEspaña">
                <Link to="/Imperdibles/MercadoSanMiguel">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                            <img className="imgImperdibles" alt=""/>
                        </div>
                        <p>Mercado de San Miguel - Madrid</p>
                    </div>
                </Link>
                <Link to="/Imperdibles/Alhambra">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                            <img  className="imgImperdibles" src={Alhambra} alt=""/>
                        </div>
                        <p>Alhambra - Granada</p>
                    </div>
                </Link>
                <Link to="/Imperdibles/Toledo">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                            <img className="imgImperdibles" src={Toledo} alt=""/>
                        </div>                    
                        <p>Toledo</p>
                    </div>
                </Link>
                <Link to="/Imperdibles/Ronda">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                            <img className="imgImperdibles" src={Ronda} alt=""/>
                        </div>                   
                        <p>Ronda</p>
                    </div>
                </Link>
                <Link to="/Imperdibles/MuseoDelPrado">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                            <img className="imgImperdibles" alt=""/>
                        </div>
                        <p>Museo del Prado - Madrid</p>
                    </div>
                </Link>
                <Link to="/Imperdibles/MercadoBoqueria">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                           <img className="imgImperdibles" src={Boqueria} alt=""/>
                        </div>
                        <p>Mercado la Boqueria - Barcelona</p>
                    </div>
                </Link>
                <Link to="/Imperdibles/CaminoDeSantiago">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                            <img className="imgImperdibles" src={CaminoDeSantiago} alt=""/>
                        </div>
                        <p>Camino de Santiago</p>
                    </div>
                </Link>
                <Link to="/Imperdibles/MercadoSanMiguel">
                    <div className="imperdibles">
                        <div className="divImgImperdible">
                            <img className="imgImperdibles" alt=""/>
                        </div>
                        <p>Bahia de la Concha</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}