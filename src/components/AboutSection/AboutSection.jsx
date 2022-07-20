import React            from 'react'
import { FiDownload }   from 'react-icons/fi'
import { useSelector }  from 'react-redux'
import AOS              from 'aos';
// Local
import HeaderComponent  from '../HeaderComponent/HeaderComponent'
// Style
import 'aos/dist/aos.css'; 
import "./AboutSection.css";

const AboutSection = ({ data }) => {
    const language = useSelector((state) => state.language.currentLanguage)
    const photo = "presentation/Michael_Montero_Dark.png"

    React.useEffect(() => { 
        AOS.init({duration:2000});
     },[])

    return (
        <div className="about section theme--2" id="about">
            <HeaderComponent data={data.HeaderComponent} ></HeaderComponent>
            <div data-aos="fade-up" className="about__container">
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
                            <a download="" href={`pdf/${language}/MichaelMontero.pdf`} className="about__buttons">
                                {language === 'EN' ? 'Download CV' : 'Descargar CV'}
                                <FiDownload className="uil down__icon" />
                            </a>
                    </div>
                </div>
            </div>
        </div>)
}

export default AboutSection