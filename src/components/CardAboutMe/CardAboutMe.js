import dbEnglish from "../../data/dbEnglish.json"
import "./CardAboutMe.css"
const CardAboutMe = () => {
    const carAboutMe = dbEnglish.components.CarAboutMe

    return ( 
        <div className="CardAboutMe theme-dark-1">
            <h2 className="title">About Me</h2>
            <div className="CardAboutMe-content">
            { carAboutMe.map((section, index)=>{ 
                return (<div className="">
                    <h3 className="subtitle">{section.title}</h3>
                    <p className="mini-title">
                        {section.description}   
                    </p>
                    { index===0 &&
                        <div className="">
                            <img src="" alt="" className=""/>
                            <img src="" alt="" className=""/>
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