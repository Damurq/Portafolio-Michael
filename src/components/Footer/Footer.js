import dbEnglish from "../../data/dbEnglish.json"
import { Link } from "react-router-dom"

const Footer = () => {
    const navbar = dbEnglish.components.Navbar
    const liClass = "theme-dark-1 menu-options__element"

    return (<footer>
        <div className="">
            <div className="">
                <ul className="menu-options-list">
                    {navbar.map((section, index) => {
                        return index === 0 ? <li><Link className={liClass} to="/">{section}</Link></li> : <li><Link className={liClass} to="/{section}">{section}</Link></li>
                    })}
                </ul>
            </div>
            <div className="">
                    <h3 className="">Social media</h3>
            </div>
            <div className="">
                    <div className="">
                        <h3 className=""></h3>
                    </div>
                    <div className="">
                        <h3 className=""></h3>
                    </div>
            </div>
        </div>
        <div className="">

        </div>
    </footer>);
}

export default Footer;