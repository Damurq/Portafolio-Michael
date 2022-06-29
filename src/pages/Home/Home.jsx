// Components
import CardPresentation from "../../components/CardPresentation/CardPresentation"
import CardAboutMe from "../../components/CardAboutMe/CardAboutMe"
import CardPortfolio from "../../components/CardPortfolio/CardPortfolio"
import Contact from "../../components/Contact/Contact"
// Data
import data from "../../data/Home.json"

const Home = ()=>{

    return (
        <div className="Content">
            <CardPresentation data={data.components.CardPresentation} />
            <CardAboutMe sectionPage="home" data={data.components.CardAboutMe} />
            <CardPortfolio sectionPage="home" data={data.components.CardPortfolio}/>
            <Contact />
        </div>
    )
}
export default Home;