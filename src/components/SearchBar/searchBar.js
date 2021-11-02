import React, { useState } from 'react';
import {BsSearch} from "react-icons/bs"
import "./searchBar.css"

export default function SearchBar(){
    return(
        <>
            <div className="searchBarRight">
                <form className="searchBarForm">
                    <input type="text" placeholder="Buscar"/>
                    <button><BsSearch/></button>
                </form>
            </div>
        </>
    )
}