import './SpainMap.css'
import { useState } from 'react';
import CityComponent from './CityComponent/citycomponent';
import CityOnMap from './CityOnMap/cityonmap';

export default function SpainMap(){
    const [showCommunityMap, setShowCommunityMap] = useState(false);
    const [leftMap, setLeftMap] = useState('madrid');

    const communityMap = () => {
        setShowCommunityMap(false)  
    };

    const cityMap = () => {
        setShowCommunityMap(true)  
    };

    console.log(leftMap)

    return(
        <div className='SpainMapContainer'>
            <h1 className='title'>¿Dónde quieres ir?</h1>
            <p className='subtitle1'>Visita nuestras ciudades mas icónicas</p>
            <div className='SpainMap'>
                <div className='button-map-container'>
                    <button className={`mapa-ciudades ${showCommunityMap?'':'unavailable'}`} onClick={communityMap}>Ver mapa por ciudades</button>
                    <button className={`mapa-comunidades ${showCommunityMap?'unavailable':''}`} onClick={cityMap}>Ver mapa por comunidades</button>
                </div>
                <p className={`subtitle2 ${showCommunityMap?'dispNone':''}`}>Elije la ciudad que quieres ver:</p>
                <p className={`subtitle2 ${showCommunityMap?'':'dispNone'}`}>Elije la comunidad que quieres ver:</p>
                <section className='map-element-container'>
                    <div className='map-overlay-container'>
                        <svg width="600" height="500" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 100 168 L99 160 L106 154 L100 155 L100 152 L107 144 L100 148 L104 138 L92 146 L98 134 L102 130 L94 130 L92 134 L90 132 L88 130 L90 127 L84 121 L81 118 L82 112 L82 111 L90 100 L93 97 L100 96 L105 96 L115 97 L116 96 L114 85 L115 84 L120 76 L121 75 L130 74 L134 74 L135 74 L136 75 L137 76 L144 82 L160 83 L175 82 L200 82 L205 78 L210 82 L220 84 L230 85 L260 86 L279 87 L280 86 L283 85 L282 85 L315 78 L340 86 L340 80 L341 79 L341 78 L342 77 L345 76 L360 77 L378 83 L387 81 L400 88 L396 98 L400 101 L402 96 L435 112 L465 115 L465 108 L495 113 L510 115 L520 116 L530 114 L531 150 L506 170 L499 182 L474 192 L466 193 L458 202 L419 266 L415 275 L414 278 L416 290 L419 295 L428 300 L426 302 L424 304 L408 318 L404 322 L396 345 L398 347 L403 350 L390 354 L387 355 L385 358 L381 360 L370 370 L365 380 L362 390 L350 405 L345 409 L338 406 L337 405 L330 400 L329 400 L328 401 L322 407 L320 409 L318 408 L295 407 L290 410 L260 408 L255 407 L240 409 L230 414 L220 420 L210 430 L205 433 L203 433 L202 430 L190 410 L175 400 L170 400 L155 405 L150 385 L153 375 L162 365 L166 365 L168 358 L162 360 L155 345 L156 330 L168 317 L168 317 L169 316 L146 290 L156 290 L164 288 L167 280 L169 278 L171 272 L165 268 L165 264 L172 259 L173 250 L172 232 L168 224 L177 222 L177 220 L183 210 L186 211 L200 185 L190 178 L187 180 L185 174 L187 168 L185 166 L160 163 L158 170 L130 172 L126 176 L123 168 L128 162 L124 155 L120 160 L107 163 Z" fill='#1A202C' stroke='#EAF0FC' strokeWidth={2} className={`mapa-general ${showCommunityMap?'dispNone':''}`}/> // General
                            <path d="M 100 168 L99 160 L106 154 L100 155 L100 152 L107 144 L100 148 L104 138 L92 146 L98 134 L102 130 L94 130 L92 134 L90 132 L88 130 L90 127 L84 121 L81 118 L82 112 L82 111 L90 100 L93 97 L100 96 L105 96 L115 97 L116 96 L114 85 L115 84 L120 76 L121 75 L130 74 L134 74 L135 74 L136 75 L137 76 L144 82 L157 84 L154 90 L159 107 L165 109 L162 112 L170 118 L164 126 L163 134 L176 139 L177 141 L177 146 L176 146 L176 147 L176 148 L166 157 L170 158 L168 164 L160 163 L158 170 L130 172 L126 176 L123 168 L128 162 L124 155 L120 160 L107 163 z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-galicia ${showCommunityMap?'':'dispNone'}`}/> // Galicia
                            <path d="M 157 83 L154 90 L159 107 L165 109 L162 112 L170 118 L180 117 L182 114 L194 112 L200 116 L201 117 L202 117 L203 117 L207 111 L208 111 L209 111 L215 114 L216 114 L224 112 L228 109 L234 103 L235 103 L237 110 L242 109 L250 104 L254 94 L256 89 L230 87 L220 85 L210 83 L205 78 L200 82 L175 82 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-asturias ${showCommunityMap?'':'dispNone'}`}/> // Asturias
                            <path d="M 237 110 L240 116 L242 118 L244 120 L260 118 L261 118 L265 124 L269 124 L270 125 L271 132 L276 135 L279 136 L284 136 L288 134 L292 130 L292 124 L287 124 L286 123 L285 122 L284 121 L284 120 L284 119 L284 118 L289 114 L297 110 L310 104 L315 106 L322 106 L322 97 L340 87 L340 86 L315 78 L282 85 L283 85 L280 86 L279 87 L256 89 L254 94 L250 104 L242 109 L237 110" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-cantabria ${showCommunityMap?'':'dispNone'}`}/> // Cantabria
                            <path d="M 340 87 L322 97 L322 106 L322 105 L330 102 L334 99 L336 98 L341 102 L344 101 L343 106 L343 112 L346 116 L344 120 L332 120 L329 125 L350 134 L356 135 L362 139 L364 140 L368 130 L374 122 L377 110 L379 100 L385 90 L391 83 L387 81 L378 83 L360 77 L345 76 L342 77 L341 78 L341 79 L340 80 L340 86" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-pais-vasco ${showCommunityMap?'':'dispNone'}`}/> // Pais Vasco
                            <path d="M 391 83 L385 90 L379 100 L377 110 L374 122 L368 130 L364 140 L362 139 L367 142 L377 148 L379 153 L376 151 L377 152 L381 154 L386 158 L387 160 L387 160 L386 158 L385 159 L383 159 L376 159 L377 170 L377 171 L378 172 L383 174 L388 175 L394 176 L400 177 L401 176 L401 175 L404 171 L406 167 L408 167 L406 166 L407 165 L405 163 L404 161 L402 156 L401 152 L402 147 L407 136 L411 125 L415 115 L418 104 L402 96 L400 101 L396 98 L400 88 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-navarra ${showCommunityMap?'':'dispNone'}`}/> // Navarra
                            <path d="M 418 104 L435 112 L465 115 L472 120 L469 125 L467 130 L461 140 L459 150 L450 162 L446 167 L446 169 L451 170 L446 180 L441 192 L438 203 L434 213 L422 210 L422 211 L410 236 L390 226 L392 220 L392 212 L388 206 L384 202 L378 198 L382 186 382 172 L383 174 L388 175 L394 176 L400 177 L401 176 L401 175 L404 171 L406 167 L407 167 L407 166 L407 165 L405 163 L404 161 L402 156 L401 152 L402 147 L407 136 L411 125 L415 115 L418 104" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-aragon ${showCommunityMap?'':'dispNone'}`}/> // Aragon
                            <path d="M 465 115 L465 108 L495 113 L510 115 L520 116 L530 114 L531 150 L506 170 L499 182 L474 192 L466 193 L458 202 L447 220 L444 214 L439 214 L434 213 L438 203 L441 192 L446 180 L451 170 L446 169 L446 167 L450 162 L459 150 L461 140 L467 130 L469 125 L472 120 L465 115" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-cataluña ${showCommunityMap?'':'dispNone'}`}/> // Cataluña
                            <path d="M 345 131 L350 134 L356 135 L362 139 L362 139 L367 142 L377 148 L379 153 L376 151 L377 152 L381 154 L386 158 L387 160 L387 160 L386 158 L384 159 L383 159 L376 159 L377 170 L377 171 L378 172 L382 174 L382 172 L382 177 L374 180 L365 178 L360 164 L359 162 L347 160 L342 172 L342 172 L336 172 L338 164 L334 164 L333 172 L326 169 L322 163 L323 152 L323 140 L324 132 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-la-rioja ${showCommunityMap?'':'dispNone'}`}/> La Rioja
                            <path d="M 399 231 L410 236 L422 211 L422 210 L434 213 L439 214 L444 214 L447 220 L419 266 L415 275 L414 278 L416 290 L419 295 L428 300 L426 302 L424 304 L408 318 L404 322 L398 340 L392 330 L389 305 L393 305 L392 295 L386 295 L383 292 L387 280 L378 276 L377 274 L376 272 L376 270 L377 265 L387 252 L389 252 L399 231" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-valencia ${showCommunityMap?'':'dispNone'}`}/> // Valencia
                            <path d="M 389 305 L392 330 L398 340 L396 345 L398 347 L403 350 L390 354 L387 355 L385 358 L381 360 L370 370 L360 365 L350 352 L351 342 L345 341 L338 334 L360 314 L363 317 L370 315 L370 305 L380 303 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-murcia ${showCommunityMap?'':'dispNone'}`}/> // Murcia
                            <path d="M 338 334 L345 341 L351 342 L350 352 L360 365 L370 370 L365 380 L362 390 L350 405 L345 409 L338 406 L337 405 L330 400 L329 400 L328 401 L322 407 L320 409 L318 408 L295 407 L290 410 L260 408 L255 407 L240 409 L230 414 L220 420 L210 430 L205 433 L203 433 L202 430 L190 410 L175 400 L170 400 L155 405 L150 385 L153 375 L162 365 L166 365 L168 358 L180 365 L190 366 L195 366 L210 362 L215 355 L214 340 L215 339 L216 338 L239 316 L260 332 L270 336 L280 335 L295 330 L325 324 L329 330 L325 335 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-andalucia ${showCommunityMap?'':'dispNone'}`}/> // Andalucia
                            <path d="M 378 198 L384 202 L388 206 L392 212 L392 220 L390 226 L399 231 L389 252 L387 252 L377 265 L376 270 L376 272 L377 274 L378 276 L387 280 L383 292 L386 295 L392 295 L393 305 L389 305 L380 303 L370 305 L370 315 L363 317 L360 314 L338 334 L325 335 L329 330 L325 324 L295 330 L280 335 L270 336 L260 332 L241 318 L242 304 L250 305 L246 300 L250 290 L243 295 L236 290 L238 284 L237 276 L231 282 L232 274 L227 275 L228 254 L235 252 L270 247 L330 258 L310 200 L330 195 L335 195 L355 205 L380 205 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-castilla-la-mancha ${showCommunityMap?'':'dispNone'}`}/> // Castilla La Mancha
                            <path d="M 241 318 L239 316 L216 338 L215 339 L214 340 L215 355 L210 362 L195 366 L190 366 L180 365 L168 358 L162 360 L155 345 L156 330 L168 317 L168 317 L169 316 L146 290 L156 290 L164 288 L167 280 L169 278 L171 272 L165 268 L165 264 L172 259 L183 258 L184 254 L185 253 L200 245 L220 255 L222 253 L226 250 L228 250 L227 275 L232 274 L231 282 L237 276 L238 284 L236 290 L243 295 L250 290 L246 300 L250 305 L242 304 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-extremadura ${showCommunityMap?'':'dispNone'}`}/> // Extremadura
                            <path d="M 310 200 L330 258 L270 247 L258 248.5 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-madrid ${showCommunityMap?'':'dispNone'}`}/> // Madrid
                            <path d="M 168 164 L170 158 L166 157 L176 148 L176 147 L176 146 L177 146 L177 141 L176 139 L163 134 L164 126 L170 118 L180 117 L182 114 L194 112 L200 116 L201 117 L202 117 L203 117 L207 111 L208 111 L209 111 L215 114 L216 114 L224 112 L228 109 L234 103 L235 103 L237 110 L240 116 L242 118 L244 120 L260 118 L261 118 L265 124 L269 124 L270 125 L271 132 L276 135 L279 136 L284 136 L288 134 L292 130 L292 124 L287 124 L286 123 L285 122 L284 121 L284 120 L284 119 L284 118 L289 114 L297 110 L310 104 L315 106 L322 106 L322 105 L330 102 L334 99 L336 98 L341 102 L344 101 L343 106 L343 112 L346 116 L344 120 L332 120 L329 125 L342 130  L324 132 L323 140 L323 152 L322 163 L326 169 L333 172 L334 164 L338 164 L336 172 L342 172 L342 172 L347 160 L359 162 L360 164 L365 178 L374 180 L382 177 L382 186 L378 198 L380 205 L355 205 L335 195 L330 195 L310 200 L258 248.5 L258 249 L235 252 L228 254 L228 250 L226 250 L222 253 L220 255 L200 245 L185 253 L184 254 L183 258 L172 260 L173 250 L172 232 L168 224 L177 222 L177 220 L183 210 L186 211 L200 185 L190 178 L187 180 L185 174 L187 168 L185 166 Z" stroke='#EAF0FC' strokeWidth={2} fill='#1A202C' className={`map-castilla-leon ${showCommunityMap?'':'dispNone'}`}/> // Castilla y Leon
                        </svg>
                        <div className={`map-overlay ${showCommunityMap?'dispNone':''}`}>
                            {/* {citiesOnMap.map(
                                citiesMap => {
                                    var cityName = citiesMap.city.replaceAll(' ','-').toLowerCase();
                                    var cityFunctionName = citiesMap.city.replaceAll(' ','').toLowerCase();
                                    const addCity = ()=>{setLeftMap(cityFunctionName)};
                                    if(citiesMap.inMap === 'yes'){
                                        return(
                                            <div style={{top:`${citiesMap.topPosition}`,left:`${citiesMap.leftPosition}`}} className={`city-location ${cityName}-location`} onMouseEnter={addCity}>
                                                <span className='city-location-round'></span>
                                                <span className='city-name'>{`${citiesMap.city}`}</span>
                                            </div>
                                        )
                                    }
                                }
                            )} */}
                            <CityOnMap leftMap={leftMap} setLeftMap={setLeftMap}/>
                        </div>
                    </div>
                    <div className='city-element'>
                        {/* {citiesOnMap.map(
                            cities =>{
                                var cityClassname = cities.city.replaceAll(' ','-').replaceAll('á','a').replaceAll('é','e').replaceAll('í','i').replaceAll('ó','o').replaceAll('ú','u').toLowerCase();
                                var cityAllTogether = cities.city.replaceAll(' ','').toLowerCase();
                                if(cities.inMap === 'yes'){
                                    return(
                                        <div className={`map-side-city-element ${cityClassname}-side-element ${leftMap === cityAllTogether?'dispFlex':'dispNone'}`}>
                                            <div className={`city-box vertical-${cityClassname}-image`} style={{backgroundImage:`linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.9)), url('../../../img/Cities/${cityClassname}.jpg')`}}>
                                                <div className='city-text-container'>
                                                    <Link to={`/Ciudades/${cities.city}`} className='city-name'>{cities.city}</Link>
                                                    <Link to={`/Ciudades/${cities.city}/Alojamiento#AccommodationTitle`} className='city-link'>Hoteles y alojamientos</Link>
                                                    <Link to={`/Ciudades/${cities.city}/Tours`} className='city-link'>Paseos, visitas y excursiones</Link>
                                                    <Link to={``} className='city-link'>Restaurantes y gastronomia</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            }
                        )} */}
                        <CityComponent leftMap={leftMap}/>
                    </div>
                </section>
            </div>
        </div>

    )
}