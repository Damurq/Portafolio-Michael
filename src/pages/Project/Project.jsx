import { useSelector }          from 'react-redux'
import { useParams }            from "react-router";
// Local
import ProjectStartSection      from "../../components/ProjectStartSection/ProjectStartSection"
import ProjectContentSection    from "../../components/ProjectContentSection/ProjectContentSection"
// Data
import data                     from "../../data/Home.json"
// Style
import "./Project.css"

const Project = () => {
    const language = useSelector((state) => state.language.currentLanguage)
    let { id } = useParams();

    const idList = data[language].components.ProjectStartSection.map( project=>project.id)
    id = idList.includes(id) ? id : idList[idList.length - 1]

    const projectContent= data[language].components.ProjectContentSection.filter(project=>project.id===id)[0];
    const project = data[language].components.ProjectStartSection.filter(project=>project.id===id)[0];

    return ( <div className={project.name.replaceAll(" ","_") +" projectDetail"}>

        <ProjectStartSection project={project}/>
        {projectContent.content.map((section,index)=>{
            return (<ProjectContentSection key={id + project.name.replaceAll(" ","_") + index} id={id} section={section}/>)
        })}
        <div className="absolute">
            <img src={project.imgvector} alt=""/>
        </div>
    </div> );
}
 
export default Project;