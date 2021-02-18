

const Contact = () => {
    

    return (
        <div className="">
            <div className="">
                <div className="">
                    <h1>Contacto</h1>
                    <p>Puedes ponerte en contacto por me dio de este formulario o por las redes sociales</p>
                    <p>michaeldamurq@gmail.com</p>
                </div>
                <div className="">
                    <img src="" alt=""/>
                    <p>Descargar Curriculum Vitae</p>
                </div>
            </div>
            <div className="">
                <form>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" id="name"/>
                    <label htmlFor="email">email</label>
                    <input type="email" name="email" id="email"/>
                    <label htmlFor="message">Mensaje</label>
                    <textarea name="message" id="message"></textarea>
                    <button>enviar</button>
                </form>
            </div>
            <div className="">
                <h2>Redes sociales</h2>
                <div className="">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Contact