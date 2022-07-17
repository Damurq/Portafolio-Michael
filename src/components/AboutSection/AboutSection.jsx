import React from 'react'
import { FiDownload } from 'react-icons/fi'

import HeaderComponent from '../HeaderComponent/HeaderComponent'
import "./AboutSection.css";

const AboutSection = ({ data }) => {
    const photo = "presentation/Michael_Montero_Dark.png"

    return (
        <div className="about section theme--1" id="about">
            <HeaderComponent data={data.HeaderComponent} ></HeaderComponent>
            <div className="about__container">
                <img src={photo} alt="" className="about__img" />
                <div className="about__data">
                    <h2 className='introduction--about'>{data.header}</h2>
                    <p className="about__description">
                        {data.description}
                    </p>
                    <div className="about__info">
                        <div className="about__info-experience">
                            {data.experience.map((exp, i) => {
                                return (
                                    <div key={`${exp.description[i]}-${i}`}>
                                <span className="about__info-title">
                                    {exp.amount}
                                </span>
                                <span className="about__info-name">
                                    {exp.description}
                                </span>
                                </div>
                                )
                            })}
                        </div>
                            <a download="" href="pdf/Alexa-Cv.pdf" className="about__buttons">
                                Download CV
                                <FiDownload className="uil down__icon" />
                            </a>
                    </div>
                </div>
            </div>
        </div>)
}

export default AboutSection