import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import dbEnglish from "../../data/dbEnglish.json"
import "./CardPortfolio.css"

const CardPortfolio = () => {
    const [section, setSection] = useState("")
    const [cardPortfolio, setCardPortfolio] = useState(dbEnglish.components.CardPortfolio)
    let location = useLocation().pathname;
    const photo = "presentation/descarga.jpg"

    useEffect(() => {
        setSection("")
        if (location === "/") {
            setSection("home");
            setCardPortfolio(cardPortfolio.filter(projects=> projects.type==="web-site" ));
        }
        else if (location === "/Portfolio") {
            setSection("Portfolio");
            setCardPortfolio(dbEnglish.components.CardPortfolio);
        }
        //setPresentation(data[section]);
    },[]);

    return (
        <div className="CardPortfolio theme-dark-2">
            <h2 className="title">Portfolio</h2>
            <div className="projects">
                {cardPortfolio.map((project,index) => {
                    return (
                        <div key={"project-"+index} className="project">
                            <Link  to="/" className="">
                                <img src={photo} alt="" className={"project__img-"+index} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <div className="seeMore">
                <div className="line"></div>
                <button className="theme-dark-1">more</button>
            </div>
        </div>
    );
}

export default CardPortfolio;