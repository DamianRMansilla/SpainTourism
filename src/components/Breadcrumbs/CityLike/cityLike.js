import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faRegHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './cityLike.css'


export default function CityLike(){
    const likeStorage = localStorage.getItem('likes');
    var {city} = useParams();
    
    const [cityLike, setCityLike] = useState(JSON.parse(likeStorage) || []);
    
    useEffect(() => {
        localStorage.setItem('likes', JSON.stringify(cityLike));
    }, [cityLike]);

    const addCity = ()=>{
        setCityLike([...cityLike,city]);
    }
    
    const removeCity = () => {
        var newLikeStorage = likeStorage.replaceAll('[','').replaceAll(']','').replaceAll('"','').split(',');
        var pos = '';
        for(let i = 0; i <= newLikeStorage.length; i++){
           pos = newLikeStorage.indexOf(city);
        }

        var removeE = [];
        if(pos == newLikeStorage.length || pos == -1){
            removeE = [...newLikeStorage.slice(0,newLikeStorage.length)]
        } else{
            removeE = [
                ...newLikeStorage.slice(0,pos),
                ...newLikeStorage.slice(pos + 1)
            ]
        }

        setCityLike(removeE)
    }
    


    return(
        <>
            <div className='like-container'>
                <div className={cityLike && cityLike.includes(city) ? 'liked-heart-container' : 'not-liked-heart-container'} onClick={removeCity}>
                    <FontAwesomeIcon className='liked-heart' icon={faHeart} />
                </div>
                <div className='add-like'>
                </div>
                <div className={cityLike && cityLike.includes(city) ? 'not-liked-heart-container' : 'liked-heart-container'} onClick={addCity}>
                    <p>Agregar a tus favoritos</p>
                    <FontAwesomeIcon className='not-yet-liked-heart' icon={faRegHeart} />
                </div>
            </div>
        </>
    )
}