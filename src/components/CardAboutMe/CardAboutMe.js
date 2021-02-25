import dbEnglish from "../../data/dbEnglish.json"
import "./CardAboutMe.css"
const CardAboutMe = () => {
    const carAboutMe = dbEnglish.components.CarAboutMe
    const photo = "presentation/descarga.jpg"

    return ( 
        <div className="CardAboutMe theme-dark-1">
            <h2 className="title">About Me</h2>
            <div className="CardAboutMe-content">
            { carAboutMe.map((section, index)=>{ 
                return (<div key={"section-"+index} className={"CardAboutMe__section--" + index}>
                    <div className="CardAboutMe__section--first">
                        <h3 className="subtitle">{section.title}</h3>
                        <p className="mini-title">
                            {section.description}   
                        </p>
                    </div>
                    { index===0 &&
                        <div className="CardAboutMe__sectionImage">
                            <img src={photo} alt="" className=""/>
                            <img src={photo} alt="" className=""/>
                        </div>
                    }
                </div>)
             }) }  
            </div>       
            <div className="">
              <div className="">

              </div>
                <button>more</button>
            </div>
        </div>
    );
}

export default CardAboutMe;