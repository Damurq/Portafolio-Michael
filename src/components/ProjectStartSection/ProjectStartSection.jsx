import { useSelector }          from 'react-redux'
// Style
import "./ProjectStartSection.css"

const ProjectStartSection = ({project}) => {
    const language = useSelector((state) => state.language.currentLanguage)
    const photo = project.imgsrc 
    
    return ( 
        <div className="headerProject">
            <h3  >{project.role}</h3>
            <h1  >{project.name}</h1>
            <h2  >{language ==='EN' ? 'Description' : 'Descripción'}</h2>
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