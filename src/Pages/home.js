import CardPresentation from "../components/CardPresentation/CardPresentation"
import Carousel from "../components/Carousel/Carousel"
import db from "../data/db.json"

const Home = ()=>{
    const projects = db.projects;
    const projectsType = projects.reduce((acum,project)=>{
        acum[project.typeId].push(project)
        return acum
    },[[],[],[]]);
    console.log(projectsType)
    return (
        <div className="">
            <CardPresentation />
            { projectsType.map((projects , index)=> <Carousel key={index} projects = {projects}/>) }
        </div>
    )
}
export default Home;