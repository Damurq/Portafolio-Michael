import React from 'react'
import data from "../../data/Home.json"
// import "./AboutSection.css";
import HeaderComponent from '../HeaderComponent/HeaderComponent'

const AboutSection = () => {
    const about_section = data.components.AboutSection
    const photo = "presentation/Michael_Montero_Dark.png"

    return (
        <section className="about section" id="about">
            <HeaderComponent data={about_section.HeaderComponent} ></HeaderComponent>
            <div className="about__container container grid">
                <img src={photo} alt="" className="about__img" />
                <div className="about__data">
                    <p className="about__description">
                        {about_section.description}
                    </p>
                    <div className="about__info">
                        {about_section.experience.map((exp) => {
                            let jsxDescription = exp.description.split(",").map((word) => {
                                return (<React.Fragment>
                                    {word}<br />
                                </React.Fragment>)
                            })
                            return (<div key={`${exp.description[0]}`}>
                                <span className="about__info-title">
                                    {exp.amount}
                                </span>
                                <span className="about__info-name">
                                    {jsxDescription}
                                </span>
                            </div>)
                        })}
                        <div className="about__buttons">
                            <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                                Download CV<i className="uil uil-download-alt down__icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}

export default AboutSection