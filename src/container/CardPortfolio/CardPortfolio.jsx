import { useEffect, useState }  from "react"
import { Link }                 from "react-router-dom"
// Components
import SeeMore                  from '../../components/SeeMore/SeeMore'
// Style
import "./CardPortfolio.css"

const CardPortfolio = ({sectionPage, data}) => {
    const [cardPortfolio, setCardPortfolio] = useState(data.content)
    let photo = "/portfolio/damageControl.png"

    /* Dependiendo de la seccion se cargan determinador proyectos */
    useEffect(() => {
        if (sectionPage === "home") {
            setCardPortfolio(cardPortfolio.filter(projects=> projects.type==="web-site" ));
        }
        else if (sectionPage === "portfolio") {
            setCardPortfolio(data.content);
        }
    },[]);

    return (
        <div className={"CardPortfolio theme--2 "+ sectionPage}>
            <h2 className="title">{data.title}</h2>
            <div className="projects">
                {cardPortfolio && cardPortfolio.map((project,index) => {
                    photo = project.photosrc
                    return (
                        <div key={"project-"+index} className="project">
                            <Link  to={"/Portafolio-Michael/Portfolio/"+project.id}  >
                                <img src={process.env.PUBLIC_URL + photo} alt="" className={"project__img-"+index} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            { sectionPage==="home" && <SeeMore to="/Portafolio-Michael/Portfolio" /> }
        </div>
    );
}

export default CardPortfolio;