import React from 'react'
import Style from './Paragraph.module.css'
function Mainheader(props) {
  return (
    <>
    <p className={Style.main_header}>{props.title}</p>
    </>
  )
}

export default React.memo(Mainheader);