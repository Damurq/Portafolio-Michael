import React    from 'react'
import { Link } from "react-router-dom"
// Style
import './SeeMore.css'

const SeeMore = ({to}) => {
    return (
        <div className="seeMore">
            <div className="line">
            </div>
            <Link to={to} className="button-dark">more</Link>
        </div>
    )
}

export default SeeMore