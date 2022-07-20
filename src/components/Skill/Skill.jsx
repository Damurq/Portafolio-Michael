import React, { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import IconsComponent from '../IconsComponent/IconsComponent'
import './Skill.css';

const Skill = ({ data }) => {

  const [open, setOpen] = useState(false)
  
  return (
      <div className={`skills__content ${open ? 'skills__open' : 'skills__close'}`}>
        <div className="skills__header" onClick={() => { setOpen(!open) }}>
          <IconsComponent icon={data.icon} className={`uil skills__icon`}/>
          <div>
            <h1 className="skills__title">{data.name}</h1>
            <span className="skills__subtitle">{data.description}</span>
          </div>
          <BsChevronDown className="uil skills__arrow" />
        </div>
        <div className="skills__list grid">
        {data.options.map((elm, i) => (
            <div className="skills__data" key={`${elm.title}-${i}`}>
              <div className="skills__titles">
                <h3 className="skills__name">
                  {elm.title}
                </h3>
                <span className="skills__number">{elm.description}</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage" style={{ width: "100%" }} ></span>
              </div>
            </div>
          ))}
        </div>
      </div>


  )
}

export default Skill