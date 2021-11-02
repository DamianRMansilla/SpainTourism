import "./todoElAño.css"
import { Link } from "react-router-dom"

export default function TodoElAño(){
    return(
        <div className="backTodoElAño">
            <h1 className="todoElAñoTitulo">España todo el año</h1>
            <p className="pDisfruta">Disfruta España todas las estaciones</p>
            <div className="todoElAño">
                <Link to="./TodoElAño/Invierno" className="invierno"><div><p>Invierno</p></div></Link>
                <Link to="./TodoElAño/Primavera" className="primavera"><div><p>Primavera</p></div></Link>
                <Link to="./TodoElAño/Verano" className="verano"><div><p>Verano</p></div></Link>
                <Link to="./TodoElAño/Otoño" className="otoño"><div><p>Otoño</p></div></Link>
            </div>
        </div>
    )
}