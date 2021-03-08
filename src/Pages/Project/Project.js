import ProjectStartSection from "../../components/ProjectStartSection/ProjectStartSection"
import ProjectContentSection from "../../components/ProjectContentSection/ProjectContentSection"
import { useParams } from "react-router";
import dbEnglish from "../../data/dbEnglish.json"
import "./Project.css"

const Project = () => {
    const { id } = useParams();
    const projectContent= dbEnglish.components.ProjectContentSection.filter(project=>project.id===id)[0];
    const name = dbEnglish.components.ProjectStartSection.filter(project=>project.id===id)[0].name;
    return ( <div className={name +" projectDetail"}>
        <ProjectStartSection id={id}/>
        {projectContent.content.map((section,index)=>{
            return (<ProjectContentSection key={id + index} id={id} section={section}/>)
        })}
    </div> );
}
 
export default Project;