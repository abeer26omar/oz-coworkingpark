import React from 'react'
import Style from './BoxHeader.module.css'
function BoxHeader(props) {
  return (
    <>
     <div className={`${props.className} ${Style.box}`} >
         <div className={`${props.className} ${Style.group_wrapper}`} >
            <div className={`${props.className} ${Style.group}`} >
                 <div className={`${props.className} ${Style.overlap_group}`} >
                   <div className={`${props.className} ${Style.rectangle}`} />
                 </div>  
                {/* <video className={props.classNameVideo} alt="Group" src={props.src} autoPlay muted loop/> */}
                  
            </div> 
         </div> 
    </div> 
    </>
  )
}

export default React.memo(BoxHeader);
