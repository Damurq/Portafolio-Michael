import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons"
import github_logo from "../../images/components/Navbar/github_logo.png"
import linkedin_logo from "../../images/components/Navbar/linkedin_logo.png"
import "./Navbar.css";

const Navbar = () => {
    const [icon, setIcon] = useState(faBars)
    const handleClick = (e)=> {
        if(icon===faBars){
            setIcon(faTimes)
        }
        else{
            setIcon(faBars)
        }
        const menuOptions = e.currentTarget.nextElementSibling;
        const socialMedia = e.currentTarget.parentElement.nextElementSibling;
        if(menuOptions.classList.contains("menu-options-list-dropdown--disable")){
            menuOptions.classList.remove("menu-options-list-dropdown--disable")
            socialMedia.classList.replace("header-socialMedia","menu-options-list-dropdown--disable")
        }
        else{
            menuOptions.classList.add("menu-options-list-dropdown--disable")
            socialMedia.classList.replace("menu-options-list-dropdown--disable","header-socialMedia")
        }
        console.log(menuOptions.classList)
    }

    return (
        <header>
            <nav>
                <button className="dropdown-menu-button" onClick={handleClick}>
                    <FontAwesomeIcon icon={icon} />
                </button>
                <div className="menu-options menu-options-list-dropdown--disable">
                    <ul className="menu-options-list">
                        <li><Link className="menu-options__element" to="/">Inicio</Link></li>
                        <li><Link className="menu-options__element" to="/proyectos">Proyectos</Link></li>
                        <li><Link className="menu-options__element" to="/contacto">Contacto</Link></li>
                        <li><Link className="menu-options__element" to="/about">Acerca de mi</Link></li>
                    </ul>
                </div>
            </nav>
            <div className="header-socialMedia">
                <div className="social-media-content">
                    <img src={github_logo} alt="Github logo" className="social-media" />
                </div>
                <div className="social-media-content social-media-content--linkedin">
                    <img src={linkedin_logo} alt="Linkedin-logo" className="social-media--linkedin" />
                </div>
            </div>
        </header>
    );
}

export default Navbar;
