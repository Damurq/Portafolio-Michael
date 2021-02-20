import React from "react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import db from "../../data/db.json"
import "./CardPresentation.css"

const CardPresentation = () => {
    const [section, setSection] = useState("")
    const [presentation, setPresentation] = useState({})
    const location = useLocation().pathname;
    const data = db.presentations;
    const photo = "presentation/foto.jpg"

    useEffect(() => {
        setSection("")
        if (location === "/") {
            setSection("home");
        }
        else if (location === "/about") {
            setSection("about");
        }
        setPresentation(data[section]);
    });

    return (
        <div className="cardPresentation">
            { presentation && (
                <React.Fragment>
                    <div className={section + " cardPresentation-info"}>
                        <h1 className={section}>{presentation.title}</h1>
                        <p className={section}>{presentation.description}</p>
                        {(section === "about") && <p className={section}>{presentation.email}</p>}
                    </div>
                    <div className={section + " cardPresentation-image"}>
                        <img src={photo} alt="Michael_Montero" className={section} />
                    </div>
                </React.Fragment>
            )}
        </div>

    );
}

export default CardPresentation;