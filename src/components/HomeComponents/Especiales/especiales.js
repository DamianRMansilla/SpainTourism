import './especiales.css'
import { HashLink as Link } from 'react-router-hash-link'

export default function Especiales(){
    return(
        <section className="home-especiales">
            <h1 className="title">Otras actividades</h1>
            <p className="subtitle1">Con o sin playa, en verano o en invierno, no puedes irte de España sin conocer estas ciudades.</p>
            <div className="grid-container">
                <Link className="container-1">
                    <p className='white-title'>Turismo Enológico</p>
                </Link>
                <Link className="container-2">
                    <p className='white-title'>Golf</p>
                </Link>
                <Link className="container-3">
                    <p className='white-title'>Turismo Rural</p>
                </Link>
                <Link className="container-4">
                    <p className='white-title'>Fiestas Regionales</p>
                </Link>
                <Link className="container-5">
                    <p className='white-title'>Turismo Religioso</p>
                </Link>
                <Link className="container-6">
                    <p className='white-title'>Musica y Festivales</p>
                </Link>
            </div>
        </section>
    )
}