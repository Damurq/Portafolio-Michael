import { useSelector }  from 'react-redux'
// Locals
import AboutSection from "../../components/AboutSection/AboutSection"
import InformationContainer from "../../container/InformationContainer/InformationContainer"
// Data
import data from "../../data/AboutMe.json"

const AboutMe = () => {
    const language = useSelector((state) => state.language.currentLanguage)

    return ( 
        <div className="Content">
            <AboutSection data={data[language].AboutSection}></AboutSection>
            <InformationContainer data={data[language].sections}></InformationContainer>
        </div>
     );
}
 
export default AboutMe;