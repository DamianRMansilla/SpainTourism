import './comunidad.css'
import { useState, useContext} from 'react';
import { useParams } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { mapCitiesContext } from '../../components/Context/AllContext';
import { listCommunitiesContext } from '../../components/Context/AllContext';
import Breadcrumbs from '../../components/Breadcrumbs/breadcrumbs';

export default function Comunidades(){
    const citiesByCommunity = useContext(mapCitiesContext);
    const listCommunities = useContext(listCommunitiesContext);
    var {comunidad} = useParams();
    comunidad = comunidad.toLowerCase();
    var fullCommunity = '';
    var comDescription = '';
    var comTitle = '';
    
    for(let i = 0; i < citiesByCommunity.length; i++){
        if(comunidad === citiesByCommunity[i].comunidad.replaceAll(' ','').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
            fullCommunity = citiesByCommunity[i].comunidad;
        }
    }

    for(let i = 0; i < listCommunities.length; i++){
        if(comunidad === listCommunities[i].name.replaceAll(' ','').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")){
            comDescription = listCommunities[i].desc;
            comTitle = listCommunities[i].title;
        }
    }

    return(
        <>
            <div>
                <div className={`cityImage`} style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('../../../img/Communities/${comunidad}.jpg')`,backgroundPosition:'center'}} id='imageCity'>
                    <p className="lemaMadrid">{fullCommunity}</p>
                </div>
                <Breadcrumbs/>
                <section className='community-body'>
                    <div className='community-desc-container'>
                        <h2 className='city-title'>{comTitle}</h2>
                        <p className='descripcion-comunidad'>{comDescription}</p>
                    </div>
                    <div className='cities-container'>
                        <h1 className='title'>¿Dónde quieres ir?</h1>
                        <p className='subtitle1'>Visita nuestras ciudades mas icónicas</p>
                        <section className='cities-list'>
                            {citiesByCommunity.map(
                                cities =>{
                                    var community = cities.comunidad.replaceAll(' ','').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                                    if(community === comunidad){
                                        return(
                                            <Link className='city-link' to={`/Ciudades/${cities.city.replaceAll(' ','').normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} key={cities.id}>
                                                <div className='city-big-container'>
                                                    <img src={`../../../../img/Communities/Square-cities/${cities.city.replaceAll(' ','').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-square.jpg`} className='square-image'></img>
                                                    <div className='community-city-text-container'>
                                                        <h3 className='community-city-title'>{cities.city}</h3>
                                                        <p className='community-city-desc'>{cities.desc}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                            )}
                        </section>
                    </div>
                </section>
            </div>
        </>
    )
}