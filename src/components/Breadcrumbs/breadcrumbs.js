import './breadcrumbs.css'
import { HashLink as Link } from "react-router-hash-link";
import ReactDOM from 'react-dom'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom';
import {useLocation} from "react-router-dom";


export default function Breadcrumbs(){
    var { city } = useParams();
    var currentCity = useLocation();
    currentCity = '/Ciudades/' + currentCity.pathname.split('/')[2];

    return(
        <>
            <div className='breadcrumbs-container'>
                <Link to={'/'} className='breadcrumbs-item breadcrumb-home'>
                    <span>Inicio</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-home-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={'/Ciudades'} className='breadcrumbs-item breadcrumb-cities'>
                    <span>Ciudades</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-cities-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={currentCity} className='breadcrumbs-item breadcrumb-city-name'>
                    <span>{city}</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-city-name-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={`${currentCity}/alojamiento`} className='breadcrumbs-item breadcrumb-accommodation'>
                    <span>Alojamiento</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-accommodation-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={`${currentCity}/tours`} className='breadcrumbs-item breadcrumb-tours'>
                    <span>Excursiones</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-tours-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={`${currentCity}/alojamiento`} className='breadcrumbs-item breadcrumb-restaurantes'>
                    <span>Restaurantes</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-restaurantes-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={`${currentCity}/alojamiento`} className='breadcrumbs-item breadcrumb-how-to-get-there'>
                    <span>Como llegar</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-how-to-get-there-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={`${currentCity}/alojamiento`} className='breadcrumbs-item breadcrumb-travel-agencies'>
                    <span>Agencias de viaje</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-travel-agencies-chevron breadcrumb-chevron'/>
                </Link>
                <Link to={`${currentCity}/alojamiento`} className='breadcrumbs-item breadcrumb-calendar'>
                    <span>Calendario</span>
                    <FontAwesomeIcon icon={faChevronRight} className='breadcrumb-calendar-chevron breadcrumb-chevron'/>
                </Link>
            </div>
        </>
    )
}