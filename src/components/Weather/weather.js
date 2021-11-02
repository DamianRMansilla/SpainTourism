import React, { useState, useEffect } from 'react';
import "./weather.css";
import weathImg from "../../img/WeatherImages/1.png";

import weather from './weatherFunction';

const url = "http://dataservice.accuweather.com/currentconditions/v1/308526?apikey=yTKnSjn7dQpbBtx2KN2TS87vizFYUGYM&language=es-es&details=true HTTP/1.1"


export default function WeatherApi(){

    
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
        .then(response => { console.log(response);
            const localTemp = response[0].Temperature.Metric.Value;
            setLocalTemp(localTemp);
            const localTempMetric = response[0].Temperature.Metric.Unit;
            setLocalTempMetric(localTempMetric)
            const weatherDesc = response[0].WeatherText;
            setWeatherDesc(weatherDesc)
            const localTime = response[0].LocalObservationDateTime.slice(0, 10) + " " + response[0].LocalObservationDateTime.slice(11, 16);
            setLocalTime(localTime)
            const weatherIcon = response[0].WeatherIcon;
            setWeatherIcon(weatherIcon);


        })
    },[])
    return(
        <>
            <div className="weather">
                <div className="weatherFirstContainer">
                    <p>Temperatura actual en Madrid, España </p><p>(Ultima actualizacion: {localTime} hs)</p>
                    <p className="temperature">{localTemp}°{localTempMetric}</p>
                    <p className="tempDesc">{weatherDesc}</p>
                </div>        
                <div> 
                    <img src={`../../img/WeatherImages/${weatherIcon}.png`}/>
                    <img src={weathImg}/>
                    <p>{weatherIcon}</p>
                </div>
            </div>
        </>
    )

}