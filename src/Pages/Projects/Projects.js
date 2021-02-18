import db from "../../data/db.json"
import CardProject from "../../components/CardProject/CardProject"
const Projects = () => {
    const projects = db.projects;
    return ( 
        <div className="">
            <h1>Proyectos</h1>
            { projects.map( project => <CardProject key={project.id} project={project} /> ) }
        </div>
     );
}
 
export default Projects;