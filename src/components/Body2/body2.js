import Madrid1 from "../../img/Cities/madrid1.jpg"
import Barcelona from "../../img/Cities/barcelona.jpg"
import Malaga from "../../img/Cities/malaga.jpg"
import Sevilla from "../../img/Cities/sevilla.jpg"
import Valencia from "../../img/Cities/valencia.jpg"
import SanSebastian from "../../img/Cities/peineViento.jpg"
import SantiagoDeCompostela from "../../img/Cities/catedralSantiagoCompostela.jpg"
import { Link } from "react-router-dom"

export default function Body2(){
    return(
        <div className="masVisitadosGlobal">
            <h1 className="masVisitados">Destinos mas visitados</h1>
            <p className="subtitle1">No podes perderte estos destinos</p>   
            <div className="destinosGlobal">
                <Link to="/Ciudades/Madrid">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src={Madrid1} alt="Madrid"/>
                        </div>
                        <p>Madrid</p>
                    </div>
                </Link>
                <Link to="/Ciudades/Barcelona">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src={Barcelona} alt="Barcelona"/>
                        </div>
                        <p>Barcelona</p>
                    </div>
                </Link>
                <Link to="/Ciudades/SanSebastian">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src={SanSebastian} alt="" />
                        </div>
                        <p>San Sebastian</p>
                    </div>
                </Link>
                <Link to="/Ciudades/Malaga">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src={Malaga} alt=""/>
                        </div>
                        <p>Malaga</p>
                    </div>
                </Link>
                <Link to="/Ciudades/Sevilla">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src={Sevilla} alt=""/>
                        </div>
                        <p>Sevilla</p>
                    </div>
                </Link>
                <Link to="/Ciudades/Valencia">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src={Valencia} alt=""/>
                        </div>
                        <p>Valencia</p>
                    </div>
                </Link>
                <Link to="/Ciudades/SantiagoDeCompostela">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src={SantiagoDeCompostela} alt=""/>
                        </div>
                        <p>Santiago De Compostela</p>
                    </div>
                </Link>
                <Link to="/Ciudades/Mallorca">
                    <div className="destinos">
                        <div className="imgDiv">
                            <img className="imgDestinos" src="" alt=""/>
                        </div>
                        <p>Mallorca</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}