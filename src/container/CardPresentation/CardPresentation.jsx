import React        from "react"
import AOS              from 'aos';

import CardIcon     from "../../components/CardIcon/CardIcon.jsx"
// Style
import 'aos/dist/aos.css'; 
import "./CardPresentation.css"

const CardPresentation = ({data}) => {
    const photo = "presentation/Michael_Montero_Dark.png"

    React.useEffect(() => { 
        AOS.init({duration:2000});
     },[])

    return (
        <div className="cardPresentation">
            { data && (
                <React.Fragment>
                    <div className={"cardPresentation-info theme--2"}>
                        <div data-aos="fade-up" className="child-flex">
                            <h1 className={"title"}>{data.title}</h1>
                            <h2 className="subtitle-yelow">{data.subtitle}</h2>
                            <p className={" mini-title"}>
                                {data.description}
                            </p>
                            <a className="button-yellow" href="#AboutMe"><b>{data.button}</b></a>
                        </div>
                    </div>
                    <div className={"cardPresentation-image theme--1"}>
                        <div data-aos="fade-up" className="child-flex">
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