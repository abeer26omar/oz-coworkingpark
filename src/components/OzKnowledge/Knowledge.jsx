import MainHeaderWrapper from '../UI/MainHeaderWrapper';
import Paragraph from '../UI/Paragraph';
import KnowledgeDescription from './KnowledgeDescription';
import PopularCourses from './PopularCourses';
import PopularInstructor from './PopularInstructor';
import JoinCommuinty from '../Community/JoinCommuinty/JoinCommuinty';
import img from '../../assets/images/Rectangle_4.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import { KnowledgeHome } from '../../apis/OzKnowledge';


const Knowledge = () => {
    
    const  {token} = useContext(AuthContext);
    const [Data , setData] = useState({})
    
    useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    const KnowledgeData = async () => {
        try{
         const result = await KnowledgeHome( token , signal );
         setData(result);
        }catch(error){
            console.log(error);
        }
    }
    KnowledgeData()
    return () => controller.abort();
    },[])
    return (
      <>
        {/* {console.log(Data.categories)} */}
        <MainHeaderWrapper image={img} height="670px">
          <div className={`container-fluid px-70`}>
            <div className="col-xl-6 col-lg-9 col-12">
              {/* {props.configData ? props.configData.map((configItem, index) => (
                            <React.Fragment key={index}>
                                {configItem.key === 'booking_page_title' && ( */}
              <Paragraph className="head_paragraph mb-3">
                {"OZ Knowledge"}
              </Paragraph>
              {/* )}
                                {configItem.key === 'booking_page_description' && ( */}
              <Paragraph className="description mb-0">
                {
                  "Lorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit amet, consectetuerLorem ipsum dolor sit"
                }
              </Paragraph>
              {/* )}
                            </React.Fragment>
                        )): ''} */}
            </div>
          </div>
        </MainHeaderWrapper>
        <KnowledgeDescription
          categories={Data.categories}
          info={Data.info}
        />
        <PopularCourses details={Data.categories} />
        <PopularInstructor />
        <JoinCommuinty />
      </>
    );
}
export default Knowledge;