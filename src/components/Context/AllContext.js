import React, { createContext } from "react";
export const allContexts = React.createContext();
export const accommodationContext = React.createContext();
export const tourContext = React.createContext();
export const mapCitiesContext = React.createContext();

export function AllContexts({children}){
    var mainCities = [
        {city: "Madrid", id: 1, class: "madrid-city", route: 'mercadosanmiguel', img: 'Madrid', playa: 'no', inMap:'yes'}, 
        {city: "Barcelona",  id: 2, class: "barcelona-city", route: 'alhambra', img: 'Barcelona', playa: 'yes', inMap:'yes'}, 
        {city: "San Sebastian",  id: 3, class: "sansebastian-city", route: 'toledo', img: 'SanSebastian', playa: 'yes', inMap:'yes'}, 
        {city: "Malaga",  id: 4, class: "malaga-city", route: 'ronda', img: 'Malaga', playa: 'yes'}, 
        {city: "Sevilla",  id: 5, class: "sevilla-city", route: 'museodelprado', img: 'Sevilla', playa: 'no'}, 
        {city: "Valencia",  id: 6, class: "valencia-city", route: 'mercadolaboqueria', img: 'Valencia', playa: 'yes', inMap:'yes'},
        {city: "Santiago de Compostela",  id: 7, class: "santiago-city", route: 'caminodesantiago', img: 'SantiagoDeCompostela', playa: 'no'}, 
        {city: "Mallorca",  id: 8, class: "mallorca-city", route: 'bachiadelaconcha', img: 'Mallorca', playa: 'yes'},
        {city: "Alicante",  id: 9, class: "alicante-city", route: 'alicante', img: 'Alicante', playa: 'yes'},
        {city: "Cadiz",  id: 10, class: "cadiz-city", route: 'cadiz', img: 'Cadiz', playa: 'yes'},
        {city: "Granada",  id: 11, class: "granada-city", route: 'granada', img: 'Granada', playa: 'no'},
        {city: "Córdoba",  id: 12, class: "cordoba-city", route: 'cordoba', img: 'Cordoba', playa: 'no'},
        {city: "Ibiza",  id: 13, class: "ibiza-city", route: 'ibiza', img: 'Ibiza', playa: 'yes'},
        {city: "Bilbao",  id: 14, class: "bilbao-city", route: 'bilbao', img: 'Bilbao', playa: 'no'},
        {city: "Tenerife",  id: 15, class: "tenerife-city", route: 'tenerife', img: 'Tenerife', playa: 'yes'},
        {city: "Segovia",  id: 16, class: "Segovia-city", route: 'segovia', img: 'Segovia', playa: 'no'}
    ]

  
  return (
      <allContexts.Provider value={mainCities}>
            {children}
        </allContexts.Provider>
    )
    
}

export default function Accommodation({children}){
    var accommodation = [{city: 'Madrid', accommodation: 'Riu Plaza España', address: 'Calle Gran Vía 84', url: 'www.prueba.com', category: 'cat-5star', cadena: 'Riu', barrio: 'Universidad', id: 'accom1'},
    {city: 'Madrid', accommodation: 'Four Seasons', address: 'Calle de Sevilla 3', url: 'https://www.fourseasons.com/es-es/madrid/', category: 'cat-4star', cadena: 'Four Seasons', barrio: 'Cortes', id: 'accom2'},
    {city: 'Madrid', accommodation: 'Pestana CR7 Gran Vía', address: 'Calle Gran Vía 29', url: 'https://www.pestanacr7.com/es/hotel/pestana-madrid-gran-via', category: 'cat-4star', cadena: 'Pestana', barrio: 'Sol', id: 'accom3'},
    {city: 'Madrid', accommodation: 'Hyatt Centric Gran Vía', address: 'Calle Gran Vía 31', url: 'https://www.hyatt.com/hyatt-centric/es-ES/madct-hyatt-centric-gran-via-madrid', category: 'cat-4star', cadena: 'Hyatt', barrio: 'Sol', id: 'accom4'},
    {city: 'Madrid', accommodation: 'VP Plaza España Design', address: 'Plaza de España 5', url: 'https://www.plazaespana-hotel.com/', category: 'cat-4star', cadena: 'VP', barrio: 'Palacio', id: 'accom5'},
    {city: 'Madrid', accommodation: 'Barcelo Torre de Madrid', address: 'Plaza de España 18', url: 'https://www.barcelo.com/es-es/barcelo-torre-de-madrid/', category: 'cat-4star', cadena: 'Barcelo', barrio: 'Moncloa', id: 'accom6'},
    {city: 'Madrid', accommodation: 'Iberostar Las Letras Gran Vía', address: 'Direccion hotel 2', url: 'www.prueba2.com', category: 'cat-4star', cadena: 'Iberostar', barrio: 'Cortes', id: 'accom7'},
    {city: 'Madrid', accommodation: 'Only YOU Boutique Hotel', address: 'Calle de Barquillo 21', url: 'https://www.onlyyouhotels.com', category: 'cat-boutique', cadena: 'Only You', barrio: 'Chueca', id: 'accom8'},
    {city: 'Madrid', accommodation: 'Madrid Gran Vía 25 by Melia', address: 'Calle Gran Vía 25', url: 'https://www.melia.com/es/hoteles/espana/madrid/hotel-madrid-gran-via-25-by-melia', category: 'cat-3star', cadena: 'Melia', barrio: 'Sol', id: 'accom9'},
    {city: 'Madrid', accommodation: 'Rosewood Villa Magna', address: 'Paseo de la Castellana 22', url: 'https://www.rosewoodhotels.com/en/villa-magna', category: 'cat-5star', cadena: 'Rosewood', barrio: 'Castellana', id: 'accom10'},
    {city: 'Madrid', accommodation: 'Ibis Madrid Aeropuerto Barajas', address: 'Av. General 49', url: 'https://all.accor.com/hotel/3753/index.es.shtml', category: 'cat-2star', cadena: 'Accor', barrio: 'Barajas', id: 'accom11'},
    {city: 'Madrid', accommodation: 'Barcelo Emperatriz', address: 'Calle de Lopez de Hoyos 4', url: 'https://www.barcelo.com/en-es/barcelo-emperatriz', category: 'cat-5star', cadena: 'Barcelo', barrio: 'Castellana', id: 'accom12'},
    {city: 'Barcelona', accommodation: 'Thompson', address: 'Direccion hotel 2', url: 'www.prueba3.com', category: 'cat-5star', barrio: '', id: 'accom13'},
    {city: 'Madrid', accommodation: 'Ibis Budget Vallecas', address: 'Calle de Miravete 17', url: 'https://all.accor.com/ssr/app/ibis/rates/7066/index.es.shtml', category: 'cat-1star', cadena: 'Accor', barrio: 'Vallecas', id: 'accom14'},]
    
    return (
        <accommodationContext.Provider value={accommodation}>
            {children}
        </accommodationContext.Provider>
    )
}

export function Tours({children}){
    var tours = [{city: 'Madrid', tour:'Free tour por Madrid', empresa:'Civitatis', id: 1},
    {city: 'Madrid', tour:'Excursion a Toledo y Segovia', empresa:'Civitatis', id: 2},
    {city: 'Madrid', tour:'Visita guiada por el Palacio Real', empresa:'Civitatis', id: 3},
    {city: 'Madrid', tour:'Excursion a Avila y Segovia', empresa:'Civitatis', id: 4},
    {city: 'Madrid', tour:'Tour Bernabeu', empresa:'Civitatis', id: 5},
    {city: 'Madrid', tour:'Visita Guiada por el Museo del Prado', empresa:'Civitatis', id: 6},
    {city: 'Madrid', tour:'Free tour nocturno por Madrid', empresa:'Civitatis', id: 7},
    {city: 'Madrid', tour:'Tour de misterios y leyendas de Madrid', empresa:'Civitatis', id: 8},
    {city: 'Madrid', tour:'Excirsion a Toledo de dia completo', empresa:'Civitatis', id: 9},
    {city: 'Madrid', tour:'Free tour por Chueca y Malasaña', empresa:'Civitatis', id: 10},
    {city: 'Madrid', tour:'Excursion a El Escorial y Valle de los Caidos', empresa:'Civitatis', id: 11},
    {city: 'Madrid', tour:'Tour privado por Madrid', empresa:'Civitatis', id: 12},
    {city: 'Madrid', tour:'Free tour nocturno por Madrid', empresa:'Civitatis', id: 13},
    {city: 'Barcelona', tour:'Free tour por Madrid', empresa:'Civitatis', id: 14},
    {city: 'Barcelona', tour:'Free tour por Madrid', empresa:'Civitatis', id: 15},
    {city: 'Barcelona', tour:'Free tour por Madrid', empresa:'Civitatis', id: 16},
    {city: 'Barcelona', tour:'Free tour por Madrid', empresa:'Civitatis', id: 17},
    {city: 'Barcelona', tour:'Free tour por Madrid', empresa:'Civitatis', id: 18}]

    return (
        <tourContext.Provider value={tours}>
            {children}
        </tourContext.Provider>
    )
}


export function MapCities({children}){
    var citiesOnMap = [
        {city: "Madrid", id: 1, inMap:'yes', topPosition:'43%', leftPosition:'48%'}, 
        {city: "Barcelona", id:2, inMap:'yes', topPosition:'32%', leftPosition:'78%'}, 
        {city: "San Sebastián", id:3, inMap:'yes', topPosition:'14%', leftPosition:'60%'}, 
        {city: "Malaga", id:4, inMap:'yes', topPosition:'76%', leftPosition:'46%' }, 
        {city: "Sevilla", id:5, inMap:'yes', topPosition:'72%', leftPosition:'32%' }, 
        {city: "Valencia", id:6, inMap:'yes', topPosition:'51%', leftPosition:'66%'},
        {city: "Santiago de Compostela", id:7, inMap:'yes', topPosition:'22%', leftPosition:'19%'}, 
        {city: "Mallorca", id:8, inMap:'no', topPosition:'43%', leftPosition:'48%'},
        {city: "Pamplona", id:9, inMap:'yes', topPosition:'22%', leftPosition:'62%'},
        {city: "La Coruña", id:10, inMap:'yes', topPosition:'17%', leftPosition:'18%'},
        {city: "Cáceres", id:11, inMap:'yes', topPosition:'53%', leftPosition:'34%'},
        {city: "Córdoba", id:12, inMap:'yes', topPosition:'65%', leftPosition:'42%'},
        {city: "Ibiza", id:13, inMap:'no', topPosition:'43%', leftPosition:'48%'},
        {city: "Bilbao", id:14, inMap:'no', topPosition:'43%', leftPosition:'48%'},
        {city: "Tenerife", id:15, inMap:'no', topPosition:'43%', leftPosition:'48%'},
        {city: "Zaragoza", id:16, inMap:'yes', topPosition:'30%', leftPosition:'66%'},
        {city: "Santander", id:17, inMap:'yes', topPosition:'14%', leftPosition:'50%'},
        {city: "Salamanca", id:18, inMap:'yes', topPosition:'38%', leftPosition:'38%'},
        {city: "Valladolid", id:19, inMap:'yes', topPosition:'32%', leftPosition:'43%'}
    ]

  
  return (
      <mapCitiesContext.Provider value={citiesOnMap}>
            {children}
        </mapCitiesContext.Provider>
    )
    
}