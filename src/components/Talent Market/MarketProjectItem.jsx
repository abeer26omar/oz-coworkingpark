import { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import SweetAlert2 from 'react-sweetalert2';
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import Media from "../Media/Media";
import { AuthContext } from "../../apis/context/AuthTokenContext";

const MarketProjectItem = ({id, title, image, category, category_logo, user, description, lastseen, is_favorite})=>{

    const [swalProps, setSwalProps] = useState({});
    const [like, setLike] = useState(is_favorite);
    const { token, userId } = useContext(AuthContext);

    const setHours = (seconds) => {
        const milliseconds = seconds * 1000;
        const date = new Date(milliseconds);
        return date.getUTCHours();
    }

    const likeVenue = (id)=>{
        // likeVenues(token, userId, id).then(res=>{
        //     if(res){
        //         setLike(!like);
        //     }
        // }).catch(error=>{
        //     setSwalProps({
        //         show: true,
        //         icon: 'error',
        //         title: error.response.data.status,
        //         text: error.response.data.message,
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // })
    };

    return (
        <>

            <Card className="book-card" key={id}>

                <div className="position-relative">
                    <Media type="img" src={image} className="card-img-top rounded-0" title="desk room" height='309px' />

                    <Button 
                        tagType='link' 
                        className="fav-event"
                        onClick={()=>{likeVenue(id)}}>
                        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.3901 11.2123L33.3904 11.2128C34.9886 14.4857 34.3927 18.2453 31.2918 22.5101L31.2905 22.512C28.8369 25.9084 25.2986 29.3178 20.1211 33.3385L20.1199 33.3395C20.0869 33.3652 20.0463 33.3791 20.0045 33.3791C19.9627 33.3791 19.922 33.3652 19.8891 33.3395L19.888 33.3386C14.7036 29.3105 11.1719 25.8716 8.71624 22.5088C5.60676 18.2445 5.01118 14.4853 6.60917 11.2128L6.60944 11.2123C7.70239 8.96926 10.9357 7.03332 14.8135 8.1446C16.6619 8.67868 18.2746 9.82376 19.3882 11.3928L19.9998 12.2546L20.6114 11.3928C21.7251 9.82356 23.3381 8.67839 25.1868 8.14439L25.1887 8.14383C29.0525 7.01654 32.2958 8.96645 33.3901 11.2123Z" fill={like ? '#CB0A05' : '#585858'} fill-opacity="0.7" stroke={like ? '#A50805' : '#BDBDBD'} stroke-width="1.5"/>
                        </svg>
                    </Button>


                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="d-flex  my-3">
                        <Paragraph className="list-option-item m-0 d-flex align-items-center me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className='me-2' width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.27148 18.3457C4.27148 18.3457 6.5005 15.5 12.0005 15.5C17.5005 15.5 19.7296 18.3457 19.7296 18.3457" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.998 2C6.4752 2 1.99805 6.47715 1.99805 12C1.99805 17.5228 6.4752 22 11.998 22C17.5208 22 21.998 17.5228 21.998 12C21.998 6.47715 17.5208 2 11.998 2Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="#BDBDBD" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>{user}
                        </Paragraph>
                        <Paragraph className="list-option-item m-0 d-flex align-items-center me-3">
                            <img src={category_logo} alt={category} />
                            {category}
                        </Paragraph>
                    </div>
                   
                    <Card.Text>{description}</Card.Text>
                    <div className="d-flex justify-content-between align-items-center card-footer p-0">
                        <Paragraph className='mb-0 black-span'>{setHours(parseInt(lastseen, 10))} hrs ago</Paragraph>
                        <Button to={`/bookingDetails/${id}`} tagType='link' className='btn_outline_black px-3 py-2'>View Details</Button>
                    </div>

                </Card.Body>


            </Card>
            <SweetAlert2 {...swalProps} />
        </>
    )
};
export default MarketProjectItem;