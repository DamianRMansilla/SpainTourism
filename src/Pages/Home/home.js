import Body from "../../components/Body1/body1"
import "../../components/Body1/body1"
import Imperdibles from "../../components/Imperdibles/imperdibles"
import TodoElAño from "../../components/TodoElAño/todoElAño"
import Carousel from "../../components/carousel/carousel"


export default function Home(){
    return(
        <div>
            <Body/>
            <TodoElAño/>
            <Carousel/>
            <Imperdibles/>
        </div>
    )
}