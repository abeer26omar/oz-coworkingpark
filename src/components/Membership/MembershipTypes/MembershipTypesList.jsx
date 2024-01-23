import React from "react";
import Media from "../../Media/Media";
import Button from "../../UI/Button";
import Paragraph from "../../UI/Paragraph";
import { useNavigate } from "react-router-dom";

const MembershipTypesList = ({ id, image, name, description, className }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="card my-2 h-100 text-start">
        <Media
          type="img"
          src={image}
          className="card-img-top"
          alt={name}
          onClick={() => navigate(`/membership/${id}`)}
        />
        <div className={`card-body  ${className}`}>
          <Paragraph className="card-title">{name}</Paragraph>
          <Paragraph>
            {description &&
              (description.length > 30
                ? `${description.slice(0, 30)}...`
                : description)}
          </Paragraph>
          <Button
            tagType="link"
            to={`/membership/${id}`}
            name={name}
            className="btn button-outLine btn-bg-white"
          >
            {"Find out more"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default MembershipTypesList;
