import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import dbEnglish from "../../data/dbEnglish.json"

const CardPortfolio = () => {
    const [section, setSection] = useState("")
    const [cardPortfolio, setCardPortfolio] = useState(dbEnglish.components.CardPortfolio)
    const location = useLocation().pathname;

    useEffect(() => {
        setSection("")
        if (location === "/") {
            setSection("home");
            setCardPortfolio(cardPortfolio.filter(projects=> projects.type==="web-site" ));
        }
        else if (location === "/Portfolio") {
            setSection("Portfolio");
            setCardPortfolio(dbEnglish.components.CardPortfolio);
        }
        //setPresentation(data[section]);
    });

    return (
        <div className="">
            <h2 className="">Portfolio</h2>
            <div className="">
                {cardPortfolio.map(() => {
                    return (<Link to="/">
                        <div className="">
                            <img src="" alt="" className="" />
                        </div>
                    </Link>)
                })}
            </div>
            <div className="">
              <div className="">

              </div>
                <button>more</button>
            </div>
        </div>
    );
}

export default CardPortfolio;