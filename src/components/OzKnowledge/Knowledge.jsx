import MainHeaderWrapper from "../UI/MainHeaderWrapper";
import Paragraph from "../UI/Paragraph";
import KnowledgeDescription from "./KnowledgeDescription";
import PopularCourses from "./PopularCourses";
import PopularInstructor from "./PopularInstructor";
import JoinCommuinty from "../Community/JoinCommuinty/JoinCommuinty";
import img from "../../assets/images/Rectangle_4.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../apis/context/AuthTokenContext";
import { KnowledgeHome } from "../../apis/OzKnowledge";

const Knowledge = () => {
  const { token } = useContext(AuthContext);
  const [Data, setData] = useState({});
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const KnowledgeData = async () => {
      try {
        const result = await KnowledgeHome(token, signal);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    KnowledgeData();
    return () => controller.abort();
  }, []);
  return (
    <>
      {console.log(Data.knowladge_slider)}

      {Data.knowladge_slider &&
        Data.knowladge_slider?.map((item, index) => {
          return (
            <>
              <MainHeaderWrapper image={item?.image} height="670px" key={index}>
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
        })}
      <KnowledgeDescription categories={Data.categories} info={Data.info} />
      <PopularCourses details={Data.recommended_courses} />
      <PopularInstructor details={Data.recommended_trainers} />
      <JoinCommuinty details={Data.footer} />
    </>
  );
};
export default Knowledge;
