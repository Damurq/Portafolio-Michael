import "./Contact.css"
import React, {useState} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const frmContact = { name:'', email:'', message:'' };
    const [contact,setContact] = useState(frmContact);
    const [showMessage, setShowMessage] = useState(false);
    const handleChange = e => { 
        const {name,value} = e.target;
        setContact({...contact,[name]:value}); 
    };
    const handleSubmit = e =>{
        e.preventDefault();
        //emailjs.send(serviceID, templateID, templateParams, userID);
        emailjs.send('service_qouvm2v','template_5l5z31s', contact, 'user_TycNx2NKdCmd0lwxJRCuz')
        .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setContact(frmContact);
                    setShowMessage(true);
        }, (err) => {
                    console.log('FAILED...', err);
        });
    }
    return (
        <div id="Contact" className="Contact theme-dark-1">
            <h2 className="title">Contact</h2>
            <div className="Container-formContact theme-dark-2">
                <form className="formContact" onSubmit={handleSubmit} >
                    <label className="subtitle" htmlFor="name">Name</label>
                    <input className="input" onChange={handleChange} placeholder="enter your name" required value={contact.name} type="text" name="name" id="name"/>
                    <label className="subtitle" htmlFor="email">Email</label>
                    <input className="input" onChange={handleChange} placeholder="enter your email" required value={contact.email} type="email" name="email" id="email"/>
                    <label className="subtitle label--single" htmlFor="message">Message</label>
                    <textarea className="input" onChange={handleChange} placeholder="write a message" required value={contact.message} name="message" id="message"></textarea>
                    <button className="button-yellow subtitle" >send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact