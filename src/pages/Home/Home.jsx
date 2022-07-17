// Components
import CardPresentation from "../../container/CardPresentation/CardPresentation"
import CardAboutMe      from "../../container/CardAboutMe/CardAboutMe"
import CardPortfolio    from "../../components/CardPortfolio/CardPortfolio"
import CardContact          from "../../container/CardContact/CardContact"
// Data
import data             from "../../data/Home.json"

const Home = ()=>{

    return (
        <div className="Content">
            <CardPresentation data={data.components.CardPresentation} />
            <CardAboutMe sectionPage="home" data={data.components.CardAboutMe} />
            <CardPortfolio sectionPage="home" data={data.components.CardPortfolio}/>
            <CardContact data={data.components.Contact} />
        </div>
    )
}
export default Home;