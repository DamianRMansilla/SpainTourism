import React, {useRef, useEffect} from 'react';
import "./carousel.css"
import {IoIosArrowBack} from "react-icons/io"
import {IoIosArrowForward} from "react-icons/io"

export default function Carousel(){
    const slideshow = useRef(null);
    const intervaloSlideshow = useRef(null);
    
    const siguiente = () =>{
        if(slideshow.current && (slideshow.current.children.length > 0)){
            const primerElemento = slideshow.current.children[0];

            // Transicion del slideshow
            slideshow.current.style.transition = "1000ms ease-out all";

            // Movemos el slideshow
            const imgWidth = slideshow.current.children[0].offsetWidth

            slideshow.current.style.transform = `translateX(-${imgWidth}px)`;
            // slideshow.current.style.transform = "translateX(-800px)";

            const transicion = () => {
                // Reiniciamos la posicion del slideshow
                slideshow.current.style.transition = "none";
                slideshow.current.style.transform = "translateX(0)";

                // Enviamos el primer elemento al final
                slideshow.current.appendChild(primerElemento);

                // Cortamos con el evento
                slideshow.current.removeEventListener("transitionend", transicion)
            }

            // Eventlistener para cuando termina la animacion
            slideshow.current.addEventListener("transitionend", transicion)
            
        }
    }

    const anterior = () =>{
        if(slideshow.current && (slideshow.current.children.length > 0)){
            const index = slideshow.current.children.length - 1;
            const ultimoElemento = slideshow.current.children[index];

            // Enviamos el primer elemento al final
            slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild)

            // Movemos el slideshow
            slideshow.current.style.transition = "none";
            const imgWidth = slideshow.current.children[0].offsetWidth
            //chequear como poner la funcion en vez del numero dentro de style
            slideshow.current.style.transform = `translateX(-${imgWidth}px)`;
            // slideshow.current.style.transform = "translateX(-800px)";

            setTimeout(()=>{
                slideshow.current.style.transition = "1000ms ease-out all"
                slideshow.current.style.transform = "translateX(0)";

            }, 30)
            
        }
    }

    useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            siguiente();
        }, 3500);

        // Eliminamos los intervalos
        slideshow.current.addEventListener("mouseenter", ()=>{
            clearInterval(intervaloSlideshow.current);
        })

        // Reactivamos intervalo
        slideshow.current.addEventListener("mouseleave", ()=>{
            intervaloSlideshow.current = setInterval(() => {
                siguiente();
            }, 3500);
        })

    }, [])

    return(
        <>
            <div className='slide-general-container'>

                <div className="slideshowMainContainer">
                    
                    <div className="slideshowContainer" ref={slideshow}>
                        <div className="slide slide1">
                            <a href="https://www.infobae.com">
                                {/*<img src={img1}/>*/}
                                {/* <p>Madrid</p> */}
                            </a>
        
                        </div>
                        <div className="slide slide2">
                            <a href="https://www.infobae.com">
                                {/* <p>Barcelona</p> */}
                            </a>
                            
                        </div>
                        <div className="slide slide3">
                            <a href="https://www.infobae.com"></a>
                            {/*<p>Valencia</p>*/}
                        </div>
                        <div className="slide slide4">
                            <a href="https://www.infobae.com"></a>
                            {/*<p>Malaga</p>*/}
                        </div>
                    </div>
                    <div className="controls">
                        <button className="slideshowButtons izquierdo" onClick={anterior}><IoIosArrowBack/></button>
                        <button className="slideshowButtons derecho" onClick={siguiente}><IoIosArrowForward/></button>
                    </div>
                    
                </div>
            </div>
            
        </>
    )
}