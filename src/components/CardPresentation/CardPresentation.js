import React from "react"
import { useEffect } from "react"
import CardIcon from "../CardIcon/CardIcon"
import dbEnglish from "../../data/dbEnglish.json"
import "./CardPresentation.css"

const CardPresentation = () => {
    const cardPresentation = dbEnglish.components.CardPresentation
    const photo = "presentation/Michael_Montero_Dark.png"

    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        window.scroll({
            top: offsetTop-50,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        for (const link of links) {
            link.addEventListener("click", clickHandler);
        }
    },[]);

    return (
        <div className="cardPresentation">

            { cardPresentation && (
                <React.Fragment>
                    <div className={"cardPresentation-info theme-dark-2"}>
                        <div className="child-flex">
                            <h1 className={"title"}>{cardPresentation.title}</h1>
                            <h2 className="subtitle-yelow">{cardPresentation.subtitle}</h2>
                            <p className={" mini-title"}>Specialized as  
                                <b> Frontend Developer</b>
                            </p>
                            <a className="button-yellow" href="#AboutMe"><b>{cardPresentation.button}</b></a>
                        </div>
                    </div>
                    <div className={"cardPresentation-image theme-dark-1"}>
                        <div className="child-flex">
                            <div className="content-image">
                                <img src={photo} alt="Michael_Montero" />
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