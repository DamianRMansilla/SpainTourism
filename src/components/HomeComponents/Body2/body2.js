import Body2City from "./CitiesComponent/citycomponent"

export default function MainCities(props){

    return(
        <div className="masVisitadosGlobal">
            <h1 className="title">Destinos mas visitados</h1>
            <p className="subtitle1">Con o sin playa, en verano o en invierno, no puedes irte de España sin conocer estas ciudades.</p>
            <div className="cardContainer">
                <Body2City/>
            </div>
        </div>
    )
}
