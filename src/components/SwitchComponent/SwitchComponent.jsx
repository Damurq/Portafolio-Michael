import React from 'react'
import './SwitchComponent.css'

const SwitchComponent = ({tags , callback}) => {
    return (
        <React.Fragment>
            <input id="toggle" className="toggle" type="checkbox" role="switch" name="toggle" value="on" onClick={callback}/>
            <label htmlFor="toggle" className="slot">
                <span className="slot__label">{tags[0]}</span>
                <span className="slot__label">{tags[1]}</span>
            </label>
            <div className="curtain"></div>
        </React.Fragment>
    )
}

export default SwitchComponent