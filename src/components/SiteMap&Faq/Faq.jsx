import React from "react";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import faq from "../../assets/images/FAQ.jpg";
import Paragraph from "../UI/Paragraph";
import { useState } from "react";

const Faq = () => {
      const [Open , setOpen] = useState(false)
      const handleClick = ()=>{
        setOpen(!Open)
      }
  return (
    <>
      <MainHeaderWrapper image={faq}></MainHeaderWrapper>
      <div className="container py-5 ">
        <div className=" row">
          <div className="col-xl-12 tabs_faq">
            <Paragraph className="m-0 title">
              Make real time a health improvements ?
            </Paragraph>
            <button onClick={handleClick}>
              {!Open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="#BDBDBD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 3.75V20.25"
                    stroke="#BDBDBD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={!Open ? "faq_dropdown py-4" : "faq_dropdown py-4 open"}
          >
            <Paragraph className="faq_desc">
              Proactively envisioned multimedia based expertise crosses media
              growth strategies. Seamlessly visualize quality intelectual captal
              without superor collaboration idea sharing Holistically pontficate
              installed based portals after maintainabled products.
              Phosfluorescently engaged world wide methodologies with enabled
              Completely pursue scalable customer service through sustainable
              potentialities
            </Paragraph>
            <div className="py-2">
              <Paragraph className="faq_desc">
                1. It brings the right people together with all the right
                information and tools to get work done
              </Paragraph>
              <Paragraph className="faq_desc">
                2. We provide operational efficiency, data security, and
                flexible scale
              </Paragraph>
              <Paragraph className="faq_desc">
                3. Your best work, together in one package that works seamlessly
                from your computer
              </Paragraph>
            </div>
          </div>
        </div>
        <div className=" row py-2">
          <div className="col-xl-12 tabs_faq">
            <Paragraph className="m-0 title">
              Make real time a health improvements ?
            </Paragraph>
            <button onClick={handleClick}>
              {!Open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="#BDBDBD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 3.75V20.25"
                    stroke="#BDBDBD"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M3.75 12H20.25"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={!Open ? "faq_dropdown py-4" : "faq_dropdown py-4 open"}
          >
            <Paragraph className="faq_desc">
              Proactively envisioned multimedia based expertise crosses media
              growth strategies. Seamlessly visualize quality intelectual captal
              without superor collaboration idea sharing Holistically pontficate
              installed based portals after maintainabled products.
              Phosfluorescently engaged world wide methodologies with enabled
              Completely pursue scalable customer service through sustainable
              potentialities
            </Paragraph>
            <div className="py-2">
              <Paragraph className="faq_desc">
                1. It brings the right people together with all the right
                information and tools to get work done
              </Paragraph>
              <Paragraph className="faq_desc">
                2. We provide operational efficiency, data security, and
                flexible scale
              </Paragraph>
              <Paragraph className="faq_desc">
                3. Your best work, together in one package that works seamlessly
                from your computer
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
