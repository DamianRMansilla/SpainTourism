import React, { useState } from 'react';
import "./newsletter.css"

export default function Newsletter(){
    const [suscript, setSuscript] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuscript(true)  
    };
      

    return(
        <>
            <form className={suscript? "noNewsletter": "newsletter"}>
                <h2 className="titulo">¡Suscríbete a nuestro newsletter con toda la ultima informacion turística!</h2>
                <div className="formInfo">
                    <div className="formInput">
                        <label htmlFor="nombre" className="name">Ingrese nombre y apellido</label>
                        <input type="text" id="nombre"></input>
                    </div>
                    <div className="formInput">
                        <label htmlFor="mail" className="mail">Ingrese su correo</label>
                        <input type="mail" id="mail"></input>
                    </div>
                </div>
                <button className="envioNewsletter" type="submit" onClick={handleSubmit}>¡Suscribirme!</button>
            </form>
            <div className={suscript? "suscripted" : "noSuscripted"}>
                <h1>¡Gracias por suscribirte!</h1>
            </div>
        
        </>
    )
}