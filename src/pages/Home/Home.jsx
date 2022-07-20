import React            from "react"
import { useSelector }  from 'react-redux'
// Components
import CardPresentation from "../../container/CardPresentation/CardPresentation"
import CardAboutMe      from "../../container/CardAboutMe/CardAboutMe"
import CardPortfolio    from "../../container/CardPortfolio/CardPortfolio"
import CardContact      from "../../container/CardContact/CardContact"
// Data
import data             from "../../data/Home.json"

const Home = ()=>{
    const language = useSelector((state) => state.language.currentLanguage)

    return (
        <div className="Content">
            <CardPresentation data={data[language].components.CardPresentation} />
            <CardAboutMe sectionPage="home" data={data[language].components.CardAboutMe} />
            <CardPortfolio sectionPage="home" data={data[language].components.CardPortfolio}/>
            <CardContact data={data[language].components.Contact} />
        </div>
    )
}
export default Home;