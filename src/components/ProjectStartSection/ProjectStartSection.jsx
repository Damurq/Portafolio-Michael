import data from "../../data/Home.json"
import "./ProjectStartSection.css"

const ProjectStartSection = ({id}) => {
    const project= data.components.ProjectStartSection.filter(project=>project.id===id)[0];
    const photo = project.imgsrc 
    return ( 
        <div className="headerProject">
            <h3  >{project.role}</h3>
            <h1  >{project.name}</h1>
            <h2  >Description</h2>
            <p  >{project.description}</p>
            {photo &&
            (<div className="imgProject">
                <img src={photo} alt={project.name}/>
            </div>)
            }
        </div>
     );
}
 
export default ProjectStartSection;