import { Link } from 'react-router-dom';


export default function Sidebar(){
    return (
        <>
            <div className="sidebarRight">
                <div className="section">
                    <p className="sidebarMenuTitle">Ciudades:</p>
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
                <div className="section">
                    <p className="sidebarMenuTitle">Regiones Turísticas:</p>
                    <ul>
                        <Link to="/"><li className="destinosLi">Andalucía</li></Link>
                        <Link to="/"><li className="destinosLi">Asturias</li></Link>
                        <Link to="/"><li className="destinosLi">Cataluña</li></Link>
                        <Link to="/"><li className="destinosLi">Costa Brava</li></Link>
                        <Link to="/"><li className="destinosLi">Costa del Sol</li></Link>
                        <Link to="/"><li className="destinosLi">Galicia</li></Link>
                        <Link to="/"><li className="destinosLi">Islas Baleares</li></Link>
                        <Link to="/"><li className="destinosLi">Islas Canarias</li></Link>
                        <Link to="/"><li className="destinosLi">La Rioja</li></Link>
                        <Link to="/"><li className="destinosLi">Madrid</li></Link>
                        <Link to="/"><li className="destinosLi">Pais Vasco</li></Link>
                        <Link to="/"><li className="destinosLi">Valencia</li></Link>
                    </ul>
                </div>
                <div className="section">
                    <p className="sidebarMenuTitle">Sobre España:</p>
                    <ul>
                        <Link to="/Excursiones"><li className="destinosLi">¿Que hacer?</li></Link>
                        <Link to="/Comida"><li className="destinosLi">¿Que comer?</li></Link>
                        <Link to="/Alojamientos"><li className="destinosLi">¿Donde alojarme?</li></Link>
                        <Link to="/Visitas"><li className="destinosLi">¿Que visitar?</li></Link>
                        <Link to="/Visitas"><li className="destinosLi">¿Como llego?</li></Link>
                        <Link to="/Visitas"><li className="destinosLi">Patrimonio de la Unesco</li></Link>
                        <Link to="/Visitas"><li className="destinosLi">Eventos culturales</li></Link>
                        <Link to="/Visitas"><li className="destinosLi">Eventos deportivos</li></Link>
                    </ul>
                </div>    
            </div>
        </>
    )
}