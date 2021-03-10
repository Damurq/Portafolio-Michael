import "./Contact.css"

const Contact = () => {

    return (
        <div id="Contact" className="Contact theme-dark-1">
            <h2 className="title">Contact</h2>
            <div className="Container-formContact theme-dark-2">
                <form className="formContact">
                    <label className="subtitle" htmlFor="name">Name</label>
                    <input className="input" type="text" name="name" id="name"/>
                    <label className="subtitle" htmlFor="email">Email</label>
                    <input className="input" type="email" name="email" id="email"/>
                    <label className="subtitle label--single" htmlFor="message">Message</label>
                    <textarea className="input"name="message" id="message"></textarea>
                    <button className="button-yellow subtitle">send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact