import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from "react-router-dom"
import dbEnglish from "../../data/dbEnglish.json"
import CardIcon from "../CardIcon/CardIcon"
import "./Footer.css"

const Footer = () => {
    library.add(faPhoneAlt,faEnvelope)
    const navbar = dbEnglish.components.Navbar
    const liClass = "theme-dark-2 menu-options__element menu-options__element--footer "

    return (
    <footer className="theme-dark-2">
        <div className="footer-elements">
            <div className="footerSection--nav">
                <ul className="menu-options-list">
                    {navbar.map((section, index) => {
                        return index === 0 ? <li key={"nav-li-"+index}><Link className={liClass} to="/">{section}</Link></li> : <li key={"nav-li-"+index}><Link className={liClass} to="/{section}">{section}</Link></li>
                    })}
                </ul>
            </div>
            <div className="footerSection--SocialMedia">
                <h3 className="text--center">Social Media</h3>
                <CardIcon />
            </div>
            <div className="footerSection--contact">
                    <div className="">
                        <h3 className="">
                            <FontAwesomeIcon className="icon" icon={['fas', 'envelope']}/> 
                            michaeldamurq@gmail.com
                        </h3>
                    </div>
                    <div className="">
                        <h3 className="">
                            <FontAwesomeIcon className="icon" icon={['fas', 'phone-alt']}/> 
                            +58 416 654 16 76
                        </h3>
                    </div>
            </div>
        </div>
        <div className="">
            <h3 className="mini-title-2 text--center text-dark">Copyright Michael Montero 2021-Todos los derechos reservados</h3>
        </div>
    </footer>);
}

export default Footer;