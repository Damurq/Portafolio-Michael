import React    from 'react'
// Locals
import SeeMore  from '../../components/SeeMore/SeeMore'
// Style
import "./CardAboutMe.css"

const CardAboutMe = ({ sectionPage, data }) => {
    const photosrcUCLA = "aboutMe/ucla.png"

    return (
        <div id="AboutMe" className={"CardAboutMe theme--1 " + sectionPage}>
            <h2 className="title">{data.title}</h2>
            <div  className="CardAboutMe-content">
                {data.content && data.content.map((section, index) => {
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
            <SeeMore to="/About-me" />
        </div>
    );
}

export default CardAboutMe;