import { useContext } from 'react';
import { mapCitiesContext } from '../../Context/AllContext';


export default function CityOnMap(props){
    const citiesOnMap = useContext(mapCitiesContext);

    return(
        <>
            {citiesOnMap.map(
                citiesMap => {
                    var cityName = citiesMap.city.replaceAll(' ','-').toLowerCase();
                    var cityFunctionName = citiesMap.city.replaceAll(' ','').toLowerCase();
                    const addCity = ()=>{props.setLeftMap(cityFunctionName)};
                    if(citiesMap.inMap === 'yes'){
                        return(
                            <div style={{top:`${citiesMap.topPosition}`,left:`${citiesMap.leftPosition}`}} className={`city-location ${cityName}-location`} onMouseEnter={addCity}>
                                <span className='city-location-round'></span>
                                <span className='city-name'>{`${citiesMap.city}`}</span>
                            </div>
                        )
                    }
                }
            )}
        </>
    )
}