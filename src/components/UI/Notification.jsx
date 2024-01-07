import React, {useState, useEffect} from 'react';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { onMessageListener } from '../../apis/firebase';


const Notification = ({getShowDot}) => {
  
  const [notification, setNotification] = useState({
    title: '',
    body: '',
    desc: '',
    icon: '',
    buttonText: '',
    buttonClick: null
  });
  const [showDot, setShowDot] = useState(false);

  useEffect(() => {
    const notificationOptions = {
      title: notification.title,
      message: (
        <div>
          <span>{notification.body}</span>
          <span>{notification.desc}</span>
          {notification.icon && (
            <span className="notification-icon">
              <img src={notification.icon} alt="Notification Icon" />
            </span>
          )}
          {notification.buttonText && (
            <a to={notification.buttonClick}>
              {notification.buttonText}
            </a>
          )}
        </div>
      ),
      type: 'info',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animate__animated', 'animate__fadeIn'],
      animationOut: ['animate__animated', 'animate__fadeOut'],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    };

    if (
      notification.title &&
      notification.body &&
      (notification.icon || notification.buttonText)
    ) {
      Store.addNotification(notificationOptions);
    }
  }, [notification]);
      
    onMessageListener()
        .then((payload) => {
          setShowDot(true);
          getShowDot(showDot);
          setNotification(
            {
              title: payload?.data?.title,
              body: payload?.data?.body,
              desc: payload?.data?.extra_information,
              icon: payload?.data?.icon,
              buttonText: 'see more',
              buttonClick: payload?.data?.click_action
            });     
        })
        .catch((err) => console.log('failed: ', err));
    
      return(
        <>
            <ReactNotifications />
        </>
    )
}
export default Notification;