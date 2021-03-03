import dbEnglish from "../../data/dbEnglish.json"
import "./CardAboutMe.css"
const CardAboutMe = () => {
    const carAboutMe = dbEnglish.components.CarAboutMe
    const photo = "presentation/Michael_Montero_Dark.png"
    const photo2 = "aboutMe/ucla.png"

    return ( 
        <div className="CardAboutMe theme-dark-1">
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
                            <img src={photo2} alt="" className=""/>
                        </div>
                    }
                </div>)
             }) }  
            </div>       
            <div className="seeMore">
              <div className="line">

              </div>
                <button className="theme-dark-1">more</button>
            </div>
        </div>
    );
}

export default CardAboutMe;