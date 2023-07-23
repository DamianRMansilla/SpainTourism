import "./imagenCiudad.css"
import { useParams } from 'react-router-dom';


export default function ImagenCiudad(){
    var { city } = useParams();
    return(
    <>
        <div className={`body${city} cityImage`} id='imageCity'>
            <p class="lemaMadrid">{city === "Malaga" ? "Málaga" : city}</p>
        </div>
    </>
    )
}