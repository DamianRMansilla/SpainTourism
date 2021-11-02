
const url = "http://dataservice.accuweather.com/currentconditions/v1/308526?apikey=yTKnSjn7dQpbBtx2KN2TS87vizFYUGYM&language=es-es&details=true HTTP/1.1"

/*http://dataservice.accuweather.com/currentconditions/v1/{locationKey}*/

export default function weather(){
    return fetch(url)
        .then(res => res.json())
        .then(response => { console.log(response);
            const localTemp = response[0].Temperature.Metric.Value;
            //setLocalTemp(localTemp);
            const localTempMetric = response[0].Temperature.Metric.Unit;
            //setLocalTempMetric(localTempMetric)
            const weatherDesc = response[0].WeatherText;
            //setWeatherDesc(weatherDesc)
            const realFeel = response[0].RealFeelTemperature;
            //setRealFeel(realFeel)
            const humidity = response[0].RelativeHumidity;
            //setHumidity(humidity)
            const localTime = response[0].LocalObservationDateTime;
            //setLocalTime(localTime)
            const weatherIcon = (response[0].WeatherIcon);
            //setWeatherIcon(weatherIcon);
            return [localTemp, localTempMetric, weatherDesc, realFeel, humidity, localTime, weatherIcon]
        })

}
