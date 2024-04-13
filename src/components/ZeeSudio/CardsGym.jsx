import React, { useContext } from "react";
import Paragraph from "../UI/Paragraph";
import { getTrainingClasses } from "../../apis/ZeeStudio";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { useQuery } from "@tanstack/react-query";
import ZeeCard from "./ZeeCard";

const CardsGym = () => {

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
          <ZeeCard isPending={isPending} item={item} />
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
