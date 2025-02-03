import React from "react";
export const allContexts = React.createContext();
export const accommodationContext = React.createContext();
export const tourContext = React.createContext();
export const mapCitiesContext = React.createContext();
export const listCommunitiesContext = React.createContext();

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
        {city: "Madrid", id: 1, inMap:'yes', topPosition:'43%', leftPosition:'48%', comunidad:'Madrid', desc:'Madrid es la capital vibrante de España, conocida por su impresionante oferta cultural, como el Museo del Prado, el Reina Sofía y el Palacio Real. La ciudad destaca por su vida nocturna, sus plazas emblemáticas como la Puerta del Sol y la Plaza Mayor, y su rica gastronomía.'}, 
        {city: "Barcelona", id:2, inMap:'yes', topPosition:'32%', leftPosition:'78%', comunidad:'Cataluña', desc:''}, 
        {city: "San Sebastián", id:3, inMap:'yes', topPosition:'14%', leftPosition:'60%', comunidad:'Pais Vasco', desc:''}, 
        {city: "Malaga", id:4, inMap:'yes', topPosition:'76%', leftPosition:'46%', comunidad:'Andalucía', desc:'Málaga ofrece sol, playas y cultura. Con monumentos como la Alcazaba y el Museo Picasso, su casco antiguo es un deleite para los turistas. Además, su clima cálido, su animada vida nocturna y su deliciosa gastronomía hacen de Málaga un destino ideal para disfrutar del Mediterráneo.'}, 
        {city: "Sevilla", id:5, inMap:'yes', topPosition:'72%', leftPosition:'32%', comunidad:'Andalucía', desc:'Sevilla es una ciudad histórica llena de encanto, famosa por su impresionante patrimonio como la Giralda, el Alcázar y la Plaza de España. Su vibrante cultura, el flamenco y eventos como la Feria de Abril y la Semana Santa hacen de Sevilla un destino único y lleno de tradición.'}, 
        {city: "Valencia", id:6, inMap:'yes', topPosition:'51%', leftPosition:'66%', comunidad:'Comunidad Valenciana', desc:''},
        {city: "Santiago de Compostela", id:7, inMap:'yes', topPosition:'22%', leftPosition:'19%', comunidad:'Galicia', desc:''}, 
        {city: "Mallorca", id:8, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Islas Baleares', desc:''},
        {city: "Pamplona", id:9, inMap:'yes', topPosition:'22%', leftPosition:'62%', comunidad:'Navarra', desc:''},
        {city: "La Coruña", id:10, inMap:'yes', topPosition:'17%', leftPosition:'18%', comunidad:'Galicia', desc:''},
        {city: "Cáceres", id:11, inMap:'yes', topPosition:'53%', leftPosition:'34%', comunidad:'Extremadura', desc:''},
        {city: "Córdoba", id:12, inMap:'yes', topPosition:'65%', leftPosition:'42%', comunidad:'Andalucía', desc:''},
        {city: "Ibiza", id:13, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Islas Baleares', desc:''},
        {city: "Bilbao", id:14, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Pais Vasco', desc:''},
        {city: "Tenerife", id:15, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Canarias', desc:''},
        {city: "Zaragoza", id:16, inMap:'yes', topPosition:'30%', leftPosition:'66%', comunidad:'Aragón', desc:''},
        {city: "Santander", id:17, inMap:'yes', topPosition:'14%', leftPosition:'50%', comunidad:'Cantabria', desc:''},
        {city: "Salamanca", id:18, inMap:'yes', topPosition:'38%', leftPosition:'38%', comunidad:'Castilla y León', desc:''},
        {city: "Valladolid", id:19, inMap:'yes', topPosition:'32%', leftPosition:'43%', comunidad:'Castilla y León', desc:''},
        {city: "Granada", id:20, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Almería", id:21, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Cádiz", id:22, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Huelva", id:23, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Jaén", id:24, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Ronda", id:25, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Marbella", id:26, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Jerez de la Frontera", id:27, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Úbeda", id:28, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Setenil de las Bodegas", id:29, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Nerja", id:30, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Torremolinos", id:31, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Benalmádena", id:32, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''},
        {city: "Mijas", id:33, inMap:'no', topPosition:'43%', leftPosition:'48%', comunidad:'Andalucía', desc:''}
    ]

  
  return (
      <mapCitiesContext.Provider value={citiesOnMap}>
            {children}
        </mapCitiesContext.Provider>
    )
    
}


export function ListaComunidades({children}){
    var listaComunidades = [
        {name: "Madrid", id: 1, desc:'La Comunidad de Madrid, por su parte, es el corazón de España, tanto geográfica como culturalmente. Madrid, su capital, es una de las ciudades más dinámicas y cosmopolitas de Europa, con una oferta cultural impresionante, que incluye museos de renombre mundial como el Museo del Prado, el Museo Reina Sofía y el Museo Thyssen-Bornemisza, donde se albergan algunas de las obras más famosas del arte universal. Además de su increíble patrimonio artístico, Madrid destaca por su vida nocturna, con una variedad de bares, restaurantes, teatros y discotecas, que la convierten en un destino perfecto para quienes buscan diversión y entretenimiento. La ciudad también es famosa por sus amplios parques como El Retiro y la Casa de Campo, ideales para pasear, hacer deporte o relajarse. Fuera de la capital, la Comunidad de Madrid ofrece encantadores pueblos, como Alcalá de Henares, cuna de Cervantes, y paisajes naturales como los del Parque Nacional de la Sierra de Guadarrama, perfectos para los amantes del senderismo y el aire libre. La región es una mezcla perfecta de tradición y modernidad, con una vibrante vida urbana, una rica historia, eventos culturales de primer nivel y una gastronomía variada que atrae a viajeros de todo el mundo.', title:'La Comunidad de Madrid: El Corazón Cultural y Moderno de España'}, 
        {name: "Andalucía", id: 2, desc:'Andalucía es una de las regiones más emblemáticas y cautivadoras de España, situada en el sur de la península ibérica. Con un rico legado histórico y cultural, esta tierra fusiona influencias romanas, musulmanas y cristianas, lo que se refleja en sus monumentos, arquitectura y tradiciones. Ciudades como Sevilla, Granada, Córdoba y Málaga albergan algunos de los principales tesoros del país, como la majestuosa Alhambra, la imponente Mezquita-Catedral y la Giralda, que son símbolos de su esplendor histórico. Andalucía no solo es famosa por su patrimonio, sino también por sus paisajes diversos, que van desde las montañas de Sierra Nevada, ideales para los amantes de la naturaleza y el senderismo, hasta sus kilométricas costas bañadas por el Mediterráneo y el Atlántico, perfectas para disfrutar del sol y el mar. Además, su clima cálido y soleado, junto con una gastronomía rica en sabores tradicionales, hacen de Andalucía un destino perfecto para aquellos que buscan una combinación de historia, arte, naturaleza, tradición y hospitalidad. La región también es conocida por su vibrante cultura, sus fiestas como la Feria de Abril en Sevilla y la Semana Santa, y su música, siendo el flamenco uno de sus máximos exponentes.', title:'Andalucía: Un Encuentro de Historia, Cultura y Naturaleza'},
        {name: "Galicia", id: 3, desc:'yes'},
        {name: "Cantabria", id: 4, desc:'yes'},
        {name: "Pais Vasco", id: 5, desc:'yes'},
        {name: "Navarra", id: 6, desc:'yes'},
        {name: "La Rioja", id: 7, desc:'yes'},
        {name: "Aragón", id: 8, desc:'yes'},
        {name: "Cataluña", id: 9, desc:'yes'},
        {name: "Comunidad Valenciana", id: 10, desc:'yes'},
        {name: "Islas Baleares", id: 11, desc:'yes'},
        {name: "Canarias", id: 12, desc:'yes'},
        {name: "Región de Murcia", id: 13, desc:'yes'},
        {name: "Extremadura", id: 14, desc:'yes'},
        {name: "Castilla La Mancha", id: 15, desc:'yes'},
        {name: "Castilla y León", id: 16, desc:'yes'},
        {name: "Principado de Asturias", id: 17, desc:'yes'}
    ]

  
  return (
        <listCommunitiesContext.Provider value={listaComunidades}>
            {children}
        </listCommunitiesContext.Provider>
    )
    
}