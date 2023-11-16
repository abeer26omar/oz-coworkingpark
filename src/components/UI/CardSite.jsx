import React from 'react'
import { Link } from 'react-router-dom';
import Paragraph from './Paragraph';

const  CardSite = (props )=> {
   const linkElements = props.links.map((link, index) => (
    <Link to={link.to} key={index} className='pb-3 links'>{link.name}</Link>
 ));
  return (
    <>
       <div className='site_card'>
                <Paragraph className='title_link'>{props.title}</Paragraph>
                <ul className='p-0 d-flex flex-column'> 
                {linkElements }
                </ul>
            </div>
    </>
  )
}

export default CardSite
