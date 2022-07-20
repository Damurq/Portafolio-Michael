import React            from 'react'
import IconsComponent   from '../IconsComponent/IconsComponent'
// Style
import './InformationCard.css'

const InformationCard = ({data}) => {
    return (
        <div className="contact__information">
            <IconsComponent icon={data.icon} className={`uil contact__icon`}/>
            <div>
                <h3 className="contact__title">{data.label}</h3>
                <span className="contact__subtitle">{data.info}</span>
            </div>
        </div>
    )
}

export default InformationCard