import React    from 'react'
import AOS      from 'aos';
// Locals
import SeeMore  from '../../components/SeeMore/SeeMore'
// Style
import 'aos/dist/aos.css'; 
import "./CardAboutMe.css"

const CardAboutMe = ({ sectionPage, data }) => {
    const photosrcUCLA = "/aboutMe/ucla.png"

    React.useEffect(() => { 
        AOS.init({duration:1800});

     },[])

    return (
        <div id="AboutMe" className={"CardAboutMe theme--1 " + sectionPage}>
            <h2 className="title">{data.title}</h2>
            <div data-aos="slide-right" className="CardAboutMe-content">
                {data.content && data.content.map((section, index) => {
                    return (<div key={"section-" + index} className={"CardAboutMe__section--" + index}>
                        <div className="CardAboutMe__section--first">
                            <h3 className="subtitle">{section.title}</h3>
                            <p className="mini-title">
                                {section.description}
                            </p>
                        </div>
                        {index === 0 &&
                            <div className="CardAboutMe__sectionImage">
                                <img src={process.env.PUBLIC_URL + photosrcUCLA} alt="" />
                            </div>
                        }
                    </div>)
                })}
            </div>
            <SeeMore to="/Portafolio-Michael/About-me" />
        </div>
    );
}

export default CardAboutMe;