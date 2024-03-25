import React from "react";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";
import { Skeleton } from "antd";

const HeadZeeStuido = ({error, isPending, data}) => {
  
  return (
    <>
      <MainHeaderWrapper image={data?.studio_slider} key={""}>
        <div className={`container-fluid px-70`}>
          <div className="col-xl-6 col-lg-9 col-12">
            {isPending ? (
              <Skeleton active title={true} paragraph={{ rows: 1 }} />
            ) : (
              <>
                <Paragraph className="head_paragraph mb-3">
                  {data?.studio_slider[0]?.title}
                </Paragraph>
                <Paragraph className="description mb-0">
                  {data?.studio_slider[0]?.description}
                </Paragraph>
              </>
            )}
          </div>
        </div>
      </MainHeaderWrapper>
    </>
  );
};

export default React.memo(HeadZeeStuido);
