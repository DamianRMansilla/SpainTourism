import "./imperdibles.css"

import { Link } from "react-router-dom"

export default function Imperdibles(){
    var imperdibles = [{place: "Mercado de San Miguel - Madrid", class: "sanMiguel-imp", route: 'mercadosanmiguel', id:'imperdibles-1'}, 
                       {place: "Alhambra - Granada", class: "alhambra-imp", route: 'alhambra', id:'imperdibles-2'}, 
                       {place: "Toledo", class: "toledo-imp", route: 'toledo', id:'imperdibles-3'}, 
                       {place: "Ronda", class: "ronda-imp", route: 'ronda', id:'imperdibles-4'}, 
                       {place: "Museo del Prado - Madrid", class: "prado-imp", route: 'museodelprado', id:'imperdibles-5'}, 
                       {place: "Mercado la Boqueria - Barcelona", class: "boqueria-imp", route: 'mercadolaboqueria', id:'imperdibles-6'},
                       {place: "Camino de Santiago", class: "santiago-imp", route: 'caminodesantiago', id:'imperdibles-7'}, 
                       {place: "Bahia de la Concha", class: "bahia-imp", route: 'bachiadelaconcha', id:'imperdibles-8'}]

    return(
        <div className="imperdiblesGlobal">
            <h1 className="imperdiblesTitulo">Imperdibles</h1>
            <p className="imposible">Imposible irse sin vistarlos</p>
            <div className="imperdiblesEspaña">
                {imperdibles.map(
                    imperdible =>{
                        return(
                            <Link to={`/Imperdibles/${imperdible.route}`} key={imperdible.id}>
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