import React, { useState, useEffect }   from 'react'
// Components
import IconsComponent                   from '../../components/IconsComponent/IconsComponent'
import Skill                            from '../../components/Skill/Skill'
// Style
import './InformationContainer.css'

const InformationContainer = ({ data }) => {
    const sections = Object.keys(data)
    const [activeSection, setActiveSection] = useState(sections.length ? sections[0] : null)
    const [elementList, setElementList] = useState(activeSection ? Object.keys(data[activeSection].elements) : [])
    const [activeElement, setActiveElement] = useState(elementList.length
        ? elementList[0]
        : null)
    const [subList, setSubList] = useState(activeElement
        ? Object.keys(data[activeSection].elements[activeElement].elements)
        : [])

    return (
        <div className='theme--1 information-container flex-column'>
            {sections && (<React.Fragment>
                <div className='information-sections flex-row'>
                    {sections.map((element, index) => (
                        <div key={`${element}-${index}`} className={`custom-button ${element === activeSection
                            ? "active-section"
                            : ""
                            }`}
                            id={element}
                            onClick={e => {
                                let section = e.currentTarget.id
                                let element_list = Object.keys(data[section].elements)
                                setActiveSection(section)
                                setElementList(element_list)
                                setActiveElement(element_list[0])
                                setSubList(Object.keys(data[section].elements[element_list[0]].elements))
                            }}>
                            <h2 className='section-title'>
                                <IconsComponent icon={data[element].icon} className={`uil`} />
                                {data[element].name}
                            </h2>
                        </div>
                    ))}
                </div>
                <div className='theme--1 information-details flex-row'>
                    <div className="information-elements flex-column">
                        {elementList && elementList.map((ele, i) => (
                            <div key={`${ele}-${i}`} className="flex-row info-element--container" >
                                <div className={`custom-button info-element ${activeElement === ele
                                    ? "active-element"
                                    : ""
                                    }`}
                                    id={ele}
                                    onClick={e => { 
                                        setActiveElement(e.currentTarget.id)
                                        setSubList(Object.keys(data[activeSection].elements[e.currentTarget.id].elements))
                                    }}>
                                    {data[activeSection].elements[ele].name}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="information-sub_elements flex-column">
                        {activeElement && subList.map((el, index) => (
                            <div key={`${el}-${index}`} className={`custom-button`}
                                id={el}
                            >
                                <Skill data={data[activeSection].elements[activeElement].elements[el]}></Skill>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>)}
        </div>
    )
}

export default InformationContainer