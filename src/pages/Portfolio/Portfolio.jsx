import { useSelector }  from 'react-redux'
import CardPortfolio    from "../../container/CardPortfolio/CardPortfolio"
// Data
import data             from "../../data/Home.json"
// Style
import "./Portfolio.css"

const Portfolio = () => {
    const language = useSelector((state) => state.language.currentLanguage)

    return ( 
        <div className="Content">
            <CardPortfolio sectionPage="portfolio" data={data[language].components.CardPortfolio} />
        </div>
     );
}
 
export default Portfolio;