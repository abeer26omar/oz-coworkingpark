import React, { useEffect, useState } from "react";
import { Segmented } from "antd";
import Paragraph from "../UI/Paragraph";
import Img1 from '../../assets/images/Rounds1.jpg';
import Img2 from "../../assets/images/Rounds (2).jpg";
import Img3 from "../../assets/images/Rounds (3).jpg";
import Img4 from "../../assets/images/Rounds (4).jpg";
import { Space, Table, Tag } from "antd";
const { Column } = Table;

const WorkTimes = () => {
  const [day , setday] = useState();
  function handleDay (){
    const date = new Date();
    const ToDate = date.toLocaleDateString('en-us' , {weekday : 'long'});
    setday(ToDate);
    
  }
  useEffect(()=>{
    handleDay();
  },[])
 

  const data = [
    {
      key: "1",
      Time: "06.00 - 07.00",
      Type: "beginners",
      Workout: `Mixed Circuit Cardio Workout`,
      Trainner: `Floyd Miles`,
      Bg: Img1,
    },
    {
      key: "2",
      Time: "06.00 - 07.00",
      Type: "advanced",
      Workout: `Cross Fit
   / Pilates`,
      Trainner: `Robert Cage`,
      Bg: Img2,
    },
    {
      key: "3",
      Time: "06.00 - 07.00",
      Type: "intermediate",
      Workout: `Fit Body`,
      Trainner: `Donald Grey`,
      Bg: Img3,
    },
    {
      key: "4",
      Time: "06.00 - 07.00",
      Type: "beginners",
      Workout: `Yoga / Athletic ClassYoga / Athletic Class`,
      Trainner: `Floyd Miles`,
      Bg: Img4,
    },
    {
      key: "5",
      Time: "06.00 - 07.00",
      Type: "advanced",
      Workout: `Power Club / Boxing`,
      Trainner: `Floyd Miles`,
      Bg: Img1,
    },
    {
      key: "6",
      Time: "06.00 - 07.00",
      Type: "intermediate",
      Workout: `Mixed Circuit`,
      Trainner: `Floyd Miles`,
      Bg: Img1,
    },
  ];
  return (
    <>
      <section className="monoBlock bgBlack">
        <div className="container Schedule ">
          <Paragraph className="head_paragraph text-center">
            Working Schedule
          </Paragraph>
          <div className="Schedule mb-4">
            <Segmented
              style={{ backgroundColor: "unset", color: "#878787" }}
              options={[
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ]}
              value={day}
            />
          </div>
          <div className="text-center ">
            <Table dataSource={data} className="table-responsive">
              <Column title=" Time" dataIndex="Time" key="Time" />
              <Column title="Type" dataIndex="Type" key="Type" />

              <Column title="Workout" dataIndex="Workout" key="Workout" />
              <Column
                title="Trainner"
                dataIndex="Trainner"
                key="Trainner"
                render={(_, record) => (
                  <Space size="middle">
                    <img src={record.Bg} className="rounded-img" alt="" />
                    <p> {record.Trainner}</p>
                  </Space>
                )}
              />
            </Table>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkTimes;
