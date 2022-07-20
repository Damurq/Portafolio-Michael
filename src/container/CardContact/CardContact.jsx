import React            from 'react'
// Components
import ContactForm      from '../../components/ContactForm/ContactForm'
import InformationCard  from '../../components/InformationCard/InformationCard'
// Style
import './CardContact.css'

const CardContact = ({data}) => {

    return (
        <div id="Contact" className="Contact theme--1 contact section" >
            <h2 className="title">{data.title}</h2>
            <div className="contact__container">
                <div className='information-contact'>
                    {data.extra.map((data, index) => (
                        <InformationCard data={data} key={`extra-info--contact-${index}`}/>
                    ))}
                </div>
                <ContactForm />
            </div>
        </div>
    )
}

export default CardContact