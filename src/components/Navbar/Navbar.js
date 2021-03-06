import { Link, useLocation, useHistory } from "react-router-dom"
import { useEffect, useState } from "react"
import "./Navbar.css";
import CardIcon from "../CardIcon/CardIcon"
import dbEnglish from "../../data/dbEnglish.json"

const Navbar = () => {
    //Desclaracion de los Hook
    const [navLeft, setNavLeft] = useState("theme--2 navbar-Container")
    const [navRight, setNavRight] = useState("theme--1")
    const history = useHistory();
    let location = useLocation();
    //Archivo JSON donde se encuentra la informacion del componente
    const navbar = dbEnglish.components.Navbar
    //Clase que tendran los li de la barra de navegacion
    const liClass = "menu-options__element"

    /* Función encargada de redirigir en caso de hacer click en una etiqueta "a" con href "#" */
    function clickHandler(e) {
        //redirigimos al inicio
        history.push("/");
        //Obtenemos la altura superior del elemento
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        //hacemos que se desplace al elemento de forma suave
        window.scroll({
            top: offsetTop-50,
            behavior: "smooth"
        });
        //En caso de que sea una pantalla con menu desplegable hacemos que el menu se recoja
        const menuOptions = document.querySelector(".menu-options")
        if(menuOptions.classList.contains('menu-options-list-dropdown--enable')){
            handleClick();
        }
    }

    /* Función encargada de subir el scroll cuando se renderiza una pagina */
    function clickHandlerRender(e) {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
        //En caso de que sea una pantalla con menu desplegable hacemos que el menu se recoja
        const menuOptions = document.querySelector(".menu-options")
        if(menuOptions.classList.contains('menu-options-list-dropdown--enable')){
            handleClick();
        }
    }
    /*  - Añadimos el evento click a todos los link y asignamos la funcion correspondiente
        - Comprobamos la ubicacion de la pagina para el color del navbar
    */
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


    //Controla el menu desplegable
    const handleClick = () => {
        const menuOptions = document.querySelector(".menu-options")
        menuOptions.classList.toggle("menu-options-list-dropdown--disable"); 
        menuOptions.classList.toggle("slide-in-bottom"); 
        menuOptions.classList.toggle("menu-options-list-dropdown--enable"); 
        document.querySelector("nav").classList.toggle("menu-options-list-dropdown--enable");
        document.querySelector(".menu--X").classList.toggle("open");
        document.querySelector("button.logo").classList.toggle("menu-options-list-dropdown--disable");
    }
    //Cambia el tema
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
