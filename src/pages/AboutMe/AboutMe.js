import AboutSection from "../../components/AboutSection/AboutSection"
import InformationContainer from "../../container/InformationContainer/InformationContainer"

import data from "../../data/AboutMe.json"

const AboutMe = () => {

    return ( 
        <div className="Content">
            <AboutSection data={data.AboutSection}></AboutSection>
            <InformationContainer data={data.sections}></InformationContainer>
            
        </div>
     );
}
 
export default AboutMe;