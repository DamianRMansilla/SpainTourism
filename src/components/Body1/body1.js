import Body2 from "../Body2/body2"
import "./body1.css"
import "../Body2/body2.css"


export default function Body(){
    return(
        <>
            <div className="body1">
                <p class="lema">Te mereces España</p>
            </div>
            <Body2/>
        </>
    )
}