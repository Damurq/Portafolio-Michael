// Third party
import { Link, useLocation, useHistory }    from "react-router-dom"
import { useEffect, useState }              from "react"
import { useDispatch, useSelector }         from 'react-redux'
import { faSun, faMoon }                    from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon }                  from '@fortawesome/react-fontawesome'
// Locals
import { changeTheme }                      from "../../features/theme/theme"
// Components
import CardIcon                             from "../CardIcon/CardIcon.jsx"
// Styles
import "./Navbar.css";

const Navbar = ({ data }) => {
    // Declaration of the Hooks
    const theme = useSelector((state) => state.theme.currentTheme)
    const dispatch = useDispatch()
    const [navLeft, setNavLeft] = useState("theme--2 navbar-Container")
    const [navRight, setNavRight] = useState("theme--1")
    const history = useHistory();
    let location = useLocation();

    //Clase que tendran los li de la barra de navegacion
    const liClass = "menu-options__element"

    /**
     * Redirect in case of clicking on a tag "a" with href "#"
     * @param {object} e evento
     */
    function clickHandler(e) {
        if (!(location.pathname === "/")) {
            history.push("/");
        }
        e.preventDefault();
        // Get the top height of the element
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href) ? document.querySelector(href).offsetTop : 0;
        // Make the element scroll smoothly
        window.scroll({
            top: offsetTop - 50,
            behavior: "smooth"
        });
        // If it is a screen with a drop-down menu, we make the menu appear
        const menuOptions = document.querySelector(".menu-options")
        if (menuOptions.classList.contains('menu-options-list-dropdown--enable')) {
            handleClick();
        }
    }

    /**
     * Function in charge of raising the scroll when a page is rendered
     * @param {*} e 
     */
    function clickHandlerRender(e) {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        // If it is a screen with a drop-down menu, we make the menu appear
        const menuOptions = document.querySelector(".menu-options")
        if (menuOptions.classList.contains('menu-options-list-dropdown--enable')) {
            handleClick();
        }
    }

    /*  - Añadimos el evento click a todos los link y asignamos la funcion correspondiente
        - Comprobamos la ubicacion de la pagina para el color del navbar
    */
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]'),
            linksRender = document.querySelectorAll('a[href^="/"]');
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }
        for (const linkR of linksRender) {
            linkR.addEventListener("click", clickHandlerRender);
        }
        /* Cambiar el theme del navbar  */
        let length = location.pathname.length
        if ((location.pathname === "/") || (length !== 13)) {
            setNavLeft("theme--2 navbar-Container");
            setNavRight("theme--1");
        }
        else {
            let className = location.pathname.substring(1, length).replace("/", "-")
            setNavLeft(className + " navbar-Container");
            setNavRight(className);
        }
    }, [location]);


    //Controla el menu desplegable
    const handleClick = () => {
        const menuOptions = document.querySelector(".menu-options")
        menuOptions.classList.toggle("menu-options-list-dropdown--disable");
        menuOptions.classList.toggle("slide-in-bottom");
        menuOptions.classList.toggle("menu-options-list-dropdown--enable");
        document.querySelector("nav").classList.toggle("menu-options-list-dropdown--enable");
        document.querySelector(".menu--X").classList.toggle("open");
        document.querySelector("p.logo").classList.toggle("menu-options-list-dropdown--disable");
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
                    <p className="logo">
                        {data.name}
                    </p>
                </div>

            </div>
            <nav className={navRight}>
                <div className="menu-options menu-options-list-dropdown--disable">
                    <p className="logo--dropdown logo title">
                        {data.name}
                    </p>
                    <ul className="menu-options-list">
                        {data.elements.map((section, index) => {
                            return section.type === "Link" ? <li key={"nav-li-" + index} ><Link className={liClass} to={section.href}>{section.name}</Link></li> : <li key={"nav-li-" + index}><a className={liClass} href={section.href}>{section.name}</a></li>
                        })}
                        <li className={"theme-selector"} onClick={() => dispatch(changeTheme())} >
                            {theme === "DARK"
                                ? <FontAwesomeIcon icon={faSun} />
                                : <FontAwesomeIcon icon={faMoon} />}
                        </li>
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
