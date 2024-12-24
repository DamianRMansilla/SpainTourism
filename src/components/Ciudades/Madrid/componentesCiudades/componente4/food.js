import React from 'react';
import { useParams } from 'react-router-dom';

import "./food.css"

export default function Food(){

    var {city} = useParams()
    var dishes = [{city: "Madrid", food_title: "Besugo a la Madrileña", id:1},
                  {city: "Madrid", food_title: "Callos a la Madrileña", id:2}, 
                  {city: "Madrid", food_title: "Bocadillo de calamares", id:3},
                  {city: "Madrid", food_title: "Huevos Rotos", id:4},
                  {city: "Madrid", food_title: "Sopa de ajo", id:5},
                  {city: "Madrid", food_title: "Tortilla de patatas", id:6},
                  {city: "Madrid", food_title: "Patatas bravas", id:7},
                  {city: "Madrid", food_title: "Caracoles a la Madrileña", id:8},
                  {city: "Barcelona", food_title: "Prueba", id:9}]
    return(
        <>
            <div className="foodGlobal">
                <h1 className='que-comer-ciudad'>¿Que comer en {city}?</h1>
                <p className='adit-info'>España se caracteriza por tener comidas abundantes, accesibles y sobre todo, deliciosas. No podes irte de {city} sin probar alguno de estos platos.</p>
                <div className="foodContainer">
                    {dishes.map(
                        dish =>{
                            if(dish.city === city){
                                return(
                                    <div key={dish.id} className="foodImage">
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