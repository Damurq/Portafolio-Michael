import React from "react"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import CardIcon from "../CardIcon/CardIcon"
import "./CardPresentation.css"
import dbEnglish from "../../data/dbEnglish.json"

const CardPresentation = () => {
    const [section, setSection] = useState("")
    const [presentation, setPresentation] = useState({})
    const location = useLocation().pathname;
    const cardPresentation = dbEnglish.components.CardPresentation
    const photo = "presentation/descarga.jpg"

    useEffect(() => {
        setSection("")
        if (location === "/") {
            setSection("home");
        }
        else if (location === "/about") {
            setSection("about");
        }
        //setPresentation(data[section]);
    });

    return (
        <div className="cardPresentation">

            { presentation && (
                <React.Fragment>
                    <div className={section + " cardPresentation-info theme-dark-2"}>
                        <div className="child-flex">
                            <h1 className={section + " title"}>{cardPresentation.title}</h1>
                            <h2 className="subtitle-yelow">{cardPresentation.subtitle}</h2>
                            <p className={section + " mini-title"}>Specialized as  
                                <b> Frontend Developer</b>
                            </p>
                            <button className="button-yellow"><b>{cardPresentation.button}</b></button>
                            {(section === "about") && <p className={section}>{presentation.email}</p>}
                        </div>
                    </div>
                    <div className={section + " cardPresentation-image theme-dark-1"}>
                        <div className="child-flex">
                            <div className="content-image">
                                <img src={photo} alt="Michael_Montero" className={section} />
                            </div>
                            <div className="content-icon">
                                <div className="line"></div>
                                <CardIcon />
                                <div className="line"></div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>

    );
}

export default CardPresentation;