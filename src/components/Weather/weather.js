import React, { useState, useEffect } from 'react';
import "./weather.css";
import { useParams } from 'react-router-dom';
// import weather from './weatherFunction';

export default function WeatherApi(){

    var url = [];
    var cities = [{ciudad: "Madrid", ID: 308526},{ciudad: "Barcelona", ID: 307297},{ciudad: "Bilbao", ID: 306186},{ciudad: "SanSebastian", ID: 2324048},{ciudad: "Malaga", ID: 306732},{ciudad: "Sevilla", ID: 306733},{ciudad: "Valencia", ID: 310683},{ciudad: "SantiagoDeCompostela", ID: 307771},{ciudad: "Mallorca", ID: 308014}];
    let { city } = useParams();

    for(let i = 0; i < cities.length; i++){
        if(city === cities[i].ciudad){
            url = `http://dataservice.accuweather.com/currentconditions/v1/${cities[i].ID}?apikey=yTKnSjn7dQpbBtx2KN2TS87vizFYUGYM&language=es-es&details=true HTTP/1.1`
        }
    }
    
    const [localTemp, setLocalTemp] = useState([]);
    const [localTempMetric, setLocalTempMetric] = useState([]); 
    const [weatherDesc, setWeatherDesc] = useState([])
    
    const [localTime, setLocalTime] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState([]);

    
    useEffect(function(){
        /*weather().then(localTemp =>setLocalTemp(localTemp));
        weather().then(localTempMetric =>setLocalTempMetric(localTempMetric));
        weather().then(weatherDesc =>setWeatherDesc(weatherDesc));
        weather().then(realFeel =>setRealFeel(realFeel));
        weather().then(humidity =>setHumidity(humidity));
        weather().then(localTime =>setLocalTime(localTime));
        weather().then(weatherIcon =>setWeatherIcon(weatherIcon));*/
        fetch(url)
        .then(res => res.json())
        .then(response => { 
            const weatherIcon = response[0].WeatherIcon;
            setWeatherIcon(weatherIcon);
            const localTemp = response[0].Temperature.Metric.Value;
            setLocalTemp(localTemp);
            const localTempMetric = response[0].Temperature.Metric.Unit;
            setLocalTempMetric(localTempMetric)
            const weatherDesc = response[0].WeatherText;
            setWeatherDesc(weatherDesc)
            const localTime = response[0].LocalObservationDateTime.slice(0, 10) + " " + response[0].LocalObservationDateTime.slice(11, 16);
            setLocalTime(localTime)
        })
    },[])
    return(
        <>
            <div className="weather">
                <div className="weatherFirstContainer">
                    <p className='temperatureP'>Temperatura actual en {city}, España </p><p className='temperature-additional-info'>(Ultima actualizacion: {localTime} hs)</p>
                </div>
                <div className='weatherInfo'>
                    <div className='weatherInfoData'>
                        <div className='visual-info'>
                            <p className="temperature">{localTemp}°{localTempMetric}</p>
                            <p className="tempDesc">{weatherDesc}</p>
                        </div>
                        <div className='weatherIconContainer'>
                            <img className="weatherIcon" src={ process.env.PUBLIC_URL + `/img/WeatherImages/${weatherIcon}.png` } alt="Weather Icon"/>
                        </div>
                    </div>
                </div>   
            </div>
        </>
    )
}