import React from 'react'
import Style from './Paragraph.module.css'
function Description(props) {
  return (
    <><p className={`${props.className} ${Style.description}`}>{props.desc}</p></>
  )
}

export default React.memo(Description) ;