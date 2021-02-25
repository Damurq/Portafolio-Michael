import { faFacebookF, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import "./CardIcon.css"

const  CardIcon = () => {
    library.add(faFacebookF,faInstagram,faLinkedinIn,faGithub)
    return ( 
        <div className="icon--socialMedia">
            <a className="facebook" href="http://" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={['fab', 'facebook-f']}/>
            </a>
            <a className="instagram" href="http://" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={['fab', 'instagram']}/>
            </a>
            <a className="linkedin" href="http://" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={['fab', 'linkedin-in']}/>
            </a>
            <a className="github" href="http://" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="icon" icon={['fab', 'github']}/>                
            </a>
        </div>
    );
}

export default CardIcon;