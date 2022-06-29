import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import dbEnglish from "../../data/dbEnglish.json"
import "./CardPortfolio.css"

const CardPortfolio = ({sectionPage}) => {
    const [cardPortfolio, setCardPortfolio] = useState(dbEnglish.components.CardPortfolio)
    let photo = "portfolio/damageControl.png"

    /* Dependiendo de la seccion se cargan determinador proyectos */
    useEffect(() => {
        if (sectionPage === "home") {
            setCardPortfolio(cardPortfolio.filter(projects=> projects.type==="web-site" ));
        }
        else if (sectionPage === "portfolio") {
            setCardPortfolio(dbEnglish.components.CardPortfolio);
        }
    },[]);

    return (
        <div className={"CardPortfolio theme--2 "+ sectionPage}>
            <h2 className="title">Portfolio</h2>
            <div className="projects">
                {cardPortfolio.map((project,index) => {
                    photo = project.photosrc
                    return (
                        <div key={"project-"+index} className="project">
                            <Link  to={"/Portfolio/"+project.id}  >
                                <img src={photo} alt="" className={"project__img-"+index} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            { sectionPage==="home" && <div className="seeMore">
                <div className="line">
                </div>
                    <Link to="/Portfolio" className="button-dark">more</Link>
                </div> }
        </div>
    );
}

export default CardPortfolio;