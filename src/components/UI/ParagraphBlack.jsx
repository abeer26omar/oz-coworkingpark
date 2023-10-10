import React from 'react';
import Style from './Paragraph.module.css';
function ParagraphBlack(props) {
  return (
    <>
     <p className= {`${props.className} ${Style.paragraph_black}`} >{props.titleBox}</p> 
    </>
  )    
}

export default React.memo(ParagraphBlack) ;
