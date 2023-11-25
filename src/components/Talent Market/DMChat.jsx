import { useEffect, useState, useContext } from "react";
import {Tab, Nav} from 'react-bootstrap';
import EmojiPicker from 'emoji-picker-react';
import { useParams } from "react-router-dom";
import Paragraph from "../UI/Paragraph";
import Img from "../../assets/images/Nav_1.svg";
import Img6 from "../../assets/images/icons/user-smile-line.svg";
import Img7 from "../../assets/images/icons/Iconsax.svg";
import Img8 from "../../assets/images/icons/fa_send-o.svg";
import Img9 from "../../assets/images/icons/icon-park-outline_more.svg";
import UsersList from "../UI/UsersList";
import MyMassage from "../UI/MyMassage";
import YourMassage from "../UI/YourMassage";
import { getClientMessages, getChatList } from '../../apis/Market';
import { AuthContext } from "../../apis/context/AuthTokenContext";
import './TalentMarket.css';
import Button from "../UI/Button";
import ModalBlock from './ModalBlock';

const DMChat = () => {

    const {project, user} = useParams();
    const [OpenChat , SetOpenChat] = useState(false)
    const [OpenBlock, SetOpenBlock] = useState(false);
    const [activeTab, setActiveTab] = useState('item1');
    const [messages, setMessages] = useState([]);
    const [showPicker, setShowPicker] = useState(false);
    const [inputStr, setInputStr] = useState('');
    const [showBlock, setShowBlock] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);
    const [action, setAction] = useState('block');
    const { token, userId } = useContext(AuthContext);

    const handelClose = () => setShowBlock(false);

    const HandleCaht = ()=>{
      SetOpenChat(!OpenChat)
    };

    const HandleBlock =()=>{
      SetOpenBlock(!OpenBlock)
    }

    const handleTabClick = (key) => {
      setActiveTab(key);
    };

    const onEmojiClick = (emojiObject) => {
      setInputStr(prevInput => prevInput + emojiObject.emoji);
      setShowPicker(!showPicker)
    }

    useEffect(()=>{
      const getClientChat = async () => {
        try{
          const result = await getClientMessages(token, userId, 'fetch', project, user);
          setMessages(result.messages);
          setIsBlocked(result.is_blocked);
          checkStatus()

        }catch(err){
          console.log(err);
        }
      }
      getClientChat();
    },[token, userId, project, user]);

    useEffect(()=>{
      const getClientList = async () => {
        try{
          const result = await getChatList(token, 'get_list');
          console.log(result);
        }catch(err){
          console.log(err);
        }
      }
      getClientList()
    },[token]);

    const checkStatus = () => {
      isBlocked ? setAction('un Block') : setAction('Block');
    }

const M1 = [
   { MyMassage: "  omg, this is amazing" },
   { MyMassage: "  perfect! ✅" },
   { MyMassage: "  Wow, this is really epic" },
 ];
const M2 =[{YourMassage:"  How are you ?"}]
const M3 = [
  { MyMassage: "    just ideas for next time" },
  { MyMassage: "   I'll be there in 2 mins ⏰" },
];
const M4 = [
  { YourMassage: "woohoooo" },
  { YourMassage: "just ideas for next time" },
  { YourMassage: "Haha that's terrifying 😂" },
];
const M5 = [
  { MyMassage: "aww" },
  { MyMassage: "omg, this is amazing" },
  { MyMassage: "woohoooo 🔥" },
];
    return (
      <>
        <div className="bg-body-tertiary navigator border_bottom">
          <div className="container-fluid">
            <div className="d-flex">
              <h1 className="title-name mb-0">DM - (Chat)</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="127"
                viewBox="0 0 2 127"
                fill="none"
              >
                <path
                  d="M1 0L1.00001 127"
                  stroke="#BDBDBD"
                  stroke-width="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <Tab.Container 
            id="left-tabs-example" 
            defaultActiveKey={activeTab}
            className='py-4 px-5'>
              <div className="container-fluid p-5 position-relative">
                <div className="card-chat">
                  <div className="row">
                    <div className="col-xl-4 col-md-4 col-sm-12 p-2 ">
                      <div className="border-bottom ms-2 ">
                        <Paragraph className="p-4 directory ">Directory</Paragraph>
                      </div>
                      <div className="p-4">
                        <div className="requests d-flex">
                          <Paragraph className="m-0">Requests</Paragraph>
                          <span className="req_number ms-2">3</span>
                        </div>
                        <Nav variant="pills" className="row mx-auto my-3">
                          <div className="ms-2 border-bottom ">
                          <Nav.Item >
                            <Nav.Link 
                              eventKey={'item1'}
                              onClick={()=>{handleTabClick('item1')}}>
                              <UsersList
                                onClick={HandleCaht}
                                src={Img}
                                name={"Florencio Dorrance"}
                                massage={" Market Development Manager"}
                              />
                            </Nav.Link>
                          </Nav.Item>
                          </div>
                          <div className="ms-2 border-bottom ">
                          <Nav.Item >
                            <Nav.Link 
                              eventKey={'item2'}
                              onClick={()=>{handleTabClick('item2')}}>
                              <UsersList
                                onClick={HandleCaht}
                                src={Img}
                                name={"Florencio Dorrance"}
                                massage={" Market Development Manager"}
                              />
                            </Nav.Link>
                          </Nav.Item>
                          </div>
                        </Nav>
                      </div>
                    </div>
                    <div
                      className={
                        OpenChat
                          ? "col-xl-8 col-md-8 col-sm-12 p-2 border-left chat_mobile seen"
                          : "col-xl-8 col-md-8 col-sm-12 p-2 border-left chat_mobile "
                          }>
                        <Tab.Content animation className=''>
                          <Tab.Pane eventKey={activeTab} className="chat_container d-flex flex-column justify-content-between">
                              <div className="border-bottom d-flex justify-content-between align-items-center me-2">
                                <div className="d-flex ">
                                  <img src={Img} alt="img" />
                                  <Paragraph className="p-4 directory ">
                                    Florencio Dorrance
                                  </Paragraph>
                                </div>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" 
                                        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        style={{
                                          background: 'none',
                                          border: 'none',
                                          padding: '0'
                                        }}>
                                        <img
                                          className="pointer"
                                          onClick={HandleBlock}
                                          src={Img9}
                                          alt="img"
                                        />
                                    </button>
                                    <ul class="dropdown-menu list_block" aria-labelledby="dropdownMenuButton1">
                                        <li className="d-flex align-items-center border-bottom pointer p-3">
                                        <Button className='d-flex align-items-center p-0' tagType='link' 
                                          onClick={(e)=>{e.stopPropagation();setShowBlock(true);}}>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                          >
                                          <ellipse
                                            cx="14.817"
                                            cy="8.74087"
                                            rx="4.74087"
                                            ry="4.74087"
                                            stroke="black"
                                          />
                                          <path
                                            d="M18.3714 17.4268C17.2734 17.1767 16.0731 17.0391 14.8157 17.0391C9.5791 17.0391 5.33398 19.4269 5.33398 22.3725C5.33398 25.3181 5.33398 27.706 14.8157 27.706C21.5566 27.706 23.5052 26.4991 24.0684 24.743"
                                            stroke="#BDBDBD"
                                          />
                                          <path
                                            d="M18.5741 23.9447C19.432 24.8026 20.6172 25.3333 21.9264 25.3333C24.5447 25.3333 26.6673 23.2107 26.6673 20.5924C26.6673 19.2833 26.1366 18.098 25.2787 17.2401M18.5741 23.9447C17.7162 23.0868 17.1855 21.9016 17.1855 20.5924C17.1855 17.9741 19.3081 15.8516 21.9264 15.8516C23.2356 15.8516 24.4208 16.3822 25.2787 17.2401M18.5741 23.9447L25.2787 17.2401"
                                            stroke="black"
                                            stroke-linejoin="round"
                                          />
                                          </svg>
                                        <Paragraph className='mb-0 ps-1'>Issue reporting</Paragraph>
                                        </Button>
                                        </li>
                                        <li className="pointer p-3">
                                          <Button className='d-flex align-items-center p-0' tagType='link' onClick={(e)=>{e.stopPropagation();setShowBlock(true);}}>
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="32"
                                              height="32"
                                              viewBox="0 0 32 32"
                                              fill="none"
                                            >
                                              <path
                                                d="M8.45808 23.545C10.3884 25.4753 13.0551 26.6693 16.0007 26.6693C21.8917 26.6693 26.6673 21.8936 26.6673 16.0026C26.6673 13.057 25.4734 10.3903 23.543 8.46003M8.45808 23.545C6.52785 21.6147 5.33398 18.9481 5.33398 16.0026C5.33398 10.1116 10.1096 5.33594 16.0007 5.33594C18.9461 5.33594 21.6127 6.5298 23.543 8.46003M8.45808 23.545L16.0006 16.0025L23.543 8.46003"
                                                stroke="#BDBDBD"
                                                stroke-width="1.5"
                                                stroke-linejoin="round"
                                              />
                                              <circle
                                                cx="16.0007"
                                                cy="16.0026"
                                                r="10.6667"
                                                stroke="black"
                                                stroke-width="1.5"
                                              />
                                            </svg>
                                            <Paragraph className='mb-0 ps-1'>{action}</Paragraph>
                                          </Button>
                                        </li>
                                    </ul>
                                </div>
                                <span className="x_mobile" onClick={HandleCaht}>
                                  x
                                </span>
                              </div>
                              {messages && messages.map((message,index)=>{
                                return (
                                  <MyMassage src={Img} AllMy={M1} />
                                )
                              })}
                              {(messages && messages.length === 0) && <Paragraph className='grey-span2 text-center my-5'>start new conversation</Paragraph>}
                              <div className="d-flex justify-content-around position-relative">
                                <input
                                  className="w-100 p-3 input_border_chat m-3"
                                  placeholder="Type a massage"
                                  type="text"
                                  value={inputStr}
                                  onChange={e=>{setInputStr(e.target.value)}}
                                  disabled={isBlocked}
                                />
                                <div className="d-flex chat_input">
                                  <img className="me-2" src={Img6} alt="img" onClick={()=>{setShowPicker(!showPicker)}}/>
                                  {showPicker && <EmojiPicker 
                                    onEmojiClick={onEmojiClick}/>}
                                  {/* <a alt="#" href="/">
                                    <img src={Img7} alt="img" />
                                  </a> */}
                                </div>
                                <img className="me-2" src={Img8} alt="img" />
                              </div>
                          </Tab.Pane>
                        </Tab.Content>
                    </div>
                  </div>
                </div>
              </div>
        </Tab.Container>
        <ModalBlock
          show={showBlock}
          onHide={handelClose} 
          token={token}
          user={user}
          action={action}
        />
      </>
    );
};
export default DMChat;