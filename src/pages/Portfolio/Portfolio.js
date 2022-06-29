import CardPortfolio from "../../components/CardPortfolio/CardPortfolio"
import "./Portfolio.css"
// Data
import data from "../../data/Home.json"

const Portfolio = () => {
    return ( 
        <div className="Content">
            <CardPortfolio sectionPage="portfolio" data={data.components.CardPortfolio} />
        </div>
     );
}
 
export default Portfolio;