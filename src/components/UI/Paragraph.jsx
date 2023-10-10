import React from 'react';
import Style from './Paragraph.module.css';
function Paragraph(props) {
  return (
    <>
     <p className= {`${props.className} ${Style.head_paragraph}`} >{props.title}</p> 
    </>
  )    
}

export default React.memo(Paragraph) ;
