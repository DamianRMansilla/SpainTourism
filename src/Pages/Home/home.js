import Body from "../../components/HomeComponents/Body1/body1"
import "../../components/HomeComponents/Body1/body1"
import Imperdibles from "../../components/HomeComponents/Imperdibles/imperdibles"
import TodoElAño from "../../components/HomeComponents/TodoElAño/todoElAño"
import Carousel from "../../components/HomeComponents/Carousel/carousel"
import Especiales from "../../components/HomeComponents/Especiales/especiales"


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