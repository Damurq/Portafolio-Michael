import React                from 'react'
import { useSelector }      from 'react-redux'
import { Formik }           from 'formik';
import { AiOutlineSend }    from 'react-icons/ai'
import emailjs              from 'emailjs-com';
// Style
import './ContactForm.css'

const ContactForm = () => {
    const language = useSelector((state) => state.language.currentLanguage)

    const selectLanguage = (english, spanish) => {
      return language === "EN" ? english : spanish
    }
    

    return (
        <Formik
            initialValues={{ email: '', project: '', name: '', message: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = selectLanguage('Required','Requerido');
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = selectLanguage('Invalid email address','Email invalido');
                }
                if (!values.project) {
                    errors.project = selectLanguage('Required','Requerido');
                }
                if (!values.name) {
                    errors.name = selectLanguage('Required','Requerido');
                }
                if (!values.message) {
                    errors.message = selectLanguage('Required','Requerido');
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                //emailjs.send(serviceID, templateID, templateParams, userID);
                emailjs.send("service_qouvm2v","template_5l5z31s", values, 'user_TycNx2NKdCmd0lwxJRCuz')
                .then((response) => {
                    alert(selectLanguage('Message sent succesfully','Mensaje enviado con exito'))
                    console.log('SUCCESS!', response.status, response.text);
                    setSubmitting(true);

                }, (err) => {
                    alert(selectLanguage('Error sending message','Error al enviar el mensaje'))
                    console.log('FAILED...', err);
                    setSubmitting(false);
                });
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content theme--3">
                            <label htmlFor="name" className="contact__label">{selectLanguage('Name','Nombre')}</label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                type="text"
                                className="contact__input theme--3" id='name' />
                            <p className="error">
                                {errors.name && touched.name && errors.name}
                            </p>
                        </div>
                        <div className="contact__content theme--3">
                            <label htmlFor="email" className="contact__label">Email</label>
                            <input
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                type="email"
                                className="contact__input theme--3" />
                            <p className="error">
                                {errors.email && touched.email && errors.email}
                            </p>
                        </div>
                    </div>
                    <div className="contact__content theme--3">
                        <label htmlFor="project" className="contact__label">{selectLanguage('Project','Proyecto')}</label>
                        <input
                            id="project"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.project}
                            type="text"
                            className="contact__input theme--3" />
                        <p className="error">
                            {errors.project && touched.project && errors.project}
                        </p>
                    </div>
                    <div className="contact__content theme--3">
                        <label htmlFor="message" className="contact__label">{selectLanguage('Message','Mensaje')}</label>
                        <textarea
                            id="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            name="message" cols="0" rows="7" className="contact__input theme--3"></textarea>
                        <p className="error">
                            {errors.message && touched.message && errors.message}
                        </p>
                    </div>
                    <div className='container-button--contact'>
                        <button type="submit" className='button button--flex button--contact' disabled={isSubmitting}>
                            {selectLanguage('Send Message', 'Enviar mensaje')}
                            <AiOutlineSend className="uil button__icon" />
                        </button>
                    </div>
                </form>
            )}
        </Formik>)
}

export default ContactForm