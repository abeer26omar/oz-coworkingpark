import React, { useEffect, useState, useContext } from "react";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";
import Gym from "../../assets/images/Gym.jpg";
import { KnowledgeHome } from "../../apis/OzKnowledge";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { Skeleton } from "antd";
import { useQuery } from "@tanstack/react-query";
const HeadZeeStuido = (props) => {
  const { token } = useContext(AuthContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["knowldge"],
    queryFn: ({ signal }) => KnowledgeHome(token, signal),
  });


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
