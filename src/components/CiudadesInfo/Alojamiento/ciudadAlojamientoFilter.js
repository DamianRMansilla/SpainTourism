import React, { useState } from "react";


export default function AlojamientoFilter(){
    const [filter, setFilter] = useState('');
    const selected = (e) => {
        const valueSelected = e.target.value;
        setFilter(valueSelected)
    }

    return(
        <>
            <section className="filters">
                <form>
                    <select id="filter-hotel-selection" onChange={selected}>
                        <option selected>Todos</option>
                        <option value="5estrellas" id="5estrellas" className="select-option">5 estrellas</option>
                        <option value="4estrellas" id="4estrellas" className="select-option">4 estrellas</option>
                        <option value="3estrellas" id="3estrellas" className="select-option">3 estrellas</option>
                        <option value="2estrellas" id="2estrellas" className="select-option">2 estrellas</option>
                        <option value="1estrella" id="1estrella" className="select-option">1 estrella</option>
                    </select>
                </form>
                {filter && <h2 className="mt-3">{filter}</h2>}
            </section>
            {/* {console.log(document.getElementById('filter-hotel-selection'))} */}

        </>
    )
}