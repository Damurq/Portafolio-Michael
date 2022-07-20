// Third party
import { Link, useLocation, useHistory }    from "react-router-dom"
import { useEffect, useState }              from "react"
import { useDispatch, useSelector }         from 'react-redux'
import { ImSun }                            from 'react-icons/im'
import { FaMoon }                           from 'react-icons/fa'
// Locals
import { changeTheme }                      from "../../features/theme/theme"
import { changeLanguage }                   from "../../features/language/language"
// Components
import CardIcon                             from "../../components/CardIcon/CardIcon.jsx"
import SwitchComponent                      from "../../components/SwitchComponent/SwitchComponent.jsx"
// Styles
import "./Navbar.css";

const Navbar = ({ data }) => {
    // Declaration of the Hooks
    const {theme, language} = useSelector((state) => state)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [navLeft, setNavLeft] = useState("theme--2 navbar-Container")
    const [navRight, setNavRight] = useState("theme--1")
    const history = useHistory();
    let location = useLocation();

    // Class that the li of the navigation bar will have
    const liClass = "menu-options__element"

    /**
     * Redirect in case of clicking on a tag "a" with href "#"
     * @param {object} e evento
     */
    function clickHandler(e) {
        e.preventDefault();
        if (!(location.pathname === "/")) {
            history.push("/");
        }
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
            setOpen(false);
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
            setOpen(false);
        }
    }

    /*  - We add the click event to all the links and assign the corresponding function
        - We check the location of the page for the color of the navbar
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

    return (
        <header className={`${open ? "header-open" : ""}`}>
            <div className={navLeft}>
                <div className="navbar">
                    <button className="dropdown-menu-button" onClick={() => { setOpen(!open) }}>
                        <div className={`menu menu--X ${open ? "open" : ""}`}>
                            <span className="menu__bar"></span>
                        </div>
                    </button>
                    <p className={`logo ${open ? "menu-options-list-dropdown--disable" : ""}`}>
                        {data.name}
                    </p>
                </div>

            </div>
            <nav className={`${navRight} ${open ? "menu-options-list-dropdown--enable" : ""}`}>
                <div className={`menu-options ${open ? "menu-options-list-dropdown--enable" : "menu-options-list-dropdown--disable"}`}>
                    <p className="logo--dropdown logo title">
                        {data.name}
                    </p>
                    <ul className="menu-options-list">
                        {data.elements && data.elements.map((section, index) => {
                            return section.type === "Link" ? <li key={"nav-li-" + index} ><Link className={liClass} to={section.href}>{section.name}</Link></li> : <li key={"nav-li-" + index}><a className={liClass} href={section.href}>{section.name}</a></li>
                        })}
                        <li className={"theme-selector"} onClick={() => dispatch(changeTheme())} >
                            {theme.currentTheme === "DARK"
                                ? <FaMoon />
                                : <ImSun /> }
                        </li>
                        <li className="language">
                            <SwitchComponent tags={language.currentLanguage === "EN"
                                ? ["EN", "ES"]
                                : ["ES", "EN"]
                            } callback={() => dispatch(changeLanguage()) } />
                        </li>
                    </ul>
                    <div className="SocialMedia">
                        <h3 className="text--center">
                            {language.currentLanguage === "EN"
                                ? 'Social Media'
                                : 'Redes sociales'}
                        </h3>
                        <CardIcon />
                    </div>
                </div>
            </nav>
        </header >
    );
}

export default Navbar;
