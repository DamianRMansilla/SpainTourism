// import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar(){
    // const [moveIn, setMoveIn] = useState(false)

    // const hide = () => setMoveIn(false)
    // const show = () => setMoveIn(true)

    return(
        <>
            {/* <body> */}
                {/*<div className={moveIn? "sidebar": "sidebarOut"}>*/}
                    <div className="sidebarRight">
                        <div className="subseccion">
                            <p className="seccion">Ciudades:</p>
                            <ul className="listadoCiudades">
                                <Link to="/Ciudades/Madrid"><li className="destinosLi">Madrid</li></Link>
                                <Link to="/Ciudades/Barcelona"><li className="destinosLi">Barcelona</li></Link>
                                <Link to="/Ciudades/Valencia"><li className="destinosLi">Valencia</li></Link>
                                <Link to="/Ciudades/Bilbao"><li className="destinosLi">Bilbao</li></Link>
                                <Link to="/Ciudades/Malaga"><li className="destinosLi">Córdoba</li></Link>
                                <Link to="/Ciudades/SanSebastian"><li className="destinosLi">Donostia - San Sebastian</li></Link>
                                <Link to="/Ciudades/Malaga"><li className="destinosLi">Granada</li></Link>
                                <Link to="/Ciudades/Malaga"><li className="destinosLi">Malaga</li></Link>
                                <Link to="/Ciudades/Malaga"><li className="destinosLi">Mallorca</li></Link>
                                <Link to="/Ciudades/Salamanca"><li className="destinosLi">Salamanca</li></Link>
                                <Link to="/Ciudades/SantiagoDeCompostela"><li className="destinosLi">Santiago De Compostela</li></Link>
                                <Link to="/Ciudades/Sevilla"><li className="destinosLi">Sevilla</li></Link>
                                <Link to="/Ciudades/Tenerife"><li className="destinosLi">Tenerife</li></Link>
                                <Link to="/Ciudades/Zaragoza"><li className="destinosLi">Zaragoza</li></Link>
                            </ul>
                        </div>
                        <div className="subseccion">
                            <p className="seccion">Regiones Turísticas:</p>
                            <ul>
                                <li className="destinosLi">Andalucía</li>
                                <li className="destinosLi">Asturias</li>
                                <li className="destinosLi">Cataluña</li>
                                <li className="destinosLi">Costa Brava</li>
                                <li className="destinosLi">Costa del Sol</li>
                                <li className="destinosLi">Galicia</li>
                                <li className="destinosLi">Islas Baleares</li>
                                <li className="destinosLi">Islas Canarias</li>
                                <li className="destinosLi">La Rioja</li>
                                <li className="destinosLi">Madrid</li>
                                <li className="destinosLi">Pais Vasco</li>
                                <li className="destinosLi">Valencia</li>
                            </ul>
                        </div>
                        <div className="subseccion">
                        <Link to="/Excursiones"><p className="seccion">Sobre España</p></Link>
                            <Link to="/Excursiones"><p className="seccion">¿Que hacer?</p></Link>
                            <Link to="/Comida"><p className="seccion">¿Que comer?</p></Link>
                            <Link to="/Alojamientos"><p className="seccion">¿Donde alojarme?</p></Link>
                            <Link to="/Visitas"><p className="seccion">¿Que visitar?</p></Link>
                            <Link to="/Visitas"><p className="seccion">¿Como llego?</p></Link>
                            <Link to="/Visitas"><p className="seccion">Patrimonio de la Unesco</p></Link>
                            <Link to="/Visitas"><p className="seccion">Eventos culturales</p></Link>
                            <Link to="/Visitas"><p className="seccion">Eventos deportivos</p></Link>
                        </div>    
                    </div>
                {/*</div>*/}
            {/* </body>     */}
        </>
    )
}