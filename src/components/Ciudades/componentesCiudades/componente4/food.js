import React from 'react';
import { useParams } from 'react-router-dom';
import Besugo from '../../../../img/Food/besugoMadrileña.jpg';
import Callos from '../../../../img/Food/callosMadrileña.jpg';
import Bocata from '../../../../img/Food/bocadilloCalamares.jpg';
import HuevosRotos from '../../../../img/Food/huevosEstrellados.jpg';
import SopaAjo from '../../../../img/Food/sopaAjo.jpg';
import Tortilla from '../../../../img/Food/tortillaPatata.jpg';
import Bravas from '../../../../img/Food/patatasBravas.jpg';
import Caracoles from '../../../../img/Food/caracolesMadrileña.jpg';

import "./food.css"

export default function Food(){

    var {city} = useParams()
    var dishes = [{city: "Madrid", food_title: "Besugo a la Madrileña", id:1, img: Besugo},
                  {city: "Madrid", food_title: "Callos a la Madrileña", id:2, img: Callos}, 
                  {city: "Madrid", food_title: "Bocadillo de calamares", id:3, img: Bocata},
                  {city: "Madrid", food_title: "Huevos Rotos", id:4, img: HuevosRotos},
                  {city: "Madrid", food_title: "Sopa de ajo", id:5, img: SopaAjo},
                  {city: "Madrid", food_title: "Tortilla de patatas", id:6, img: Tortilla},
                  {city: "Madrid", food_title: "Patatas bravas", id:7, img: Bravas},
                  {city: "Madrid", food_title: "Caracoles a la Madrileña", id:8, img: Caracoles},
                  {city: "Barcelona", food_title: "Prueba", id:9}]
    return(
        <>
            <div className="foodGlobal">
                <h1 className='que-comer-ciudad'>Qué comer en {city}</h1>
                <p className='adit-info'>España se caracteriza por tener comidas abundantes, accesibles y sobre todo, deliciosas. No podes irte de {city} sin probar alguno de estos platos.</p>
                <div className="foodContainer">
                    {dishes.map(
                        dish =>{
                            if(dish.city === city){
                                return(
                                    <div key={dish.id} className='foodElement'>
                                        <img src={dish.img} className="foodImage"/>   
                                        <p className="foodName">{dish.food_title}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}