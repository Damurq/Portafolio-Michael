import { Link, useLocation, useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Navbar.css";
import CardIcon from "../CardIcon/CardIcon"
import dbEnglish from "../../data/dbEnglish.json"

const Navbar = () => {
    const [navLeft, setNavLeft] = useState("theme--2 navbar-Container")
    const [navRight, setNavRight] = useState("theme--1")
    let location = useLocation();
    const navbar = dbEnglish.components.Navbar
    const liClass = "menu-options__element"
    const history = useHistory();
    function clickHandler(e) {
        history.push("/");
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        window.scroll({
            top: offsetTop-50,
            behavior: "smooth"
        });
        const menuOptions = document.querySelector(".menu-options")
        if(menuOptions.classList.contains('menu-options-list-dropdown--enable')){
            handleClick();
        }
    }
    function clickHandlerRender(e) {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        const menuOptions = document.querySelector(".menu-options")
        if(menuOptions.classList.contains('menu-options-list-dropdown--enable')){
            handleClick();
        }
    }

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        const linksRender = document.querySelectorAll('a[href^="/"]');
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }
        for (const linkR of linksRender) {
            linkR.addEventListener("click", clickHandlerRender);
        }
        let length = location.pathname.length
        if ((location.pathname==="/") || (length!==13)){
            setNavLeft("theme--2 navbar-Container");
            setNavRight("theme--1");
        }
        else{
            let className = location.pathname.substring(1,length).replace("/","-")
            setNavLeft( className + " navbar-Container" );
            setNavRight( className);
        }
    }, [location]);


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
        const changeTheme = document.querySelector('#theme');
        changeTheme.classList.toggle("DARK");
        changeTheme.classList.toggle("LIGHT");
    }

    return (
        <header>
            <div className={navLeft}>
                <div className="navbar">
                    <button className="dropdown-menu-button" onClick={handleClick}>
                        <div className="menu menu--X">
                            <span className="menu__bar"></span>
                        </div>
                    </button>
                    <button className="logo" onClick={handleClickTheme}>
                        Montero
                    </button>
                </div>
            </div>
            <nav className={navRight}>
                <div className="menu-options menu-options-list-dropdown--disable">
                    <button className="logo--dropdown logo title" onClick={handleClickTheme}>
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
