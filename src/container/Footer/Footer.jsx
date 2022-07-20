import { useEffect, useState }      from "react"
import { Link, useLocation }        from "react-router-dom"
import { useSelector }              from 'react-redux'
// Local
import  CardIcon                    from "../../components/CardIcon/CardIcon.jsx"
import IconsComponent               from '../../components/IconsComponent/IconsComponent'
// Styles
import "./Footer.css"

const Footer = ({ data }) => {
    /* Hooks */
    const language = useSelector((state) => state.language.currentLanguage)
    const [footer, setfooter] = useState("theme--1")
    let location = useLocation();

    const liClass = "menu-options__element menu-options__element--footer "

    useEffect(() => {
        let path = location.pathname.replace("/Portafolio-Michael/", "/")
        let length = path.length
        if ((path === "/") || (length !== 13)) {
            setfooter("theme--2");
        }
        else {
            let className = path.substring(1, length).replace("/", "-")
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
                    <h3 className="text--center">
                        {language === "EN"
                                ? 'Social Media'
                                : 'Redes sociales'}
                    </h3>
                    <CardIcon />
                </div>
                <div className="footerSection--contact">
                    {data.info && data.info.map((info, index) => (
                        <div key={`extra-inf-${index}`}>
                        <h3  >
                            <IconsComponent className="icon" icon={info.icon} />
                            {info.data}
                        </h3>
                    </div>
                    ))}
                </div>
            </div>
            <div  >
                <h3 className="mini-title-2 text--center text-dark">
                    {language === "EN" 
                        ? 'Copyright Michael Montero 2022- All rights reserved'
                        : 'Copyright Michael Montero 2022-Todos los derechos reservados'}
                </h3>
            </div>
        </footer>);
}

export default Footer;