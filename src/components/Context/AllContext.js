import React, { useContext } from "react";
export const allContexts = React.createContext();
export const accommodationContext = React.createContext();
export const tourContext = React.createContext();

export function AllContexts({children}){
    var mainCities = [{city: "Madrid", id: 1, class: "madrid-city", route: 'mercadosanmiguel', img: 'Madrid', playa: 'no'}, 
  {city: "Barcelona",  id: 2, class: "barcelona-city", route: 'alhambra', img: 'Barcelona', playa: 'yes'}, 
  {city: "San Sebastian",  id: 3, class: "sansebastian-city", route: 'toledo', img: 'SanSebastian', playa: 'yes'}, 
  {city: "Malaga",  id: 4, class: "malaga-city", route: 'ronda', img: 'Malaga', playa: 'yes'}, 
  {city: "Sevilla",  id: 5, class: "sevilla-city", route: 'museodelprado', img: 'Sevilla', playa: 'no'}, 
  {city: "Valencia",  id: 6, class: "valencia-city", route: 'mercadolaboqueria', img: 'Valencia', playa: 'yes'},
  {city: "Santiago de Compostela",  id: 7, class: "santiago-city", route: 'caminodesantiago', img: 'SantiagoDeCompostela', playa: 'no'}, 
  {city: "Mallorca",  id: 8, class: "mallorca-city", route: 'bachiadelaconcha', img: 'Mallorca', playa: 'yes'},
  {city: "Alicante",  id: 9, class: "alicante-city", route: 'alicante', img: 'Alicante', playa: 'yes'},
  {city: "Cadiz",  id: 10, class: "cadiz-city", route: 'cadiz', img: 'Cadiz', playa: 'yes'},
  {city: "Granada",  id: 11, class: "granada-city", route: 'granada', img: 'Granada', playa: 'no'},
  {city: "Córdoba",  id: 12, class: "cordoba-city", route: 'cordoba', img: 'Cordoba', playa: 'no'},
  {city: "Ibiza",  id: 13, class: "ibiza-city", route: 'ibiza', img: 'Ibiza', playa: 'yes'},
  {city: "Bilbao",  id: 14, class: "bilbao-city", route: 'bilbao', img: 'Bilbao', playa: 'no'},
  {city: "Tenerife",  id: 15, class: "tenerife-city", route: 'tenerife', img: 'Tenerife', playa: 'yes'},
  {city: "Segovia",  id: 16, class: "Segovia-city", route: 'segovia', img: 'Segovia', playa: 'no'}]

  
  return (
      <allContexts.Provider value={mainCities}>
            {children}
        </allContexts.Provider>
    )
    
}

export default function Accommodation({children}){
    var accommodation = [{city: 'Madrid', accommodation: 'Riu Plaza España', address: 'Calle Gran Vía 84', url: 'www.prueba.com', category: 'cat-5star', id: 'accom1'},
    {city: 'Madrid', accommodation: 'Four Seasons', address: 'Calle de Sevilla 3', url: 'https://www.fourseasons.com/es-es/madrid/', category: 'cat-4star', id: 'accom2'},
    {city: 'Madrid', accommodation: 'Pestana CR7 Gran Vía', address: 'Calle Gran Vía 29', url: 'https://www.pestanacr7.com/es/hotel/pestana-madrid-gran-via', category: 'cat-4star', id: 'accom3'},
    {city: 'Madrid', accommodation: 'Hyatt Centric Gran Vía', address: 'Calle Gran Vía 31', url: 'https://www.hyatt.com/hyatt-centric/es-ES/madct-hyatt-centric-gran-via-madrid', category: 'cat-4star', id: 'accom4'},
    {city: 'Madrid', accommodation: 'VP Plaza España Design', address: 'Plaza de España 5', url: 'https://www.plazaespana-hotel.com/', category: 'cat-4star', id: 'accom5'},
    {city: 'Madrid', accommodation: 'Barcelo Torre de Madrid', address: 'Plaza de España 18', url: 'https://www.barcelo.com/es-es/barcelo-torre-de-madrid/', category: 'cat-4star', id: 'accom6'},
    {city: 'Madrid', accommodation: 'Iberostar Las Letras Gran Vía', address: 'Direccion hotel 2', url: 'www.prueba2.com', category: 'cat-4star', id: 'accom7'},
    {city: 'Madrid', accommodation: 'Only YOU Boutique Hotel', address: 'Calle de Barquillo 21', url: 'https://www.onlyyouhotels.com', category: 'boutique', id: 'accom8'},
    {city: 'Madrid', accommodation: 'Madrid Gran Vía 25 by Melia', address: 'Calle Gran Vía 25', url: 'https://www.melia.com/es/hoteles/espana/madrid/hotel-madrid-gran-via-25-by-melia', category: 'cat-3star', id: 'accom9'},
    {city: 'Madrid', accommodation: 'Rosewood Villa Magna', address: 'Paseo de la Castellana 22', url: 'https://www.rosewoodhotels.com/en/villa-magna', category: 'cat-5star', id: 'accom10'},
    {city: 'Madrid', accommodation: 'ibis Madrid Aeropuerto Barajas', address: 'Av. General 49', url: 'https://all.accor.com/hotel/3753/index.es.shtml', category: 'cat-2star', id: 'accom11'},
    {city: 'Barcelona', accommodation: 'Hotel Thompson', address: 'Direccion hotel 2', url: 'www.prueba3.com', category: 'cat-5star', id: 'accom12'},]
    
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