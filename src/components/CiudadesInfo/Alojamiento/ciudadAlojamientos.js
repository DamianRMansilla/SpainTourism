import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { accommodationContext } from "../../Context/AllContext";
import { HashLink as Link } from "react-router-hash-link";
import './ciudadAlojamientos.css'


export default function CityAccomodation(){

    var {city} = useParams()
    const accommodation = useContext(accommodationContext)
    var category = '';
    
    var hotelCategory = ['todos','cat-5star','cat-4star','cat-3star','cat-2star','cat-1star']
    const [filter, setFilter] = useState('');
    const selected = (e) => {
        const valueSelected = e.target.value;
        setFilter(valueSelected);
        for(let i = 0; i < hotelCategory.length; i++){
            var appearHotel = document.querySelectorAll(`.${hotelCategory[i]}`);
            for ( let k = 0; k < appearHotel.length; k++) {
                appearHotel[k].style.display = 'block';
            }
            if(hotelCategory[i] !==  valueSelected && valueSelected !== 'todos'){
                var removeHotel = document.querySelectorAll(`.${hotelCategory[i]}`);
                for ( let j = 0; j < removeHotel.length; j++) {
                    removeHotel[j].style.display = 'none';
                }
            }
        }
    }


    return(
        <>
            <div className='accommodation-main-container'>
                <h1 className="accommodation-title" id="AccommodationTitle">Alojamientos en {city}</h1>
                <section className="filters">
                    <form className="form-accommodation-filter">
                        <select id="filter-hotel-selection" onChange={selected}>
                            <option value="todos" selected>Todos</option>
                            <option value="cat-5star" id="5estrellas" className="select-option">5 estrellas</option>
                            <option value="cat-4star" id="4estrellas" className="select-option">4 estrellas</option>
                            <option value="cat-3star" id="3estrellas" className="select-option">3 estrellas</option>
                            <option value="cat-2star" id="2estrellas" className="select-option">2 estrellas</option>
                            <option value="cat-1star" id="1estrella" className="select-option">1 estrella</option>
                        </select>
                    </form>
                    {/* <div className="filter-list">
                        <span className="filter-text">Selecciona tu filtro:</span>
                        <button value="todos" className="filter-item" onClick={selected}>Todos</button>
                        <button value="cat-5star" className="filter-item" onClick={selected}>5 estrellas</button>
                        <button value="cat-4star" className="filter-item" onClick={selected}>4 estrellas</button>
                        <button value="cat-3star" className="filter-item" onClick={selected}>3 estrellas</button>
                        <button value="cat-2star" className="filter-item" onClick={selected}>2 estrellas</button>
                        <button value="cat-1star" className="filter-item" onClick={selected}>1 estrellas</button>
                    </div> */}
                </section>
                <div className='accommodation-container'>
                    {accommodation.map(
                        mainCity =>{
                            if (mainCity.category === 'cat-5star') { category = '*****'}
                            else if (mainCity.category === 'cat-4star'){category = '****'}
                            else if (mainCity.category === 'cat-3star'){category = '***'}
                            else if (mainCity.category === 'cat-2star'){category = '**'}
                            else if (mainCity.category === 'cat-1star'){category = '*'}
                            
                            if(mainCity.city === `${city}`){
                                return(
                                    <Link to={`Alojamiento/${mainCity.accommodation}`} className={`accommodation-item ${mainCity.category}`} key={mainCity.id}>
                                        <div className='accommodation-info-container'>
                                            <div className={`hotel-image  ${mainCity.accommodation.replaceAll(' ','-').toLowerCase()}`}></div>
                                            <div className="accommodation-info">
                                                <span className="accommodation-city">{mainCity.city}</span>
                                                <span className="accommodation-name">Hotel {mainCity.accommodation}</span>
                                                <span className="accommodation-address">{mainCity.address}</span>
                                                <span className="accommodation-category">{category}</span>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            } 
                        }
                    )}
                </div>
            </div>
        </>
    )
}