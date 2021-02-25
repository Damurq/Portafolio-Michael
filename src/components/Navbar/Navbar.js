import { useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css";
import dbEnglish from "../../data/dbEnglish.json"

const Navbar = () => {
    const [icon, setIcon] = useState(faBars)
    const [theme, setTheme] = useState("dark")
    const navbar = dbEnglish.components.Navbar
    const liClass = "theme-dark-1 menu-options__element"

    const handleClick = () => {
        const menuOptions = document.querySelector(".menu-options")
        if (icon === faBars) {
            setIcon(faTimes)
            menuOptions.classList.remove("menu-options-list-dropdown--disable")
        }
        else {
            setIcon(faBars)
            menuOptions.classList.add("menu-options-list-dropdown--disable")
        }
    }
    const handleClickTheme = () => {
        const changeTheme = document.querySelectorAll(`.theme-${theme}-1,.theme-${theme}-2`)
        if (theme === "dark") {
            setTheme("light")
            changeTheme.forEach((element, index, objectNode) => {
                objectNode[index].classList.contains("theme-dark-1") ? element.classList.replace("theme-dark-1", "theme-light-1") : element.classList.replace("theme-dark-2", `theme-light-2`)
            })
        }
        else {
            setTheme("dark")
            changeTheme.forEach((element) => {
                element.classList.contains("theme-light-1") ? element.classList.replace("theme-light-1", "theme-dark-1") : element.classList.replace("theme-light-2", "theme-dark-2")
            })
        }
    }

    return (
        <header>
            <div className="theme-dark-2 navbar-Container">
                <div className="navbar">
                    <button className="dropdown-menu-button theme-dark-2" onClick={handleClick}>
                        <FontAwesomeIcon icon={icon} />
                    </button>
                    <button className="logo theme-dark-2" onClick={handleClickTheme}>
                        Montero
                    </button>
                </div>
            </div>
            <nav className="theme-dark-1">
                <div className="menu-options menu-options-list-dropdown--disable">
                    <ul className="menu-options-list">
                        {navbar.map((section, index) => {
                            return index === 0 ? <li key={"nav-li-"+index} ><Link className={liClass} to="/">{section}</Link></li> : <li key={"nav-li-"+index}><Link className={liClass} to="/{section}">{section}</Link></li>
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
