import React, { useState } from 'react';

import "./food.css"

export default function Food(){
    const [show, setShow] = useState(false)
    const showMore = () => setShow(true)

    return(
        <>
            <div className="foodGlobal">
                <h1>Que comer en Madrid?</h1>
                <div className="foodContainer">
                    <div className="foodImage">
                        <p className="foodName">Besugo a la Madrileña</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Callos a la Madrileña</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Bocadillo de calamares</p>
                    </div>    
                    <div className="foodImage">
                        <p className="foodName">Huevos Estrellados</p>
                    </div>    
                </div>
                <div className={show ? "seeMoreHidden" : "seeMore"}>
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
                </div>     
            </div>
        </>
    )
}