import {useEffect,useState} from "react"
import { useLocation } from "react-router-dom"
import db from "../../data/db.json"

const CardPresentation = () => {
    const [section, setSection] = useState("")
    const [presentation, setPresentation] = useState({})
    const location = useLocation().pathname;
    const data =db.presentations;

    useEffect(() => {
        setSection("")
        if(location==="/"){
            setSection("home");
        }
        else if(location==="/about"){
            setSection("about");
        }
        setPresentation(data[section]);
    });
    
    return ( 
        <div className="cardPresentation">
            { presentation && (
                <div className={section}>    
                    <h1 className={section}>{presentation.title}</h1>
                    <p className={section}>{presentation.description}</p>
                    { (section==="about") &&<p className={section}>{presentation.email}</p>}
                    <div className={section}>
                        <img src="" alt="" className={section}/>
                    </div>
                </div>
            )}
        </div>

     );
}
 
export default CardPresentation;