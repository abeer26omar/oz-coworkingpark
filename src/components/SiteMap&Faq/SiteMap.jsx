import React from 'react';
import './sitemap.css'
import site from '../../assets/images/site_map.jpg'
import MainHeaderWrapper from '../UI/MainHeaderWrapper';
import CardSite from '../UI/CardSite';
const  SiteMap  = () => {
const links = [
    { name: 'Booking', to: '/booking' },
    { name: 'Membership', to: '/membership' },
    { name: 'Private Events', to: '/private' },
    { name: 'Community', to: '/community' },   
    { name: 'Events', to: '/' },//

 ]
const links1 = [
    { name: 'MR', to: '/' },
    { name: 'Spaces', to: '/about' },
    { name: 'Office', to: '/contact' },
 ]
const links2 = [
    { name: 'The Social', to: '/' },
    { name: 'The Native', to: '/about' },
    { name: 'The Studio', to: '/contact' },
    { name: 'Virtual', to: '/contact' },   
 ]
const links3 = [
  { name: "Community Newsfeed", to: "/community/newsfeed" },
  { name: "Community Events", to: "/community/events" },
  { name: "Gallery", to: "/community/galleryshow" },
]
const links4 = [
    { name: 'Previous Events', to: '/' },
    { name: 'Upcoming Events', to: '/about' },  

 ]
const links5 = [
  { name: "My Booking", to: "/profile/mybooking" },
  { name: "My Events", to: "/profile/myevents" },
  { name: "My plan", to: "/profile/myplan" },
  { name: "Favorite", to: "/profile/favoiate" },
  { name: "Issue Reporting", to: "/profile/issueReport" },
];
 const links6 = [
   { name: "About OZ", to: "/about" },
   { name: "Talent Market", to: "/talentmarket" },
   { name: "Contact Admin", to: "/" },
 ];
const links7 = [
  { name: "Achievements for OZ", to: "/" },
  { name: "News feed", to: "/community/newsfeed" },
  { name: "OZ Amenities", to: "/" },
  { name: "Zee Studio", to: "/" },
  { name: "OZ Knowledge", to: "/" },
  { name: "OZY’s", to: "" },
];
 
 return (
    <>
  <MainHeaderWrapper image={site}>
  </MainHeaderWrapper>
  <div className='container py-4'>
    <div className='row'>
        <div className='col-xl-3'>
            <CardSite title={'HOme Page'}  links={links}/>
        </div>
        <div className='col-xl-3'>
            <CardSite title={'Booking'} links={links1}/>
        </div>
        <div className='col-xl-3'>
            <CardSite title={'Membership'} links={links2}/>
        </div>
        <div className='col-xl-3'>
            <CardSite title={'Community'} links={links3}/>
        </div>
    </div> 
     <div className='row'>
        <div className='col-xl-3 mt-xl-4'>
            <CardSite title={'Events'}links={links4} />
        </div>
        <div className='col-xl-3'>
            <CardSite title={'Profile'} links={links5}/>
        </div>
        <div className='col-xl-3'>
            <CardSite title={'Explore'} links={links6} />
        </div>
        <div className='col-xl-3'>
            <CardSite title={'Important links'} links={links7}/>
        </div>
    </div>

  </div>
    </>
  )
}

export default SiteMap
