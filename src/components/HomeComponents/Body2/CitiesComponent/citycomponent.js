import Madrid from "../../../../img/Cities/madrid.jpg"
import Barcelona from "../../../../img/Cities/barcelona.jpg"
import Malaga from "../../../../img/Cities/malaga.jpg"
import Sevilla from "../../../../img/Cities/sevilla.jpg"
import Valencia from "../../../../img/Cities/valencia.jpg"
import SanSebastian from "../../../../img/Cities/peineViento.jpg"
import SantiagoDeCompostela from "../../../../img/Cities/catedralSantiagoCompostela.jpg";
import Mallorca from "../../../../img/Cities/mallorca.jpg";
import { HashLink as Link } from "react-router-hash-link";


export default function Body2City(){

    var mainCities = [
        {city: "Madrid", id: 1, class: "madrid-city", route: 'mercadosanmiguel', img: Madrid, playa: 'no', shortDesc:'Madrid, capital de España, es conocida por su rica historia y cultura. Destacan el Museo del Prado, el Palacio Real y la Plaza Mayor. Ofrece excelente gastronomía, vida nocturna animada y un ambiente acogedor.'}, 
        {city: "Barcelona",  id: 2, class: "barcelona-city", route: 'alhambra', img: Barcelona, playa: 'no', shortDesc:'Barcelona, una ciudad vibrante y costera, destaca por su arquitectura única, como la Sagrada Familia y el Parque Güell. Ofrece hermosas playas, una rica oferta cultural y gastronómica, y una animada vida nocturna.'}, 
        {city: "Malaga",  id: 3, class: "malaga-city", route: 'ronda', img: Malaga, playa: 'no', shortDesc:'Málaga, en la Costa del Sol, es famosa por su clima, playas y patrimonio histórico. Destacan la Alcazaba, el Museo Picasso y la Catedral. Ofrece una excelente gastronomía, ambiente relajado y una vibrante vida cultural.'}, 
        {city: "Mallorca",  id: 4, class: "mallorca-city", route: 'bachiadelaconcha', img: Mallorca, playa: 'no', shortDesc:'Mallorca es un destino paradisíaco con playas de aguas cristalinas, montañas impresionantes y pueblos pintorescos. Su patrimonio cultural, gastronomía y clima mediterráneo la convierten en un lugar ideal para todo tipo de viajeros.'},
        {city: "San Sebastián",  id: 5, class: "sansebastian-city", route: 'toledo', img: SanSebastian, playa: 'no', shortDesc:'San Sebastián, en el País Vasco, es famosa por su bahía de La Concha, su gastronomía de pintxos y su ambiente cosmopolita. Rodeada de montes y playas, ofrece una mezcla única de belleza natural y cultura.'}, 
        {city: "Santiago de Compostela",  id: 6, class: "santiagodecompostela-city", route: 'caminodesantiago', img: SantiagoDeCompostela, playa: 'no', shortDesc:'Santiago de Compostela, en Galicia, es famosa por su Catedral, destino final del Camino de Santiago. Su casco antiguo, Patrimonio de la Humanidad, cautiva con calles empedradas, plazas y una rica historia religiosa y cultural.'}, 
        {city: "Sevilla",  id: 7, class: "sevilla-city", route: 'museodelprado', img: Sevilla, playa: 'no', shortDesc:'Sevilla, en el sur de España, es una ciudad llena de historia y tradición. Destacan su impresionante Alcázar, la majestuosa Catedral y la Giralda. Su vibrante ambiente flamenco, gastronomía y clima soleado la convierten en un destino único.'}, 
        {city: "Valencia",  id: 8, class: "valencia-city", route: 'mercadolaboqueria', img: Valencia, playa: 'no', shortDesc:'Valencia combina modernidad y tradición. Su Ciudad de las Artes y las Ciencias es un icono arquitectónico, mientras que su casco antiguo ofrece monumentos como la Lonja y la Catedral. Famosa por su paella y playas.'},
    ]

    return(
        <>
            {mainCities.map(
                mainCity =>{
                    var cityNoSpaces = mainCity.city.replaceAll(' ','');
                    console.log(mainCity.id)
                    return(
                        <Link to={`/Ciudades/${cityNoSpaces}#imageCity`} key={mainCity.id}>
                            <div className="cardImageText">
                                <div className={`imageCardHeight ${mainCity.class} city-image-main`}></div>
                                <p className="city-name">{mainCity.city}</p>
                                <p className="city-short-description">{mainCity.shortDesc}</p>
                            </div>
                        </Link>
                    )
                }
            )}
        </>
    )
}