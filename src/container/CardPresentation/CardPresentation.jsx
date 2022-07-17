import React        from "react"
import CardIcon     from "../../components/CardIcon/CardIcon.jsx"
import "./CardPresentation.css"

const CardPresentation = ({data}) => {
    const photo = "presentation/Michael_Montero_Dark.png"

    return (
        <div className="cardPresentation">
            { data && (
                <React.Fragment>
                    <div className={"cardPresentation-info theme--2"}>
                        <div className="child-flex">
                            <h1 className={"title"}>{data.title}</h1>
                            <h2 className="subtitle-yelow">{data.subtitle}</h2>
                            <p className={" mini-title"}>Specialized as  
                                <b> Frontend Developer</b>
                            </p>
                            <a className="button-yellow" href="#AboutMe"><b>{data.button}</b></a>
                        </div>
                    </div>
                    <div className={"cardPresentation-image theme--1"}>
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