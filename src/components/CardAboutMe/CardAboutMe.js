import dbEnglish from "../../data/dbEnglish.json"
import "./CardAboutMe.css"

const CardAboutMe = ({sectionPage}) => {
    const carAboutMe = dbEnglish.components.CarAboutMe
    const photosrcMe = "presentation/Michael_Montero_Dark.png"
    const photosrcUCLA = "aboutMe/ucla.png"

    return ( 
        <div id="AboutMe" className={"CardAboutMe theme--1 " + sectionPage}>
            <h2 className="title">About Me</h2>
            <div className="CardAboutMe-content">
            { carAboutMe.map((section, index)=>{ 
                return (<div key={"section-"+index} className={"animate animate-left CardAboutMe__section--" + index}>
                    <div className="CardAboutMe__section--first">
                        <h3 className="subtitle">{section.title}</h3>
                        <p className="mini-title">
                            {section.description}   
                        </p>
                    </div>
                    { index===0 &&
                        <div className="CardAboutMe__sectionImage">
                            <img src={photosrcUCLA} alt=""  />
                        </div>
                    }
                </div>)
            }) }  
            </div>       
        </div>
    );
}

export default CardAboutMe;