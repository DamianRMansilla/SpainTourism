import {FaFacebookF, FaTwitter, FaInstagram, FaPinterestP} from "react-icons/fa"
import "./footer.css"

export default function Footer(){
    return(
        <>
            <footer className="footer">
                <div className="infoFooter">
                    <ul>
                        <li>Quienes somos</li>
                        <li>Contacto</li>
                        <li>Términos y condiciones</li>
                        <li>Trabaja con nosotros</li>
                        <li>Donde estamos</li>
                    </ul>
                </div>
                <div className="logos">
                    <div className="socialNetworkLogo">
                        <FaInstagram/>
                    </div>
                    <div className="socialNetworkLogo">
                        <FaFacebookF/>
                    </div>
                    <div className="socialNetworkLogo">
                        <FaTwitter/>
                    </div>
                    <div className="socialNetworkLogo">
                        <FaPinterestP/>
                    </div>
                </div>
            </footer>
        </>
    )
}