import React from 'react'

import "./HeaderComponent.css";

const HeaderComponent = ({data, section='section'}) => {

  return (
    <React.Fragment>
        {data.title && <h2 className={`${section}__title`}>{data.title}</h2>}
        {data.subtitle && <span className={`${section}__subtitle`}>{data.subtitle}</span>}
    </React.Fragment>
  )
}

export default HeaderComponent