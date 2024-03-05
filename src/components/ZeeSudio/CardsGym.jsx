import React, { useContext, useEffect, useState } from "react";
import Media from "../Media/Media";
import Button from "../UI/Button";
import Paragraph from "../UI/Paragraph";
import { getTrainingClasses } from "../../apis/ZeeStudio";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { Skeleton, Space } from "antd";
import { useQuery } from "@tanstack/react-query";
import * as DOMPurify from 'dompurify';

const CardsGym = () => {
  const [classesList, setClassesList] = useState([]);
  // const [error, setError] = useState("");
  const [skeleton, setSkeleton] = useState(false);

  const { token } = useContext(AuthContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["training"],
    queryFn: ({ signal }) =>
      getTrainingClasses(token, 6, 0, "", "", "", signal),
  });

  let content = "";
  if (isPending) {
    content = (
      <Paragraph className="empty mb-0">there is not classes yet</Paragraph>
    );
  }
  if (data) {
    content = data?.map((item, index) => {
      return (
        <div className="col my-2" key={index}>
          <div className="card my-2 h-100 text-start">
            {isPending ? (
              <Skeleton.Image active />
            ) : (
              <>
                <Media
                  type="img"
                  src={item.image}
                  className="w-100"
                  alt={item.title}
                />
              </>
            )}
            <div className="card-body">
              {isPending ? (
                <Skeleton
                  active
                  title={{ width: 300 }}
                  paragraph={{ row: 1 }}
                />
              ) : (
                <>
                  <Paragraph className="card-title">{item.title}</Paragraph>
                  <div className='description_black py-2' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.descriptions.slice(0, 70)) }}></div>
                </>
              )}
              <div className="d-flex justify-content-between align-items-center ">
                {isPending ? (
                  <Skeleton.Input active />
                ) : (
                  <>
                    <Button
                      tagType="link"
                      to={`/gymdetails/${item.id}`}
                      className="button-outLine btn-bg-white m-auto-unset"
                    >
                      {"Explore More"}
                    </Button>
                  </>
                )}
                {isPending ? (
                  <Skeleton active title={{ width: 100 }} paragraph={false} />
                ) : (
                  <>
                    <Paragraph className="card-title">
                      {Math.floor(item.price)} Egp
                    </Paragraph>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <>
      <div className="row row-cols-xl-3 row-cols-md-2 row-cols-sm-1 py-5">
        {content}
      </div>
    </>
  );
};

export default CardsGym;
