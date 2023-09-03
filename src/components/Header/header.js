import React, { useState, useRef } from 'react';
import {BsSearch} from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import { Link } from 'react-router-dom';
import Sidebar from "../Sidebar/sidebar";
import SearchBar from '../SearchBar/searchBar';
import Logo from '../../img/logo_espana_menu.jpg'
import { useEffect } from 'react';

export default function Header(){
    const ref = useRef(null);
    const [moveIn, setMoveIn] = useState(false)
    const hide = () => setMoveIn(false)
    const show = () => setMoveIn(true)

    const [search, setSearch] = useState(false)
    const searchTurn = () => setSearch(!search)

    // useEffect(() => {
    //     if(ref.current.classList.contains('sidebarOut')){
    //         console.log('yes')
    //     } else {
    //         console.log('no')
    //     }

    // },[]);


    return(
        <>
            <header className="header">
                <Link to="/" className="home"><img src={Logo} alt="Logo España Turismo"/></Link>
                <ul className="headerMenuList">
                    <Link className='headerLink' to="/Ciudades"><li className="headerMenu">Ciudades</li></Link>
                    <Link className='headerLink' to="/Playa"><li className="headerMenu">Playa</li></Link>
                    <Link className='headerLink' to="../TodoElAño/Verano"><li className="headerMenu">Verano</li></Link>
                    <Link className='headerLink' to="../TodoElAño/Invierno"><li className="headerMenu">Invierno</li></Link>
                </ul>
                <section className='headerButtonContainer'>
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