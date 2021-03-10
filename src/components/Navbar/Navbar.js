import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Navbar.css";
import CardIcon from "../CardIcon/CardIcon"
import dbEnglish from "../../data/dbEnglish.json"

const Navbar = () => {
    const [navLeft, setNavLeft] = useState("theme-dark-2 navbar-Container")
    const [navRight, setNavRight] = useState("theme-dark-1")
    let location = useLocation();
    useEffect(() => {
        let length = location.pathname.length
        if ((location.pathname==="/") || (length!==13)){
            setNavLeft("theme-dark-2 navbar-Container");
            setNavRight("theme-dark-1");
        }
        else{
            let className = location.pathname.substring(1,length).replace("/","-")
            setNavLeft( className + " navbar-Container" );
            setNavRight( className);
        }
    }, [location]);
    const [theme, setTheme] = useState("dark")
    const navbar = dbEnglish.components.Navbar
    const liClass = "theme-dark-1 menu-options__element"

    //menu dropdown
    const handleClick = () => {
        const menuOptions = document.querySelector(".menu-options")
        menuOptions.classList.toggle("menu-options-list-dropdown--disable"); 
        menuOptions.classList.toggle("slide-in-bottom"); 
        menuOptions.classList.toggle("menu-options-list-dropdown--enable"); 
        document.querySelector("nav").classList.toggle("menu-options-list-dropdown--enable");
        document.querySelector(".menu--X").classList.toggle("open");
        document.querySelector("button.logo").classList.toggle("menu-options-list-dropdown--disable");
    }
    //Change theme
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
            <div className={navLeft}>
                <div className="navbar">
                    <button className="dropdown-menu-button theme-dark-2" onClick={handleClick}>
                        <div className="menu menu--X">
                            <span className="menu__bar"></span>
                        </div>
                    </button>
                    <button className="logo theme-dark-2" onClick={handleClickTheme}>
                        Montero
                    </button>
                </div>
            </div>
            <nav className={navRight}>
                <div className="menu-options menu-options-list-dropdown--disable">
                    <button className="logo--dropdown logo theme-dark-2 title" onClick={handleClickTheme}>
                        Montero
                    </button>   
                    <ul className="menu-options-list">
                        {navbar.map((section, index) => {
                            return section.type === "Link" ? <li key={"nav-li-"+index} ><Link className={liClass} to={section.href}>{section.name}</Link></li> : <li key={"nav-li-"+index}><a className={liClass} href={section.href}>{section.name}</a></li>
                        })}
                    </ul>
                    <div className="SocialMedia">
                        <h3 className="text--center">Social Media</h3>
                        <CardIcon />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
