import ProjectStartSection from "../../components/ProjectStartSection/ProjectStartSection"
import ProjectContentSection from "../../components/ProjectContentSection/ProjectContentSection"
import { useParams } from "react-router";
import data from "../../data/Home.json"
import "./Project.css"

const Project = () => {
    const { id } = useParams();
    const projectContent= data.components.ProjectContentSection.filter(project=>project.id===id)[0];
    const project = data.components.ProjectStartSection.filter(project=>project.id===id)[0];
    return ( <div className={project.name.replaceAll(" ","_") +" projectDetail"}>

        <ProjectStartSection id={id}/>
        {projectContent.content.map((section,index)=>{
            return (<ProjectContentSection key={id + project.name.replaceAll(" ","_") + index} id={id} section={section}/>)
        })}
        <div className="absolute">
            <img src={project.imgvector} alt=""/>
        </div>
    </div> );
}
 
export default Project;