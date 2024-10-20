import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { accommodationContext } from "../../Context/AllContext";
import { HashLink as Link } from "react-router-hash-link";
import './ciudadAlojamientos.css'


export default function CityAccomodation(){

    var {city} = useParams()
    const accommodation = useContext(accommodationContext)
    var category = '';
    var cantHotels = [];
    var cat5Star = [];
    var cat4Star = [];
    var cat3Star = [];
    var cat2Star = [];
    var cat1Star = [];
    var boutique = [];
    var sumaElegidos = 0;

    for(let i = 0; i < accommodation.length;i++){
        if(accommodation[i].city === `${city}`){
            cantHotels.push(accommodation[i].category)
        }
    }
    
    for (let i = 0; i < cantHotels.length; i++){
        if(cantHotels[i] === 'cat-5star'){
            cat5Star.push(cantHotels[i])
        } else if (cantHotels[i] === 'cat-4star'){
            cat4Star.push(cantHotels[i])
        } else if (cantHotels[i] === 'cat-3star'){
            cat3Star.push(cantHotels[i])
        } else if (cantHotels[i] === 'cat-2star'){
            cat2Star.push(cantHotels[i])
        } else if (cantHotels[i] === 'cat-1star'){
            cat1Star.push(cantHotels[i])
        } else if (cantHotels[i] === 'cat-boutique'){
            boutique.push(cantHotels[i])
        }
    }
    
    const [elementChecked,setElementChecked] = useState([]);
    const filterChosen = (e) => {
        var filterChosenList = e.target.className;
        var tickboxChosen = e.target;
        var filterChosenElement = filterChosenList.split(' ')[1];
        // filterChosenElement = filterChosenElement[1];
        for(let i = 0; i < filterChosen.length; i++){
            if(filterChosenList[i] !== 'span-tickbox'){
                if(elementChecked.indexOf(filterChosenElement) === -1){
                    setElementChecked([...elementChecked, filterChosenElement]);
                    tickboxChosen.classList.add('chosenTickbox');
                } else {
                    const newElementChecked = [
                        ...elementChecked.slice(0,elementChecked.indexOf(filterChosenElement)),
                        ...elementChecked.slice(elementChecked.indexOf(filterChosenElement) + 1)
                    ];
                    setElementChecked(newElementChecked);
                    tickboxChosen.classList.remove('chosenTickbox');
                }
            }
        }
    };


    const closeFilterFromChip = (e) =>{
        var chipClass = e.target.className.split(' ')[0];
        for(let i = 0; i < elementChecked.length; i++){
            if(elementChecked[i].includes(chipClass)){
                const newElementChecked = [
                    ...elementChecked.slice(0,elementChecked.indexOf(chipClass)),
                    ...elementChecked.slice(elementChecked.indexOf(chipClass) + 1)
                ];
                setElementChecked(newElementChecked);
                document.querySelector('.' + chipClass).classList.remove('chosenTickbox');
            }
        }
    }
    

    var hotelsCategory = document.querySelectorAll('.accommodation-item');
    var chips = document.querySelectorAll('.chip')

    if(elementChecked.length > 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j <= elementChecked.length; j++){
                if(hotelsCategory[i].classList.contains(elementChecked[j])){
                    hotelsCategory[i].classList.remove('dispNone');
                } 
            }
        }
        for (let i = 0; i < chips.length; i++){
            chips[i].classList.add('dispNone');
            chips[i].classList.remove('dispFlex');
            for(let j = 0; j <= elementChecked.length; j++){
                if(chips[i].classList.contains(elementChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
        }
    } else if (elementChecked.length === 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.remove('dispNone');
        }
        for (let i = 0; i < chips.length; i++){
            chips[i].classList.remove('dispFlex');
            chips[i].classList.add('dispNone');
        }
    }
    
    
    for (let i = 0; i < cantHotels.length; i++){
        for (let j = 0; j < elementChecked.length; j++)
            if(cantHotels[i].includes(elementChecked[j])){
                sumaElegidos = sumaElegidos + 1 
            }
    }

    return(
        <>
            <div className='accommodation-main-container'>
                <h1 className="accommodation-title" id="AccommodationTitle">Alojamientos en {city}</h1>
                <div className="accommodation-filter-data">
                    <section className="filters">
                        <div className="filter-form-list">
                            <h3>Filtrar por:</h3>
                            <div className="filter-category hotel-category">
                                <span className="filter-text">Categoría del alojamiento:</span>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <span id="todos" className="span-tickbox cat-todos" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>Todos</span>
                                    </div>
                                    <span className="span-quantity">{`${cantHotels.length}`}</span>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <span id="5star" className="span-tickbox cat-5star" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>5 estrellas</span>
                                    </div>
                                    <span className="span-quantity">{`${cat5Star.length}`}</span>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <span id="4star" className="span-tickbox cat-4star" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>4 estrellas</span>
                                    </div>
                                    <span className="span-quantity">{`${cat4Star.length}`}</span>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <span id="3star" className="span-tickbox cat-3star" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>3 estrellas</span>
                                    </div>
                                    <span className="span-quantity">{`${cat3Star.length}`}</span>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <span id="2star" className="span-tickbox cat-2star" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>2 estrellas</span>
                                    </div>
                                    <span className="span-quantity">{`${cat2Star.length}`}</span>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <span id="1star" className="span-tickbox cat-1star" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>1 estrellas</span>
                                    </div>
                                    <span className="span-quantity">{`${cat1Star.length}`}</span>
                                </div>
                                <div className="label-input-container">
                                    <div className="label-input-global">
                                        <span id="boutique" className="span-tickbox cat-boutique" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>Boutique</span>
                                    </div>
                                    <span className="span-quantity">{`${boutique.length}`}</span>
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
                        </div>
                    </section>
                    <section class="available-accomodation">
                        {elementChecked.length === 0 ? <h4> {cantHotels.length} alojamientos encontrados</h4> : <h4> {sumaElegidos} alojamientos encontrados</h4>}
                        <section class='chips'>
                            <div id="5-star-chip" class="cat-5star chip dispNone" onClick={closeFilterFromChip}>5 estrellas<i class="fa-solid fa-xmark"></i></div>
                            <div id="4-star-chip" class="cat-4star chip dispNone" onClick={closeFilterFromChip}>4 estrellas<i class="fa-solid fa-xmark"></i></div>
                            <div id="3-star-chip" class="cat-3star chip dispNone" onClick={closeFilterFromChip}>3 estrellas<i class="fa-solid fa-xmark"></i></div>
                            <div id="2-star-chip" class="cat-2star chip dispNone" onClick={closeFilterFromChip}>2 estrellas<i class="fa-solid fa-xmark"></i></div>
                            <div id="1-star-chip" class="cat-1star chip dispNone" onClick={closeFilterFromChip}>1 estrella<i class="fa-solid fa-xmark"></i></div>
                            <div id="boutique-chip" class="cat-boutique chip dispNone" onClick={closeFilterFromChip}>Boutique<i class="fa-solid fa-xmark"></i></div>
                        </section>
                        <div className='accommodation-container'>
                            {accommodation.map(
                                mainCity =>{
                                    if (mainCity.category === 'cat-5star') { category = '*****'}
                                    else if (mainCity.category === 'cat-4star'){category = '****'}
                                    else if (mainCity.category === 'cat-3star'){category = '***'}
                                    else if (mainCity.category === 'cat-2star'){category = '**'}
                                    else if (mainCity.category === 'cat-1star'){category = '*'}
                                    else if (mainCity.category === 'cat-boutique'){category = 'Boutique'}
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
                    </section>
                </div>
            </div>
        </>
    )

}