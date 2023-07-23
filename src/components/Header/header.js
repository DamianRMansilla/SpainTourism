import React, { useState, useRef } from 'react';
import {BsSearch} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/sidebar";
import SearchBar from '../SearchBar/searchBar';
import { useEffect } from 'react';

export default function Header(){
    const ref = useRef(null);
    const [moveIn, setMoveIn] = useState(false)
    const hide = () => setMoveIn(false)
    const show = () => setMoveIn(true)

    const [search, setSearch] = useState(false)
    const searchTurn = () => setSearch(!search)

    useEffect(() => {
        if(ref.current.classList.contains('sidebarOut')){
            console.log('yes')
        } else {
            console.log('no')
        }

    },[]);


    return(
        <>
            <header className="header">
                <Link to="/" className="home"><img src="https://www.spain.info/export/sites/segtur/.content/images/logo_espana_menu.png" alt="Logo España Turismo"/></Link>
                <ul className="headerMenuUl">
                    <Link to="/Ciudades"><li className="headerMenu">Ciudades</li></Link>
                    <Link to="/Playa"><li className="headerMenu">Playa</li></Link>
                    <Link to="../TodoElAño/Verano"><li className="headerMenu">Verano</li></Link>
                    <Link to="../TodoElAño/Invierno"><li className="headerMenu">Invierno</li></Link>
                </ul>
                <h2 className="tituloPagina">Spain Tourism</h2>
                <div className="searchButton">
                    <div>
                        <button onClick={searchTurn}><BsSearch/></button>
                    </div>
                </div>
                <div className="burger">
                    <div className={moveIn ? "arrowLeft" : "arrowLeftNo"}>
                        <button onClick={hide}><ImCross/></button>
                    </div>
                    <div className={moveIn ? "arrowRightNo" : "arrowRight"}>
                        <button onClick={show}><GiHamburgerMenu/></button>
                    </div>
                </div>
                <div ref={ref} className={moveIn? "sidebarOut": "sidebar"}>
                    <Sidebar />
                </div>
                <div className={search? "searchBarOut": "searchBar"}>
                    <SearchBar/>
                </div>
            </header>
        </>
    )
}