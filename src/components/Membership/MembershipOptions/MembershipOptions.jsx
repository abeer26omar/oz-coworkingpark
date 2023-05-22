import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MembershipOptions = ({logo,name,description}) => {
    const { id } = useParams();
    //
    // const [listMembershipsTypes, setListMembershipsTypes] = useState([]);
    //
    // // List Membership types API
    // let axios = require("axios");
    // let FormData = require("form-data");
    // let data = new FormData();
    // data.append("server_key", "c04919f13f43b612fff3b76c5d08b2d6");
    //
    // let config = {
    //     method: "post",
    //     maxBodyLength: Infinity,
    //     url: `https://modest-banzai.78-141-219-156.plesk.page/api/list_membership_types?access_token=10b8d16368bdf5888ad890c73536ac25e00004c2e742813a131a99c13ae81d6bc257b2a935584948bdc8b08ca966b6626e1f186f03c9a060&id=${id}`,
    //     data: data,
    // };
    //
    // const GetOptionTypes = () => {
    //     axios(config)
    //         .then(function (response) {
    //             setListMembershipsTypes(response.data.data);
    //             console.log(JSON.stringify(response.data));
    //             console.log(response.data.data);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // };
    //
    // useEffect(() => {
    //     GetOptionTypes();
    // }, [id]);
    //
    //
    // return (
    //     <div>
    //         {listMembershipsTypes.map((listMembershipType, index) => {
    //             const { id, name, logo, link, description } = listMembershipType;
    //             return (
    //                 <div key={index}>
    //
    //                     {listMembershipType.options.map((option, index) => {
    //                         const { price, id, name, logo, type } = option;
    //                         console.log("Price:", price);
    //                         return (
    //                             <div key={id}>
    //                                 <h1 >
    //                                     {id}
    //                                 </h1>
    //                                 <h1>{type}</h1>
    //                             </div>
    //
    //                         );
    //                     })}
    //                 </div>
    //             );
    //         })}
    //     </div>
    // );
return(

    <div key={id}>
        <div className="card my-2 h-100" >
            <img src={logo} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title my-3">{name}</h5>
                <p className="text-muted">{description}</p>
                <Link to={`/membership/${id}`} name={name} className="button-one-outline p-0 my-3">{name}</Link>
            </div>
        </div>
    </div>


)

};

export default MembershipOptions;
