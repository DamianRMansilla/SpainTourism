import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { accommodationContext } from "../../Context/AllContext";
import { HashLink as Link } from "react-router-hash-link";
import './ciudadAlojamientos.css'


export default function CityAccomodation(){

    var {city} = useParams()
    const accommodation = useContext(accommodationContext)
    var category = '';
    

    
    const [elementChecked,setElementChecked] = useState([]);
    const filterChosen = (e) => {
        
        if(elementChecked.indexOf(e.target.value) === -1){
            setElementChecked([...elementChecked, e.target.value]);
        } else {
            const newElementChecked = [
                ...elementChecked.slice(0,elementChecked.indexOf(e.target.value)),
                ...elementChecked.slice(elementChecked.indexOf(e.target.value) + 1)
            ];
            setElementChecked(newElementChecked);
        }

    };
    

    const applyFilter = (e) =>{
        e.preventDefault();
        var hotelsCategory = document.querySelectorAll('.accommodation-item');

        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j <= elementChecked.length; j++){
                if(hotelsCategory[i].classList.contains(elementChecked[j])){
                    hotelsCategory[i].classList.remove('dispNone');
                } 
            }
        }
    }

    // setTimeout(()=>{
    //     var cat5Star = document.querySelectorAll('.cat-5star').length;
    //     var cat4Star = document.querySelectorAll('.cat-4star').length;
    //     var cat3Star = document.querySelectorAll('.cat-3star').length;
    //     var cat2Star = document.querySelectorAll('.cat-2star').length;
    //     var cat1Star = document.querySelectorAll('.cat-1star').length;
    //     var catBoutique = document.querySelectorAll('.boutique').length;
    // }, 1)



    return(
        <>
            <div className='accommodation-main-container'>
                <h1 className="accommodation-title" id="AccommodationTitle">Alojamientos en {city}</h1>
                <div className="accommodation-filter-data">
                    <section className="filters">
                        <form className="filter-form-list" onSubmit={applyFilter}>
                            <button type="submit">Filtrar</button>
                            <div className="filter-category hotel-category">
                                <span className="filter-text">Categoría del alojamiento:</span>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="todos" name="todos" value="todos" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="todos">Todos</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="5star" name="5star" value="cat-5star" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="5star">5 estrellas</label>
                                    </div>
                                    {/* <span className="span-quantity">{`${cat5Star}`}</span> */}
                                </div>
                                {/* <div className="label-input-container">
                                    <span id="5star" name="5star" value="cat-5star" className="span-tickbox" type="checkbox" onClick={filterChosen}></span>
                                    <span className='span-tickbox-text' htmlFor="5star">5 estrellas</span>
                                </div> */}
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="4star" name="4star" value="cat-4star" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="4star">4 estrellas</label>
                                    </div>
                                    {/* <span className="span-quantity">{`${cat4Star}`}</span> */}
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="3star" name="3star" value="cat-3star" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="3star">3 estrellas</label>
                                    </div>
                                    {/* <span className="span-quantity">{`${cat3Star}`}</span> */}
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="2star" name="2star" value="cat-2star" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="2star">2 estrellas</label>
                                    </div>
                                    {/* <span className="span-quantity">{`${cat2Star}`}</span> */}
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="1star" name="1star" value="cat-1star" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="1star">1 estrellas</label>
                                    </div>
                                    {/* <span className="span-quantity">{`${cat1Star}`}</span> */}
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="boutique" name="boutique" value="cat-boutique" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="boutique">Boutique</label>
                                    </div>
                                    {/* <span className="span-quantity">{`${catBoutique}`}</span> */}
                                </div>
                            </div>
                            <div className="filter-category hotel-brand">
                                <span className="filter-text">Cadena:</span>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="rosewood" name="rosewood" value="rosewood" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="rosewood">Rosewood</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="melia" name="melia" value="melia" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="melia">Melia</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="nh" name="nh" value="nh" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="nh">NH Hotels</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="vincci" name="vincci" value="vincci" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="vincci">Vincci</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="pestana" name="pestana" value="pestana" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="pestana">Pestana</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="fourseasons" name="fourseasons" value="fourseasons" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="fourseasons">Four Seasons</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="hyatt" name="hyatt" value="hyatt" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="hyatt">Hyatt</label>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-category hotel-area last-filter">
                                <span className="filter-text">Barrio:</span>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="centro" name="centro" value="centro" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="centro">Centro</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="chueca" name="chueca" value="chueca" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="chueca">Chueca</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="salamanca" name="salamanca" value="salamanca" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="salamanca">Salamanca</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="chamberi" name="chamberi" value="chamberi" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="chamberi">Chamberi</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="barajas" name="barajas" value="barajas" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="barajas">Barajas</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="malasaña" name="malasaña" value="malasaña" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="malasaña">Malasaña</label>
                                    </div>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <input id="tetuan" name="tetuan" value="tetuan" className="input-filter" type="checkbox" onClick={filterChosen}/>
                                        <label htmlFor="tetuan">Tetuan</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </section>
                    <div className='accommodation-container'>
                        {accommodation.map(
                            mainCity =>{
                                if (mainCity.category === 'cat-5star') { category = '*****'}
                                else if (mainCity.category === 'cat-4star'){category = '****'}
                                else if (mainCity.category === 'cat-3star'){category = '***'}
                                else if (mainCity.category === 'cat-2star'){category = '**'}
                                else if (mainCity.category === 'cat-1star'){category = '*'}
                                else if (mainCity.category === 'boutique'){category = 'Boutique'}
                                var nameCode = mainCity.accommodation.replaceAll(' ','-').toLowerCase();
                                
                                if(mainCity.city === `${city}`){
                                    return(
                                        <Link to={`Alojamiento/${mainCity.accommodation}`} className={`accommodation-item ${mainCity.category}`} key={mainCity.id}>
                                            <div className='accommodation-info-container'>
                                                <div style={{backgroundImage:`url('../../../img/Hotels/${mainCity.city}-${nameCode}.jpg')`}} className={`hotel-image  ${nameCode}`}></div>
                                                <div className="accommodation-info">
                                                    <span className="accommodation-city">{mainCity.city}</span>
                                                    <span className="accommodation-category">{category}</span>
                                                    <span className="accommodation-name">Hotel {mainCity.accommodation}</span>
                                                    <span className="accommodation-address">{mainCity.address}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                } 
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    )

}