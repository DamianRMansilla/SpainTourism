import "./imperdibles.css"

import { Link } from "react-router-dom"

export default function Imperdibles(){
    var imperdibles = [{place: "Mercado de San Miguel - Madrid", class: "sanMiguel-imp", route: 'mercadosanmiguel'}, 
                       {place: "Alhambra - Granada", class: "alhambra-imp", route: 'alhambra'}, 
                       {place: "Toledo", class: "toledo-imp", route: 'toledo'}, 
                       {place: "Ronda", class: "ronda-imp", route: 'ronda'}, 
                       {place: "Museo del Prado - Madrid", class: "prado-imp", route: 'museodelprado'}, 
                       {place: "Mercado la Boqueria - Barcelona", class: "boqueria-imp", route: 'mercadolaboqueria'},
                       {place: "Camino de Santiago", class: "santiago-imp", route: 'caminodesantiago'}, 
                       {place: "Bahia de la Concha", class: "bahia-imp", route: 'bachiadelaconcha'}]

    return(
        <div className="imperdiblesGlobal">
            <h1 className="imperdiblesTitulo">Imperdibles</h1>
            <p className="imposible">Imposible irse sin vistarlos</p>
            <div className="imperdiblesEspaña">
                {imperdibles.map(
                    imperdible =>{
                        return(
                            <Link to={`/Imperdibles/${imperdible.route}`}>
                                <div className="imperdibles">
                                    <div className={`divImgImperdible ${imperdible.class}`}>
                                        <p className="longName">{imperdible.place}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                )}
            </div>
        </div>
    )
}