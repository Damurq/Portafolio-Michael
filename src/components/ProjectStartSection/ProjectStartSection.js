import dbEnglish from "../../data/dbEnglish.json"
import "./ProjectStartSection.css"

const ProjectStartSection = ({id}) => {
    const project= dbEnglish.components.ProjectStartSection.filter(project=>project.id===id)[0];
    const photo = project.imgsrc 
    return ( 
        <div className="headerProject">
            <h3 className="">{project.role}</h3>
            <h1 className="">{project.name}</h1>
            <h2 className="">Description</h2>
            <p className="">{project.description}</p>
            {photo &&
            (<div className="imgProject">
                <img src={photo} alt={project.name}/>
            </div>)
            }
        </div>
     );
}
 
export default ProjectStartSection;