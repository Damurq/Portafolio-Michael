import db from "../../data/db.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const CardCarousel = ({ project: { title, id, typeId, imgSrc } }) => {
    const projectsTypes = db.projectsTypes
    return (
        <div className="">
            <h3 className="">{projectsTypes[typeId].description}</h3>
            <h2 className="">{title}</h2>
            <button className="">
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className={`${title}-secondary`}>
                <img src={imgSrc} alt={title} />
            </div>
            <button className="">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
            <Link to={`/project/${id}`} className="seeMore" id={id}>Ver más</Link>
        </div>
    );
}

export default CardCarousel;