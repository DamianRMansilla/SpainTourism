import MainCities from "../Body2/body2"
import "./body1.css"
import "../Body2/body2.css"
import Breadcrumbs from "../Breadcrumbs/breadcrumbs"



export default function Body(){
    return(
        <>
            <div className="body1">
                <p className="lema">Te mereces España</p>
            </div>
            <Breadcrumbs/>
            <MainCities/>
        </>
    )
}