import db from "../../data/db.json"
import { Link } from "react-router-dom"

const CardProject = ({ project: { title, id, typeId, imgSrc, description } }) => {
    const projectsTypes = db.projectsTypes;
    const projectTecnology = db.projectTecnology.filter( projectTecnology => projectTecnology.idProject === id )
    const allTecnology = db.tecnology;
    return (
        <Link to={`/project/${id}`} className="card-seeMore" id={id}>
            <div  >
                <div  >
                    <h2  >{title}</h2>
                    <h3  >{projectsTypes[typeId].description}</h3>
                    <p  >{description}</p>
                    <div  >
                        <h4>Lenguajes y tecnologías empleadas:</h4>
                        <div  >
                            { projectTecnology.map( (tecnology, index)=>{
                                <div className={index+"-"+id}>
                                    <img src={allTecnology.find( allTecnology => allTecnology.id === tecnology.idTecnology ).pothoSrc} alt=""  />
                                    <p   >{allTecnology.find( allTecnology => allTecnology.id === tecnology.idTecnology ).name}</p>
                                </div>
                            } ) }
                        </div>
                    </div>
                </div>
                <div  >
                    <div className={`${title}-secondary`}>
                        <img src={imgSrc} alt={title} />
                    </div>
                </div>
            </div>
        </Link >
    );
}

export default CardProject;