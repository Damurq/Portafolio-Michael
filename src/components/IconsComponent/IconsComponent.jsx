import React                                                                    from 'react'
import { AiOutlineAntDesign, AiOutlineProfile, AiOutlineHome, AiOutlineSend }   from 'react-icons/ai'
import { BiUser, BiBriefcase }                                                  from 'react-icons/bi'
import { BsBraces, BsFillBriefcaseFill, BsTelephone }                           from 'react-icons/bs'
import { FaGraduationCap, FaPuzzlePiece, FaUniversity, FaPython }               from 'react-icons/fa'
import { FiDatabase }                                                           from 'react-icons/fi'
import { MdOutlineCollections }                                                 from 'react-icons/md'
import { HiOutlineMail, HiOutlineLocationMarker }                               from 'react-icons/hi'
import { MdOutlineWeb }                                                         from 'react-icons/md'
import { SiMaterialdesignicons, SiAltiumdesigner }                              from 'react-icons/si'
import { DiJavascript1 }                                                        from 'react-icons/di'

const IconsComponent = ({ icon, className = '' }) => {

    const selectIcon = () => {
        let element = <div></div>
        switch (icon) {
            case 'brackets':
                element = <BsBraces className={className} />
                break;
            case 'database':
                element = <FiDatabase className={className} />
                break;
            case 'education':
                element = <FaGraduationCap className={className} />
                break;
            case 'work':
                element = <BsFillBriefcaseFill className={className} />
                break;
            case 'frontend':
                element = <MdOutlineWeb className={className} />
                break;
            case 'design':
                element = <AiOutlineAntDesign className={className} />
                break;
            case 'phone':
                element = <BsTelephone className={className} />
                break;
            case 'location':
                element = <HiOutlineLocationMarker className={className} />
                break;
            case 'email':
                element = <HiOutlineMail className={className} />
                break;
            case 'home':
                element = <AiOutlineHome className={className} />
                break;
            case 'user':
                element = <BiUser className={className} />
                break;
            case 'skills':
                element = <AiOutlineProfile className={className} />
                break;
            case 'services':
                element = <BiBriefcase className={className} />
                break;
            case 'portfolio':
                element = <MdOutlineCollections className={className} />
                break;
            case 'send':
                element = <AiOutlineSend className={className} />
                break;
            case 'structure':
                element = <SiMaterialdesignicons className={className} />
                break;
            case 'area':
                element = <SiAltiumdesigner className={className} />
                break;    
            case 'puzzle':
                element = <FaPuzzlePiece className={className} />
                break;  
            case 'university':
                element = <FaUniversity className={className} />
                break;    
            case 'js':
                element = <DiJavascript1 className={className} />
                break;    
            case 'python':
                element = <FaPython className={className} />
                break;  
            default:
                element = <MdOutlineWeb className={className} />
                break;
        }
        return element
    }

    return (
        selectIcon()
    )
}

export default IconsComponent