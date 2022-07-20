import React            from 'react'
import { useSelector }  from 'react-redux'
import { Link }         from "react-router-dom"
// Style
import './SeeMore.css'

const SeeMore = ({to}) => {
    const language = useSelector((state) => state.language.currentLanguage)
    
    return (
        <div className="seeMore">
            <div className="line">
            </div>
            <Link to={to} className="button-dark">{ language === "EN" ? "more" : "ver más"}</Link>
        </div>
    )
}

export default SeeMore