import React from "react";
import {Tab, Nav} from 'react-bootstrap';
import Paragraph from "../UI/Paragraph";
import img from "../../assets/images/history.jpg";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

const GymHistory = () => {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div className="bg-body-tertiary navigator border_bottom">
              <div className='container-fluid d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center'>
                      <h1 className="title-name mb-0">Zee Studio History</h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2"
                                height="127"
                                viewBox="0 0 2 127"
                                fill="none"
                            >
                                <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                            </svg>
                  </div>
                        <div className="d-flex history_tabs">
                            <Nav className="d-flex booking_nav">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" className="booking_navlink">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second" className="booking_navlink">Ended</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-70 py-5">
                    <Tab.Content style={{
                        minHeight: '50vh'
                    }}>
                        <Tab.Pane eventKey="first">
                          <div className="card card_event">
                            <div className="row align-items-center">
                              <div className='col-xxl-3 col-lg-4 col-12 d-flex justify-content-start'>
                                <img src={img} alt="img" width='100%' height='256px' style={{
                                  objectFit: 'cover'
                                }}/>
                              </div>
                              <div className="col-xxl-8 col-lg-8 col-12">
                                <div className="row align-items-center justify-content-between p-lg-0 p-3">
                                  <div className="col-sm-9 col-12">
                                    <Paragraph className="light">
                                      Date Submitted : Feb 2 , 2023
                                    </Paragraph>
                                    <Paragraph className="card-title">Boxing Class</Paragraph>
                                    <Paragraph className="light">
                                      Proactively envisioned multimedia based expertise crosses media
                                      growth strategies. Seamlessly visualize quality intelectual
                                      captal without superor collaboration idea sharing Holistically
                                      pontficate installed based portals after maintainabled products.
                                    </Paragraph>
                                  </div>
                                  <div className="col-sm-3 col-12 d-sm-block d-flex justify-content-center">
                                    <div style={{
                                      width: '104px',
                                      height: '104px'
                                    }}>
                                      <CircularProgressbarWithChildren
                                        value={"50"}
                                        styles={buildStyles({
                                          pathTransitionDuration: 0.5,
                                          pathColor: "#D0DF00",
                                          trailColor: "#BDBDBD",
                                          backgroundColor: "#fff",
                                        })}
                                      >
                                        <span className="progress_percentage light">5/12</span>
                                      </CircularProgressbarWithChildren>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        
                        </Tab.Pane>
                    </Tab.Content>
                </div>
      </Tab.Container>
    </>
  );
}

export default GymHistory;
