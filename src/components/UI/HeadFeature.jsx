import React from 'react'
import Style from './Paragraph.module.css'
function HeadFeature(props) {
  return (
    <>
    <p className={`${props.className} ${Style.head_feature}`} >{props.HeadFeature}</p>
    </>
  )
}

export default React.memo(HeadFeature) 