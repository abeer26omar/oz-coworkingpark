import Paragraph from "../UI/Paragraph";
import CountUp from 'react-countup';
import './OzKnowledge.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getCategoriesList } from '../../apis/OzKnowledge';
import {AuthContext} from '../../apis/context/AuthTokenContext';

const KnowledgeDescription = ({ categories, info }) => {

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const HandelCourses = (ids) => {
    sessionStorage.setItem('coursesIdsOz', JSON.stringify(ids))
    navigate(`/courses`);
  };

  return (
    <>
      <section className="knowledge_description container-fluid px-70 py-5">
        <div className="description">
          <Paragraph className="status-event">Description</Paragraph>
          <Paragraph className="p-text-box">{info?.descriptions}</Paragraph>
        </div>
        <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-2 g-3 justify-content-center py-5">
          <div className="col">
            <div className="d-flex">
              <div className="counter_icon me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_5471_14133)">
                    <path
                      d="M1.25 15L20 5L38.75 15L20 25L1.25 15Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.375 37.5V20L20 15"
                      stroke="#BDBDBD"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.375 17.3281V25.8594C34.3739 26.1249 34.2861 26.3827 34.125 26.5937C33.0781 28 28.6406 33.125 20 33.125C11.3594 33.125 6.92187 28 5.875 26.5937C5.7139 26.3827 5.62612 26.1249 5.625 25.8594V17.3281"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5471_14133">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <CountUp
                  end={info?.trainers}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                  className="counter"
                />
                <Paragraph className="mb-0 p-counter">Instructor</Paragraph>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="counter_icon me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M13.75 25C18.2373 25 21.875 21.3623 21.875 16.875C21.875 12.3877 18.2373 8.75 13.75 8.75C9.26269 8.75 5.625 12.3877 5.625 16.875C5.625 21.3623 9.26269 25 13.75 25Z"
                    stroke="white"
                    stroke-width="3"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M24.2812 9.04688C24.9995 8.85207 25.7402 8.75227 26.4844 8.75C28.6393 8.75 30.7059 9.60602 32.2296 11.1298C33.7533 12.6535 34.6094 14.7201 34.6094 16.875C34.6094 19.0299 33.7533 21.0965 32.2296 22.6202C30.7059 24.144 28.6393 25 26.4844 25"
                    stroke="#BDBDBD"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.5 30.8443C3.76867 29.039 5.45318 27.5655 7.41126 26.5482C9.36934 25.531 11.5435 25 13.75 25C15.9565 25 18.1307 25.531 20.0887 26.5482C22.0468 27.5655 23.7313 29.039 25 30.8443"
                    stroke="white"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.4844 25C28.6911 24.9986 30.8657 25.529 32.8239 26.5462C34.7822 27.5635 36.4666 29.0376 37.7344 30.8438"
                    stroke="#BDBDBD"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <CountUp
                  end={info?.students}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                  className="counter"
                  suffix="+"
                />
                <Paragraph className="mb-0 p-counter">Student</Paragraph>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="d-flex">
              <div className="counter_icon me-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <g clip-path="url(#clip0_5471_14149)">
                    <path
                      d="M28.75 17.5L37.5 12.5V27.5L28.75 22.5"
                      stroke="#BDBDBD"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75 9.375H23.75C25.0761 9.375 26.3479 9.90178 27.2855 10.8395C28.2232 11.7771 28.75 13.0489 28.75 14.375V29.375C28.75 29.7065 28.6183 30.0245 28.3839 30.2589C28.1495 30.4933 27.8315 30.625 27.5 30.625H7.5C6.17392 30.625 4.90215 30.0982 3.96447 29.1605C3.02678 28.2229 2.5 26.9511 2.5 25.625V10.625C2.5 10.2935 2.6317 9.97554 2.86612 9.74112C3.10054 9.5067 3.41848 9.375 3.75 9.375V9.375Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5471_14149">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="d-flex flex-column justify-content-between">
                <CountUp
                  end={info?.users}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                  className="counter"
                  suffix="+"
                />
                <Paragraph className="mb-0 p-counter">User’s</Paragraph>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container px-70 py-5">
        <Paragraph className="main_section_title">Popular Category</Paragraph>
        <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-lg-5 g-3 justify-content-center py-5">
          {categories &&
            categories.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <div className="categorey_box d-flex flex-column justify-content-center align-items-center">
                    <div
                      className="popular_icon mb-3"
                      onClick={() => HandelCourses(item.ids)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        width="24px"
                        height="24px"
                      />
                    </div>
                    <Paragraph className="popular_title">
                      {item.title}
                    </Paragraph>
                    <Paragraph className="mb-0 popular_desc">
                      {item.courses} Course
                    </Paragraph>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};
export default KnowledgeDescription;