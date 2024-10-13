import { Link, useParams } from "react-router-dom"
import "./descripcionCiudad.css"

export default function DescripcionCiudad(){
    var {city} = useParams()
    var titles = [{localCity: "Madrid", title: "Madrid, ciudad cosmopolita.", desc: ['Madrid, la capital de España, es una ciudad que combina a la perfección la rica historia con una energía contemporánea. Pasear por sus calles es sumergirse en un universo de cultura, arte y gastronomía. Desde el majestuoso Palacio Real, que se alza como un símbolo de la monarquía española, hasta la icónica Puerta del Sol, el corazón palpitante de la ciudad, cada rincón tiene una historia que contar.',<br />,<br />,'Los amantes del arte encontrarán su paraíso en el Triángulo del Arte, donde se ubican el Museo del Prado, el Museo Reina Sofía y el Museo Thyssen-Bornemisza. Estas instituciones albergan obras maestras de grandes artistas como Velázquez, Goya y Picasso.',<br/>,<br/>,'Madrid también es famosa por su vibrante vida nocturna. Barrios como Malasaña y La Latina ofrecen una mezcla de bares, terrazas y tabernas donde disfrutar de tapas y cócteles en un ambiente animado. No olvides probar la deliciosa gastronomía local, que va desde el clásico bocadillo de calamares hasta los suculentos churros con chocolate.',<br />,<br/>,'Los espacios verdes, como el Parque del Retiro, brindan un respiro en medio del bullicio urbano. Aquí, puedes alquilar una barca en el estanque, pasear entre estatuas y jardines o simplemente relajarte bajo la sombra de un árbol.',<br />,<br/>,'La diversidad de Madrid se refleja en sus festivales y eventos a lo largo del año, desde las fiestas de San Isidro hasta el orgullo LGTBI. Cada visita a la ciudad promete ser única y memorable.',<br />,<br/>,'Con su mezcla de historia, cultura, arte y gastronomía, Madrid es un destino que invita a ser explorado. ¡No te pierdas la oportunidad de descubrir todo lo que esta fascinante ciudad tiene para ofrecer!']},
                  {localCity: "Barcelona", title: "Barcelona, como nunca antes.", desc: ['Barcelona es una ciudad vibrante que deslumbra a sus visitantes con una mezcla única de historia, cultura y modernidad. A orillas del Mediterráneo, su arquitectura es un festín visual, destacando la icónica Sagrada Familia de Antoni Gaudí, cuya majestuosidad te dejará sin aliento. El Parque Güell, con sus mosaicos coloridos y esculturas fantásticas, invita a un paseo entre la naturaleza y el arte.',<br />,<br />,'El Barri Gòtic, con sus calles empedradas y su atmósfera medieval, es el lugar ideal para perderse, donde cada rincón cuenta una historia. La Catedral de Barcelona y la Plaça del Rei son paradas obligadas para quienes deseen sumergirse en el pasado de la ciudad. Para los amantes del arte, el Museo Picasso alberga una impresionante colección que refleja la evolución del genio.',<br />,<br />,'La gastronomía de Barcelona es otro de sus grandes atractivos. Desde sabrosas tapas en los bares locales hasta sofisticados platos en restaurantes de renombre, cada comida es una experiencia. No olvides visitar el Mercado de La Boqueria, un paraíso de productos frescos y locales.',<br />,<br />,'Las playas, como la popular Barceloneta, ofrecen un respiro perfecto para relajarse bajo el sol o disfrutar de actividades acuáticas. Al caer la tarde, la ciudad cobra vida con su animada vida nocturna, llena de bares y música en vivo.',<br />,<br />,'Los festivales como La Mercè, con sus desfiles y conciertos, y el colorido Carnaval, transforman las calles en una celebración continua. Barcelona es, sin duda, un lugar donde la historia y la modernidad se entrelazan, ofreciendo a cada visitante una experiencia inolvidable que deja huella en el corazón. ¡Ven a descubrir todo lo que esta fascinante ciudad tiene para ofrecer!']},
                  {localCity: "Bilbao", title: 306186},
                  {localCity: "San Sebastian", title: 2324048},
                  {localCity: "Malaga", title: 306732}];
    
    for(let i = 0; i < titles.length; i++){
        if(city === titles[i].localCity){
            var mainTitle = titles[i].title;
            var description = titles[i].desc;
        }}
        
    return(
        <>
            <div className="cityMain">
                <div className="cityDescription">
                    <h2>{mainTitle}</h2>
                    <p>{description}</p>
                </div>
                <div className="cityButtons">
                    <p className="desc-title">Información sobre <strong>{city}</strong></p>
                    <ul className="button-list">
                        <Link className="cityButton" to={`${city}/Alojamiento#AccommodationTitle`}>
                            <li><i class="fa-solid fa-bed"></i>Hoteles y alojamientos.</li>
                        </Link>
                        <Link className="cityButton" to={`${city}/Tours`}>
                            <li><i class="fa-solid fa-bus"></i>Paseos, visitas y excursiones.</li>
                        </Link>
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-utensils"></i>Restaurantes y gastronomía.</li>
                        </Link>
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-plane-arrival"></i>Como llegar.</li>
                        </Link>
                        <Link className="cityButton" to="/">
                            <li><i class="fa-solid fa-suitcase"></i>Agencias de viaje.</li>
                        </Link>
                        <Link className="cityButton last-child" to="/">
                            <li><i class="fa-solid fa-calendar"></i>Calendario de festividades.</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
    {/* <i class="fas fa-plane"></i> */}
}