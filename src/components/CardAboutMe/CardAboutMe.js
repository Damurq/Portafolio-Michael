import { Link } from "react-router-dom"
import "./CardAboutMe.css"

const CardAboutMe = ({ sectionPage, data }) => {
    const photosrcMe = "presentation/Michael_Montero_Dark.png"
    const photosrcUCLA = "aboutMe/ucla.png"

    return (
        <div id="AboutMe" className={"CardAboutMe theme--1 " + sectionPage}>
            <h2 className="title">About Me</h2>
            <div className="CardAboutMe-content">
                {data.map((section, index) => {
                    return (<div key={"section-" + index} className={"CardAboutMe__section--" + index}>
                        <div className="CardAboutMe__section--first">
                            <h3 className="subtitle">{section.title}</h3>
                            <p className="mini-title">
                                {section.description}
                            </p>
                        </div>
                        {index === 0 &&
                            <div className="CardAboutMe__sectionImage">
                                <img src={photosrcUCLA} alt="" />
                            </div>
                        }
                    </div>)
                })}

            </div>
            
            <div className="seeMore">
                <div className="line">
                </div>
                <Link to="/About-me" className="button-dark">more</Link>
            </div>
        </div>
    );
}

export default CardAboutMe;