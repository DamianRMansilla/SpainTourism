import React/*{ useState }*/ from 'react';
import { useParams } from 'react-router-dom';

import "./food.css"

export default function Food(){
    // const [show, setShow] = useState(false)
    // const showMore = () => setShow(true)
    var {city} = useParams()
    var dishes = [{city: "Madrid", food_title: "Besugo a la Madrileña"},
                  {city: "Madrid", food_title: "Callos a la Madrileña"}, 
                  {city: "Madrid", food_title: "Bocadillo de calamares"},
                  {city: "Madrid", food_title: "Huevos Rotos"},
                  {city: "Madrid", food_title: "Sopa de ajo"},
                  {city: "Madrid", food_title: "Tortilla de patatas"},
                  {city: "Madrid", food_title: "Patatas bravas"},
                  {city: "Madrid", food_title: "Caracoles a la Madrileña"},
                  {city: "Barcelona", food_title: "Prueba"}]
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
                                    <div className="foodImage">
                                        <p className="foodName">{dish.food_title}</p>
                                    </div>    
                                )
                            }
                    })

                    }
                    {/* <div className="foodImage">
                        <p className="foodName">Callos a la Madrileña</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Bocadillo de calamares</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Huevos Rotos</p>
                    </div>     */}
                </div>
                {/* <div className={show ? "seeMoreHidden" : "seeMore"}>
                    <button onClick={showMore}>Ver mas...</button>
                </div>
                <div className={show? "foodContainer1": "foodContainer1Hidden"}>
                    <div className="foodImage">
                        <p className="foodName">Sopa de ajo</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Tortilla de patatas</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Patatas bravas</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Caracoles a la Madrileña</p>
                    </div>
                </div>      */}
            </div>
        </>
    )
}