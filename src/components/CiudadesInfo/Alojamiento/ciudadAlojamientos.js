import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { accommodationContext } from "../../Context/AllContext";
import { HashLink as Link } from "react-router-hash-link";
import './ciudadAlojamientos.css'
import ReactDOM from 'react-dom'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CityAccomodation(){

    var {city} = useParams()
    const accommodation = useContext(accommodationContext)
    var category = '';
    var cantHotels = [];
    var cantCadena = [];
    var cantHood = [];
    var cat5Star = [];
    var cat4Star = [];
    var cat3Star = [];
    var cat2Star = [];
    var cat1Star = [];
    var boutique = [];
    var cantFourSeasons = [];
    var cantPestana = [];
    var cantHyatt = [];
    var cantVP = [];
    var cantBarcelo = [];
    var cantIberostar = [];
    var cantOnlyYou = [];
    var cantMelia = [];
    var cantRosewood = [];
    var cantAccor = [];
    var cantNH = [];
    var cantVincci = [];
    var cantRiu = [];
    var cantBarajas = [];
    var cantCastellana = [];
    var cantChueca = [];
    var cantCortes = [];
    var cantMoncloa = [];
    var cantPalacio = [];
    var cantSol = [];
    var cantUniversidad = [];
    var cantVallecas = [];

    var sumaElegidos = 0;

    for(let i = 0; i < accommodation.length;i++){
        if(accommodation[i].city === `${city}`){
            cantHotels.push(accommodation[i].category);
            cantCadena.push(accommodation[i].cadena);
            cantHood.push(accommodation[i].barrio);
        }
    }
    
    var cantHotel = [...new Set(cantHotels)].sort().reverse();
    var cantCadenas = [...new Set(cantCadena)].sort();
    var cantHoods = [...new Set(cantHood)].sort();

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

    for (let i = 0; i < cantCadena.length; i++){
        if(cantCadena[i] === 'Four Seasons'){
            cantFourSeasons.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Pestana'){
            cantPestana.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Hyatt'){
            cantHyatt.push(cantCadena[i]);
        } else if (cantCadena[i] === 'VP'){
            cantVP.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Barcelo'){
            cantBarcelo.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Iberostar'){
            cantIberostar.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Only You'){
            cantOnlyYou.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Melia'){
            cantMelia.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Rosewood'){
            cantRosewood.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Accor'){
            cantAccor.push(cantCadena[i]);
        } else if (cantCadena[i] === 'NH'){
            cantNH.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Vincci'){
            cantVincci.push(cantCadena[i]);
        } else if (cantCadena[i] === 'Riu'){
            cantRiu.push(cantCadena[i]);
        }
    }

    for (let i = 0; i < cantHood.length; i++){
        if(cantHood[i] === 'Barajas'){
            cantBarajas.push(cantHood[i])
        } else if (cantHood[i] === 'Castellana'){
            cantCastellana.push(cantHood[i])
        } else if (cantHood[i] === 'Chueca'){
            cantChueca.push(cantHood[i])
        } else if (cantHood[i] === 'Cortes'){
            cantCortes.push(cantHood[i])
        } else if (cantHood[i] === 'Moncloa'){
            cantMoncloa.push(cantHood[i])
        } else if (cantHood[i] === 'Palacio'){
            cantPalacio.push(cantHood[i])
        } else if (cantHood[i] === 'Sol'){
            cantSol.push(cantHood[i])
        } else if (cantHood[i] === 'Universidad'){
            cantUniversidad.push(cantHood[i])
        } else if (cantHood[i] === 'Vallecas'){
            cantVallecas.push(cantHood[i])
        } 
    }
    
    const [elementChecked,setElementChecked] = useState([]);
    const [brandChecked, setBrandChecked] = useState([]);
    const [hoodChecked, setHoodChecked] = useState([]);
    const filterChosen = (e) => {
        var tickboxChosen = e.target;
        var filterChosenList = tickboxChosen.className;
        var filterChosenElement = filterChosenList.split(' ')[1];
        
        
        if(filterChosenElement.includes('cat-') || filterChosenElement === 'todos'){
            for(let i = 0; i <= filterChosen.length; i++){
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
        } else if(filterChosenElement.includes('brand-')){
            for(let i = 0; i <= filterChosen.length; i++){
                if(brandChecked.indexOf(filterChosenElement) === -1){
                    setBrandChecked([...brandChecked, filterChosenElement]);
                    tickboxChosen.classList.add('chosenTickbox');
                } else {
                    const newBrandChecked = [
                        ...brandChecked.slice(0,brandChecked.indexOf(filterChosenElement)),
                        ...brandChecked.slice(brandChecked.indexOf(filterChosenElement) + 1)
                    ];
                    setBrandChecked(newBrandChecked);
                    tickboxChosen.classList.remove('chosenTickbox');
                }
            }
        } else if(filterChosenElement.includes('hood-')){
            for(let i = 0; i <= filterChosen.length; i++){
                if(hoodChecked.indexOf(filterChosenElement) === -1){
                    setHoodChecked([...hoodChecked, filterChosenElement]);
                    tickboxChosen.classList.add('chosenTickbox');
                } else {
                    const newHoodChecked = [
                        ...hoodChecked.slice(0,hoodChecked.indexOf(filterChosenElement)),
                        ...hoodChecked.slice(hoodChecked.indexOf(filterChosenElement) + 1)
                    ];
                    setHoodChecked(newHoodChecked);
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
        for(let i = 0; i < brandChecked.length; i++){
            if(brandChecked[i].includes(chipClass)){
                const newBrandChecked = [
                    ...brandChecked.slice(0,brandChecked.indexOf(chipClass)),
                    ...brandChecked.slice(brandChecked.indexOf(chipClass) + 1)
                ];
                setBrandChecked(newBrandChecked);
                document.querySelector('.' + chipClass).classList.remove('chosenTickbox');
            }
        }
        for(let i = 0; i < hoodChecked.length; i++){
            if(hoodChecked[i].includes(chipClass)){
                const newHoodChecked = [
                    ...hoodChecked.slice(0,hoodChecked.indexOf(chipClass)),
                    ...hoodChecked.slice(hoodChecked.indexOf(chipClass) + 1)
                ];
                setHoodChecked(newHoodChecked);
                document.querySelector('.' + chipClass).classList.remove('chosenTickbox');
            }
        }
    }
    

    var hotelsCategory = document.querySelectorAll('.accommodation-item');
    var chips = document.querySelectorAll('.chip')

    
    
    if(elementChecked.length > 0 && brandChecked.length === 0 && hoodChecked.length === 0){
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
    } else if (elementChecked.length === 0 && brandChecked.length === 0 && hoodChecked.length === 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.remove('dispNone');
        }
        for (let i = 0; i < chips.length; i++){
            chips[i].classList.remove('dispFlex');
            chips[i].classList.add('dispNone');
        }
    } else if(elementChecked.length > 0 && brandChecked.length > 0 && hoodChecked.length === 0){
        for(let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j < elementChecked.length; j++){
                for(let k = 0; k < brandChecked.length; k++){
                    if((hotelsCategory[i].classList.value.includes(elementChecked[j])) && hotelsCategory[i].classList.value.includes(brandChecked[k])){
                        hotelsCategory[i].classList.remove('dispNone');
                    }
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
            for(let j = 0; j <= brandChecked.length; j++){
                if(chips[i].classList.contains(brandChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
        }

    } else if (elementChecked.length === 0 && brandChecked.length > 0 && hoodChecked.length === 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j <= brandChecked.length; j++){
                if(hotelsCategory[i].classList.contains(brandChecked[j])){
                    hotelsCategory[i].classList.remove('dispNone');
                } 
            }
        }
        for (let i = 0; i < chips.length; i++){
            chips[i].classList.add('dispNone');
            chips[i].classList.remove('dispFlex');
            for(let j = 0; j <= brandChecked.length; j++){
                if(chips[i].classList.contains(brandChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
        }
    } else if (elementChecked.length === 0 && brandChecked.length === 0 && hoodChecked.length > 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j <= hoodChecked.length; j++){
                if(hotelsCategory[i].classList.contains(hoodChecked[j])){
                    hotelsCategory[i].classList.remove('dispNone');
                } 
            }
        }
        for (let i = 0; i < chips.length; i++){
            chips[i].classList.add('dispNone');
            chips[i].classList.remove('dispFlex');
            for(let j = 0; j <= hoodChecked.length; j++){
                if(chips[i].classList.contains(hoodChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
        }
    } else if (elementChecked.length > 0 && brandChecked.length === 0 && hoodChecked.length > 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j < elementChecked.length; j++){
                for(let k = 0; k < hoodChecked.length; k++){
                    if((hotelsCategory[i].classList.value.includes(elementChecked[j])) && hotelsCategory[i].classList.value.includes(hoodChecked[k])){
                        hotelsCategory[i].classList.remove('dispNone');
                    }
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
            for(let j = 0; j <= hoodChecked.length; j++){
                if(chips[i].classList.contains(hoodChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
        }

    } else if (elementChecked.length === 0 && brandChecked.length > 0 && hoodChecked.length > 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j < hoodChecked.length; j++){
                for(let k = 0; k < brandChecked.length; k++){
                    if((hotelsCategory[i].classList.value.includes(hoodChecked[j])) && hotelsCategory[i].classList.value.includes(brandChecked[k])){
                        hotelsCategory[i].classList.remove('dispNone');
                    }
                }
            }
        }
        for (let i = 0; i < chips.length; i++){
            chips[i].classList.add('dispNone');
            chips[i].classList.remove('dispFlex');
            for(let j = 0; j <= brandChecked.length; j++){
                if(chips[i].classList.contains(brandChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
            for(let j = 0; j <= hoodChecked.length; j++){
                if(chips[i].classList.contains(hoodChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
        }

    } else if (elementChecked.length > 0 && brandChecked.length > 0 && hoodChecked.length > 0){
        for (let i = 0; i < hotelsCategory.length; i++){
            hotelsCategory[i].classList.add('dispNone');
            for(let j = 0; j < elementChecked.length; j++){
                for(let k = 0; k < brandChecked.length; k++){
                    for(let l = 0; l < hoodChecked.length; l++){
                        if((hotelsCategory[i].classList.value.includes(elementChecked[j])) && hotelsCategory[i].classList.value.includes(brandChecked[k]) && hotelsCategory[i].classList.value.includes(hoodChecked[l])){
                            hotelsCategory[i].classList.remove('dispNone');
                        }
                    }
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
            for(let j = 0; j <= brandChecked.length; j++){
                if(chips[i].classList.contains(brandChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
            for(let j = 0; j <= hoodChecked.length; j++){
                if(chips[i].classList.contains(hoodChecked[j])){
                    chips[i].classList.remove('dispNone');
                    chips[i].classList.add('dispFlex');
                } 
            }
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
                                        <span id="5star" className="span-tickbox todos" onClick={filterChosen}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                            </svg>
                                        </span>
                                        <span className='span-tickbox-text'>Todos</span>
                                    </div>
                                    <span className="span-quantity">{`${cantHotels.length}`}</span>
                                </div>
                                {cantHotel.map(
                                    catHotel =>{
                                        return(
                                            <div className="label-input-container" key={`${catHotel}`}>
                                                <div className="label-input-global">
                                                    <span id={`${catHotel}`} className={`span-tickbox ${catHotel} todos`} onClick={filterChosen}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                                        </svg>
                                                    </span>
                                                {`${catHotel}` === 'cat-5star' && <span className='span-tickbox-text'>5 Estrellas</span>}
                                                {`${catHotel}` === 'cat-4star' && <span className='span-tickbox-text'>4 Estrellas</span>}
                                                {`${catHotel}` === 'cat-3star' && <span className='span-tickbox-text'>3 Estrellas</span>}
                                                {`${catHotel}` === 'cat-2star' && <span className='span-tickbox-text'>2 Estrellas</span>}
                                                {`${catHotel}` === 'cat-1star' && <span className='span-tickbox-text'>1 Estrellas</span>}
                                                {`${catHotel}` === 'cat-boutique' && <span className='span-tickbox-text'>Boutique</span>}
                                                </div>
                                                {`${catHotel}` === 'cat-5star' && <span className="span-quantity">{cat5Star.length}</span>}
                                                {`${catHotel}` === 'cat-4star' && <span className="span-quantity">{cat4Star.length}</span>}
                                                {`${catHotel}` === 'cat-3star' && <span className="span-quantity">{cat3Star.length}</span>}
                                                {`${catHotel}` === 'cat-2star' && <span className="span-quantity">{cat2Star.length}</span>}
                                                {`${catHotel}` === 'cat-1star' && <span className="span-quantity">{cat1Star.length}</span>}
                                                {`${catHotel}` === 'cat-boutique' && <span className="span-quantity">{boutique.length}</span>}
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                            <div className="filter-category hotel-brand">
                                <span className="filter-text">Cadena:</span>
                                {cantCadenas.map(
                                    cadena =>{
                                        return(
                                            <div className="label-input-container" key={`${cadena}`}>
                                                <div className="label-input-global">
                                                    <span id={`${cadena}`} className={`span-tickbox brand-${cadena.replace(' ','-')}`} onClick={filterChosen}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                                        </svg>
                                                    </span>
                                                    <span className='span-tickbox-text'>{`${cadena}`}</span>
                                                </div>
                                                {`${cadena}` === 'Four Seasons' && <span className="span-quantity">{cantFourSeasons.length}</span>}
                                                {`${cadena}` === 'Riu' && <span className="span-quantity">{cantRiu.length}</span>}
                                                {`${cadena}` === 'Pestana' && <span className="span-quantity">{cantPestana.length}</span>}
                                                {`${cadena}` === 'Hyatt' && <span className="span-quantity">{cantHyatt.length}</span>}
                                                {`${cadena}` === 'VP' && <span className="span-quantity">{cantVP.length}</span>}
                                                {`${cadena}` === 'Barcelo' && <span className="span-quantity">{cantBarcelo.length}</span>}
                                                {`${cadena}` === 'Iberostar' && <span className="span-quantity">{cantIberostar.length}</span>}
                                                {`${cadena}` === 'Only You' && <span className="span-quantity">{cantOnlyYou.length}</span>}
                                                {`${cadena}` === 'Melia' && <span className="span-quantity">{cantMelia.length}</span>}
                                                {`${cadena}` === 'Rosewood' && <span className="span-quantity">{cantRosewood.length}</span>}
                                                {`${cadena}` === 'Accor' && <span className="span-quantity">{cantAccor.length}</span>}
                                            </div>
                                        )
                                    }
                                )}

                            </div>
                            <div className="filter-category hotel-area last-filter">
                                <span className="filter-text">Barrio:</span>
                                {cantHoods.map(
                                    barrio =>{
                                        return(
                                            <div className="label-input-container" key={`${barrio}`}>
                                                <div className="label-input-global">
                                                    <span id={`${barrio}`} className={`span-tickbox hood-${barrio}`} onClick={filterChosen}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                            <path d="M9 22l-10-10.598 2.798-2.859 7.149 7.473 13.144-14.016 2.909 2.806z"/>
                                                        </svg>
                                                    </span>
                                                    <span className='span-tickbox-text'>{`${barrio}`}</span>
                                                </div>
                                                {`${barrio}` === 'Barajas' && <span className="span-quantity">{cantBarajas.length}</span>}
                                                {`${barrio}` === 'Castellana' && <span className="span-quantity">{cantCastellana.length}</span>}
                                                {`${barrio}` === 'Chueca' && <span className="span-quantity">{cantChueca.length}</span>}
                                                {`${barrio}` === 'Cortes' && <span className="span-quantity">{cantCortes.length}</span>}
                                                {`${barrio}` === 'Moncloa' && <span className="span-quantity">{cantMoncloa.length}</span>}
                                                {`${barrio}` === 'Palacio' && <span className="span-quantity">{cantPalacio.length}</span>}
                                                {`${barrio}` === 'Sol' && <span className="span-quantity">{cantSol.length}</span>}
                                                {`${barrio}` === 'Universidad' && <span className="span-quantity">{cantUniversidad.length}</span>}
                                                {`${barrio}` === 'Vallecas' && <span className="span-quantity">{cantVallecas.length}</span>}
                                            </div>
                                        )
                                    }
                                )}

                            </div>
                        </div>
                    </section>
                    <section className="available-accomodation">
                        {elementChecked.length === 0 ? <h4> {cantHotels.length} alojamientos encontrados</h4> : <h4> {sumaElegidos} alojamientos encontrados</h4>}
                        <section className='chips'>
                            {cantHotel.map(
                                chipHotels =>{
                                    return(
                                        <div id={`${chipHotels.replace('star','-star').replace('cat-','')}-chip`} className={`${chipHotels} chip dispNone`} onClick={closeFilterFromChip}>{chipHotels === 'cat-1star' ? ('1 Estrella'):(chipHotels === 'cat-boutique' ? ('Boutique'): `${chipHotels.replace('cat-','').replace('star',' Estrellas')}`)}<FontAwesomeIcon icon={faXmark} className="icon"/></div>
                                        )
                                    }
                                )
                            }
                            {cantCadenas.map(
                                chipCadena =>{
                                    return(
                                        <div id={`${chipCadena.toLowerCase().replace(' ','-')}-chip`} className={`brand-${chipCadena.replace(' ','-')} chip dispNone`} onClick={closeFilterFromChip}>{chipCadena}<FontAwesomeIcon icon={faXmark} className="icon"/></div>
                                        )
                                    }
                                )
                            }
                            {cantHoods.map(
                                chipBarrios =>{
                                    return(
                                        <div id={`${chipBarrios.toLowerCase()}-chip`} className={`hood-${chipBarrios} chip dispNone`} onClick={closeFilterFromChip}>{chipBarrios}<FontAwesomeIcon icon={faXmark} className="icon"/></div>
                                        )
                                    }
                                )
                            }

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
                                            <Link to={`Alojamiento/${mainCity.accommodation}`} className={`accommodation-item ${mainCity.category} brand-${mainCity.cadena.replace(' ','-')} hood-${mainCity.barrio}`} key={mainCity.id}>
                                                <div className='accommodation-info-container'>
                                                    <div style={{backgroundImage:`url('../../../img/Hotels/${mainCity.city}-${nameCode}.jpg')`}} className={`hotel-image  ${nameCode}`}></div>
                                                    <div className="accommodation-info">
                                                        <span className="accommodation-city">{mainCity.city}</span>
                                                        <span className="accommodation-category">{category}</span>
                                                        <span className="accommodation-name">{mainCity.accommodation}</span>
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