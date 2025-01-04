import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/sidebar";
import SearchBar from '../SearchBar/searchBar';
import Logo from '../../img/logo_espana_menu.jpg'
import ReactDOM from 'react-dom'
import { faChevronDown, faChevronUp, faMagnifyingGlass, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useLocation} from "react-router-dom";


export default function Header(){
    const ref = useRef(null);
    const [moveIn, setMoveIn] = useState(false)
    const hide = () => setMoveIn(false)
    const show = () => setMoveIn(true)

    const [search, setSearch] = useState(false)
    const searchTurn = () => setSearch(!search)

    var location = useLocation();

    if(location.pathname === '/'){
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('home');
    } else if(location.pathname.split('/').filter(Boolean).pop() === 'ciudades'){
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('cities')
    }  else if(location.pathname.split('/').filter(Boolean).pop() === 'Alojamiento'){
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add('accommodation')
    } else{
        document.querySelector('body').className = '';
        document.querySelector('body').classList.add(location.pathname.split('/').filter(Boolean).pop())
    }


    return(
        <>
            <header className="header">
                <Link to="/" className="home"><img src={Logo} alt="Logo España Turismo"/></Link>
                <ul className="headerMenuList">
                    <span className='headerLink' to="/Ciudades">
                        <li className="headerMenu">Destinos
                            <FontAwesomeIcon icon={faChevronDown} className='chev-down' />
                            <FontAwesomeIcon icon={faChevronUp} className='chev-up'/>
                            <ul className='headerMenuListDisplay'>
                                <Link to="/Ciudades/Madrid"><li className="headerDestinos">Madrid</li></Link>
                                <Link to="/Ciudades/Barcelona"><li className="headerDestinos">Barcelona</li></Link>
                                <Link to="/Ciudades/Valencia"><li className="headerDestinos">Valencia</li></Link>
                                <Link to="/Ciudades/Alicante"><li className="headerDestinos">Alicante</li></Link>
                                <Link to="/Ciudades/Bilbao"><li className="headerDestinos">Bilbao</li></Link>
                                <Link to="/Ciudades/Caceres"><li className="headerDestinos">Cáceres</li></Link>
                                <Link to="/Ciudades/Cordoba"><li className="headerDestinos">Córdoba</li></Link>
                                <Link to="/Ciudades/SanSebastian"><li className="headerDestinos">Donostia - San Sebastián</li></Link>
                                <Link to="/Ciudades/Granada"><li className="headerDestinos">Granada</li></Link>
                                <Link to="/Ciudades/Huelva"><li className="headerDestinos">Huelva</li></Link>
                                <Link to="/Ciudades/Ibiza"><li className="headerDestinos">Ibiza</li></Link>
                                <Link to="/Ciudades/Malaga"><li className="headerDestinos">Málaga</li></Link>
                                <Link to="/Ciudades/Mallorca"><li className="headerDestinos">Mallorca</li></Link>
                                <Link to="/Ciudades/Marbella"><li className="headerDestinos">Marbella</li></Link>
                                <Link to="/Ciudades/Salamanca"><li className="headerDestinos">Salamanca</li></Link>
                                <Link to="/Ciudades/Santander"><li className="headerDestinos">Santander</li></Link>
                                <Link to="/Ciudades/SantiagoDeCompostela"><li className="headerDestinos">Santiago De Compostela</li></Link>
                                <Link to="/Ciudades/Sevilla"><li className="headerDestinos">Sevilla</li></Link>
                                <Link to="/Ciudades/Tenerife"><li className="headerDestinos">Tenerife</li></Link>
                                <Link to="/Ciudades/Zaragoza"><li className="headerDestinos">Zaragoza</li></Link>
                            </ul>
                        </li>
                    </span>
                    <Link className='headerLink' to="/"><li className="headerMenu">Que Hacer</li></Link>
                    <Link className='headerLink' to="/"><li className="headerMenu">Planifica Tu Viaje</li></Link>
                    <Link className='headerLink' to="/"><li className="headerMenu">Sobre España</li></Link>
                </ul>
                <section className='headerButtonContainer'>
                    <div className="searchButton">
                        <div>
                            <button onClick={searchTurn}><FontAwesomeIcon icon={faMagnifyingGlass} className='magnglass'/></button>
                        </div>
                    </div>
                    <div className="menuButton">
                        <div className={moveIn ? "arrowLeft" : "arrowLeftNo"}>
                            <button onClick={hide}><FontAwesomeIcon icon={faXmark} /></button>
                        </div>
                        <div className={moveIn ? "arrowRightNo" : "arrowRight"}>
                            <button onClick={show}><FontAwesomeIcon icon={faBars} /></button>
                        </div>
                    </div>
                </section>
                <div ref={ref} className={moveIn? "sidebarOut": "sidebar"}>
                    <Sidebar />
                </div>
                {/* <div className={search? "searchBarOut": "searchBar"}>
                    <SearchBar/>
                </div> */}
            </header>
        </>
    )
}