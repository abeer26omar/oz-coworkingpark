import React, { useEffect, useState , useContext } from "react";
import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";
import Gym from '../../assets/images/Gym.jpg'
import { KnowledgeHome } from "../../apis/OzKnowledge";
import { AuthContext } from "../../apis/context/AuthTokenContext";

const HeadZeeStuido = (props) => {

  const {token} = useContext(AuthContext);
  const [Data , setData] = useState([]);
 useEffect(()=>{
  const controller = new AbortController();
  const signal = controller.signal;

  const studioHome = async () =>{
    try {
      const result = await KnowledgeHome( token , signal )
      setData(result.studio_slider);
    }catch(error){
      console.log(error);
    }

  }
  studioHome();

  return () => controller.abort();
},[])  

  return (
     <>
  {Data && Data?.map((item , index ) =>{
    return (
      <>
        <MainHeaderWrapper image={item?.image} key={index}>
          <div className={`container-fluid px-70`}>
            <div className="col-xl-6 col-lg-9 col-12">
              <Paragraph className="head_paragraph mb-3">
                {item?.title}
              </Paragraph>
              <Paragraph className="description mb-0">
                {item?.description}
              </Paragraph>
            </div>
          </div>
        </MainHeaderWrapper>
      </>
    );
  })  
      }
    </>
  );
};

export default React.memo(HeadZeeStuido);
