import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./CardPortfolio.css"
import SeeMore from '../SeeMore/SeeMore'

const CardPortfolio = ({sectionPage, data}) => {
    const [cardPortfolio, setCardPortfolio] = useState(data)
    let photo = "portfolio/damageControl.png"

    /* Dependiendo de la seccion se cargan determinador proyectos */
    useEffect(() => {
        if (sectionPage === "home") {
            setCardPortfolio(cardPortfolio.filter(projects=> projects.type==="web-site" ));
        }
        else if (sectionPage === "portfolio") {
            setCardPortfolio(data);
        }
    },[]);

    return (
        <div className={"CardPortfolio theme--2 "+ sectionPage}>
            <h2 className="title">Portfolio</h2>
            <div className="projects">
                {cardPortfolio && cardPortfolio.map((project,index) => {
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
            { sectionPage==="home" && <SeeMore to="/Portfolio" /> }
        </div>
    );
}

export default CardPortfolio;