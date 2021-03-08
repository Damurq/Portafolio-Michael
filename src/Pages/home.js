import CardPresentation from "../components/CardPresentation/CardPresentation"
import CardAboutMe from "../components/CardAboutMe/CardAboutMe"
import CardPortfolio from "../components/CardPortfolio/CardPortfolio"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import db from "../data/db.json"

const Home = ()=>{
   /* const projects = db.projects;
    const projectsType = projects.reduce((acum,project)=>{
        acum[project.typeId].push(project)
        return acum
    },[[],[],[]]);
    { projectsType.map((projects , index)=> <Carousel key={index} projects = {projects}/>) }*/


    return (
        <div className="Content">
            <CardPresentation />
            <CardAboutMe sectionPage="home"/>
            <CardPortfolio sectionPage="home"/>
            <Contact />
        </div>
    )
}
export default Home;