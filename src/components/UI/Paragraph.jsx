import React from 'react';
import './Paragraph.css';
function Paragraph(props) {
  return (
    <>
     <p className= {`${props.className}`}>{props.children}</p> 
    </>
  )    
}

export default React.memo(Paragraph) ;
