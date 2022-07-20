import { BsInstagram, BsGithub }    from "react-icons/bs"
import { FaLinkedinIn }             from "react-icons/fa"
// Style
import "./CardIcon.css"

const  CardIcon = () => {
    return ( 
        <div className="icon--socialMedia">
            <a className="instagram social" href="https://www.instagram.com/mike.0408/" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="icon" />
            </a>
            <a className="linkedin social" href="https://www.linkedin.com/in/michael-montero-urquiola-bb62b61b6" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="icon" />
            </a>
            <a className="github social" href="https://github.com/Damurq?tab=repositories" target="_blank" rel="noopener noreferrer">
                <BsGithub className="icon" />                
            </a>
        </div>
    );
}

export default CardIcon;