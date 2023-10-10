import React from 'react'
import Style from './Paragraph.module.css'
function DescriptionBlack(props) {
  return (
    <><p className={`${props.className} ${Style.description_black}`}>{props.descBlack}</p></>
  )
}

export default React.memo(DescriptionBlack) ;