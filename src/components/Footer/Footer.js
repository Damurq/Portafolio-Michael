import { useEffect, useState } from "react"
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link, useLocation } from "react-router-dom"
import dbEnglish from "../../data/dbEnglish.json"
import CardIcon from "../CardIcon/CardIcon"
import "./Footer.css"

const Footer = () => {
    library.add(faPhoneAlt,faEnvelope)
    const navbar = dbEnglish.components.Navbar
    const liClass = "theme-dark-2 menu-options__element menu-options__element--footer "
    const [footer, setfooter] = useState("theme-dark-1")
    let location = useLocation();
    useEffect(() => {
        let length = location.pathname.length
        if ((location.pathname==="/") || (length!==13)){
            setfooter("theme-dark-2");
        }
        else{
            let className = location.pathname.substring(1,length).replace("/","-")
            setfooter( className );
        }
    }, [location]);
    return (
    <footer className={footer}>
        <div className="footer-elements">
            <div className="footerSection--nav">
                <ul className="menu-options-list">
                    {navbar.map((section, index) => {
                            return section.type === "Link" ? <li key={"nav-li-"+index} ><Link className={liClass} to={section.href}>{section.name}</Link></li> : <li key={"nav-li-"+index}><a className={liClass} href={section.href}>{section.name}</a></li>
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