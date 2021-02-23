const Contact = () => {

    return (
        <div className="">
            <h2 className="">Contact</h2>
            <div className="">
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name"/>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"></textarea>
                    <button>send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact