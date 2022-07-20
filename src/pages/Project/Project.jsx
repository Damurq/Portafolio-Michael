import { useSelector } from 'react-redux'
import { useParams } from "react-router";
// Local
import ProjectStartSection from "../../components/ProjectStartSection/ProjectStartSection"
import ProjectContentSection from "../../components/ProjectContentSection/ProjectContentSection"
// Data
import data from "../../data/Home.json"
// Style
import "./Project.css"

const Project = () => {
    const language = useSelector((state) => state.language.currentLanguage)
    let { id } = useParams();

    const idList = data[language].components.ProjectStartSection.map(project => project.id)
    id = idList.includes(id) ? id : idList[idList.length - 1]

    const projectContent = data[language].components.ProjectContentSection.filter(project => project.id === id)[0];
    const project = data[language].components.ProjectStartSection.filter(project => project.id === id)[0];
    const svgHeader = data[language].components.ProjectHeader[id]

    return (<div className={project.name.replaceAll(" ", "_") + " projectDetail"}>
        <div className="svg-header">
        <svg className="absolute" preserveAspectRatio="xMinYMin slice" width="100%" viewBox="0 0 1440 738" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M427.986 737.934C125.335 734.779 16.5575 633.43 0 583.15V0H1440V312.032C1018.14 179.135 901.792 449.973 813.324 583.15C782.216 629.98 730.637 741.089 427.986 737.934Z" fill="#532768" />
            <path d="M427.986 737.934C125.335 734.779 16.5575 633.43 0 583.15V0H1440V312.032C1018.14 179.135 901.792 449.973 813.324 583.15C782.216 629.98 730.637 741.089 427.986 737.934Z" fill="url(#paint0_linear_108_130)" />
            <defs>
                <linearGradient id="paint0_linear_108_130" x1="720" y1="0" x2="720" y2="738" gradientUnits="userSpaceOnUse">
                    <stop offset="0.359375" stopColor={svgHeader["start-color"]} />
                    <stop offset="1" stopColor={svgHeader["stop-color"]} />
                </linearGradient>
            </defs>
        </svg>
        </div>
        <ProjectStartSection project={project} />
        {projectContent.content.map((section, index) => {
            return (<ProjectContentSection key={id + project.name.replaceAll(" ", "_") + index} id={id} section={section} />)
        })}
    </div>);
}

export default Project;