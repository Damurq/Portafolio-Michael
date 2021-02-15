import { Link } from "react-router-dom"

const Navbar = () => {
    return ( 
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/proyectos">Proyectos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/acerca de mi">Acerca de mi</Link></li>
                </ul>
            </nav>
            <div className="header-socialMedia">
                <img src="" alt="Github-logo" className="social-media"/>
                <img src="" alt="Linkedin-logo" className="social media"/>
            </div>
        </header>
        );
}

export default Navbar;
