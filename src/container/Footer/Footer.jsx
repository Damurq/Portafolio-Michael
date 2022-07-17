import { faPhoneAlt, faEnvelope }   from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }          from '@fortawesome/react-fontawesome'
import { library }                  from '@fortawesome/fontawesome-svg-core';
import { Link, useLocation }        from "react-router-dom"
import { useEffect, useState }      from "react"
// Local
import  CardIcon from "../../components/CardIcon/CardIcon.jsx"
import "./Footer.css"

const Footer = ({ data }) => {
    /* Hooks */
    const [footer, setfooter] = useState("theme--1")
    let location = useLocation();

    library.add(faPhoneAlt, faEnvelope)
    const liClass = "menu-options__element menu-options__element--footer "

    useEffect(() => {
        let length = location.pathname.length
        if ((location.pathname === "/") || (length !== 13)) {
            setfooter("theme--2");
        }
        else {
            let className = location.pathname.substring(1, length).replace("/", "-")
            setfooter(className);
        }
    }, [location]);

    return (
        <footer className={footer}>
            <div className="footer-elements">
                <div className="footerSection--nav">
                    <ul className="menu-options-list">
                        {data.menu && data.menu.map((section, index) => {
                            return section.type === "Link"
                                ? (<li key={"nav-li-" + index} className="footer--link">
                                    <Link className={liClass} to={section.href}>{section.name}</Link>
                                </li>)
                                : (<li key={"nav-li-" + index} className="footer--link">
                                    <a className={liClass} href={section.href}>{section.name}</a>
                                </li>)
                        })}
                    </ul>
                </div>
                <div className="footerSection--SocialMedia">
                    <h3 className="text--center">Social Media</h3>
                    <CardIcon />
                </div>
                <div className="footerSection--contact">
                    {data.info && data.info.map((info, index) => (
                        <div key={`extra-inf-${index}`}>
                        <h3  >
                            <FontAwesomeIcon className="icon" icon={['fas', info.icon]} />
                            {info.data}
                        </h3>
                    </div>
                    ))}
                </div>
            </div>
            <div  >
                <h3 className="mini-title-2 text--center text-dark">Copyright Michael Montero 2021-Todos los derechos reservados</h3>
            </div>
        </footer>);
}

export default Footer;