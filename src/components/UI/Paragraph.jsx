import React from 'react';
import './Paragraph.css';
function Paragraph(props) {
  return (
    <>
     <p className= {`${props.className}`} style={props.style}>{props.children}</p> 
    </>
  )    
}

export default React.memo(Paragraph) ;
