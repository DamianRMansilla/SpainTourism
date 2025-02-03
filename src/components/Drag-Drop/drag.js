import { useState, useEffect } from 'react'
import React from 'react'
import './drag.css'
import DropArea from './DropArea/dropArea'

export default function Drag(){
    var list = {'city1': {id: 1, name: 'Element 1'},
                'city2': {id: 2, name: 'Element 2'},
                'city3': {id: 3, name: 'Element 3'},
                'city4': {id: 4, name: 'Element 4'},
                'city5': {id: 5, name: 'Element 5'}}

    var cityList = Object.values(list)
    cityList = cityList.map(objeto => objeto.name);
    
    const [tasks, setTasks] = useState(cityList  || []);
    // console.log(tasks)

    // useEffect(() => {
    //     localStorage.setItem("tasks", JSON.stringify(tasks));
    // }, [tasks]);

    const [activeElement, setActiveElement] = useState(null);
    
    const onDrop = (status, index) =>{
        
        if(activeElement == null || activeElement === undefined) return;
        
        const listToUpdate = tasks[activeElement];
        const updatedTasks = tasks.filter((task,index) => index !== activeElement)
        
        var pos = ''

        if(activeElement > status){
            pos = parseInt(status)
        } else {
            pos = parseInt(status - 1)
        }

        updatedTasks.splice(pos, 0, listToUpdate)

        setTasks(updatedTasks)

    }


    return(
        <>
            <div className="entire-site">
                <div className="canva-container">
                    <DropArea onDrop={() => onDrop(0)}/>
                    {tasks.map( 
                        (itemList, index) =>{
                            return(
                                <React.Fragment  key={index}>
                                    <div className={`draggable-element position-${index}`} draggable onDragStart={()=> setActiveElement(index)} onDragEnd={()=> setActiveElement(null)}>
                                        <p>{itemList}</p>
                                    </div>
                                    <DropArea onDrop={() => onDrop(index + 1)} />
                                </React.Fragment>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}