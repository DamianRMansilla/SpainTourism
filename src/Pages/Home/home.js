import Body from "../../components/HomeComponents/Body1/body1"
import "../../components/HomeComponents/Body1/body1"
import Imperdibles from "../../components/Imperdibles/imperdibles"
import TodoElAño from "../../components/TodoElAño/todoElAño"
import Carousel from "../../components/carousel/carousel"
import Especiales from "../../components/Especiales/especiales"


export default function Home(){
    return(
        <div>
            <Body/>
            <TodoElAño/>
            <Especiales/>
            <Carousel/>
            <Imperdibles/>
        </div>
    )
}