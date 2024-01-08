import React, { useState } from "react";
import { Button, message, Steps, theme } from "antd";
import Paragraph from "../UI/Paragraph";
import Calunder from "../UI/Icons/Calunder";
import Alarm from "../UI/Icons/Alarm";
import Advanced from "../UI/Icons/Advanced";
import Payment from "../UI/Icons/Payment";
import CashPay from "../UI/Icons/CashPay";
import CridetPay from "../UI/Icons/CridetPay";

const steps = [
  {
    title: "1",
    content: (<>

    </>),
    content2: "Yoga As Therapy",
    content3: <Calunder />,
    content4: "Monday, Feb. 2 , 2023",
    content5: <Alarm />,
    content6: "45 Minutes",
    content7: <Advanced />,
    content8: "Advanced",
    content9: <Payment />,
    content10: "150 EGP",
  },
  {
    title: "2",
    content: "Payment Method",
    content2: "Choose Payment Method",
    content3: <CashPay/>,
    content4: "Cash Payment",
    content5: <CridetPay/>,
    content6: "Credit Payment",
  },
  {
    title: "3",
    content: "Last-content",
  },
];
function PaymentGym() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    // lineHeight: "260px",
    textAlign: "",
    // color: token.colorTextTertiary,
    backgroundColor: token.colorBgBase,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <div
        className="container py-5 steps-payment"
        style={{
          minHeight: "50vh",
        }}
      >
        <div className="mx_7">
          <Steps
            type="navigation"
            size="small"
            current={current}
            // onChange={onChange}
            className="site-navigation-steps"
            items={items}
          />
        </div>
        <div>
          <Paragraph className="paragraph_black py-5">
            {steps[current].content}
          </Paragraph>
          <div className="mx_7">
            <div className="p-5" style={contentStyle}>
              <Paragraph className="paragraph_black light py-3">
                {steps[current].content2}
              </Paragraph>
              <ul className="p-0">
                <li className="d-flex align-items-center mb-4">
                  {steps[current].content3}
                  <Paragraph className="mb-0 mx-2">
                    {steps[current].content4}
                  </Paragraph>
                </li>
                <li className="d-flex align-items-center mb-4">
                  {steps[current].content5}
                  <Paragraph className="mb-0 mx-2">
                    {steps[current].content6}
                  </Paragraph>
                </li>
                <li className="d-flex align-items-center mb-4">
                  {steps[current].content7}
                  <Paragraph className="mb-0 mx-2">
                    {steps[current].content8}
                  </Paragraph>
                </li>
                <li className="d-flex align-items-center mb-4">
                  {steps[current].content9}
                  <Paragraph className="mb-0 mx-2">
                    {steps[current].content10}
                  </Paragraph>
                </li>
              </ul>
              <div
                // style={{
                //   marginTop: 24,
                // }}
                className="text-center"
              >
                {current < steps.length - 1 && (
                  <Button
                    type=""
                    className="btn_default btn button-outLine btn-bg-white"
                    onClick={() => next()}
                  >
                    confirm
                  </Button>
                )}
                {/* {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentGym;
