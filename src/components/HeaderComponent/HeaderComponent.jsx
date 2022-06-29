import React from 'react'

import "./HeaderComponent.css";

const HeaderComponent = ({ data }) => {

  return (
    <React.Fragment>
      <h2 className="section__title">{data.title}</h2>
      {data.subtitle && <span className="section__subtitle">{data.subtitle}</span>}
    </React.Fragment>
  )
}

export default HeaderComponent