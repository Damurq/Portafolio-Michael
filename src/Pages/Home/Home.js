import CardPresentation from "../../components/CardPresentation/CardPresentation"
import CardAboutMe from "../../components/CardAboutMe/CardAboutMe"
import CardPortfolio from "../../components/CardPortfolio/CardPortfolio"
import Contact from "../../components/Contact/Contact"
import Footer from "../../components/Footer/Footer"
import db from "../../data/db.json"

const Home = ()=>{
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