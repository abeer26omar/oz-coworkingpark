import React, { useEffect, useState, useContext } from "react";
import { Segmented } from "antd";
import Paragraph from "../UI/Paragraph";
import Img1 from '../../assets/images/Rounds1.jpg';
import Img2 from "../../assets/images/Rounds (2).jpg";
import Img3 from "../../assets/images/Rounds (3).jpg";
import Img4 from "../../assets/images/Rounds (4).jpg";
import { getWorkingScheduleList } from '../../apis/ZeeStudio';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import { Space, Table, Tag } from "antd";

const WorkTimes = () => {

  const { Column } = Table;

  const [weekDates, setWeekDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tabelData, setTabelData] = useState([]);

  const { token } = useContext(AuthContext);

  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    const formattedDate = selectedDate.toISOString().split('T')[0];

    const getWorkingScedule = async () => {
      try {
        const result = await getWorkingScheduleList(token, formattedDate, signal);
        const data = result.map(item=>{
          return {
              key: item.id,
              Time: `${item.start_time.slice(0, 5)} - ${item.end_time.slice(0, 5)}`,
              Type: item.level,
              Workout: item.details,
              Trainner: item.trainer?.name,
              Bg: item.trainer?.image,
          }
        });
        setTabelData(data)
        // console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    getWorkingScedule();
    return () => controller.abort();
  },[token, selectedDate]);

  useEffect(() => {
    const getWeekDates = () => {
      const today = new Date();
      const dayOfWeek = today.getDay();
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - dayOfWeek);

      const dates = [];
      for (let i = 0; i < 7; i++) {
        const currentDate = new Date(startOfWeek);
        currentDate.setDate(startOfWeek.getDate() + i);
        dates.push(currentDate);
      }
      setWeekDates(dates);
      setSelectedDate(dates[dayOfWeek]);
    };

    getWeekDates();
  }, []);

  const handleChange = (value) => {
    const selectedDayIndex = weekDates.findIndex(date => date.toLocaleDateString('en-us', { weekday: 'long' }) === value);
    setSelectedDate(weekDates[selectedDayIndex]);
  };

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
              defaultValue={selectedDate?.toLocaleDateString('en-us', { weekday: 'long' })}
              onChange={handleChange}
              value={selectedDate?.toLocaleDateString('en-us', { weekday: 'long' })}
            />
          </div>
          <div className="text-center ">
            <Table dataSource={tabelData} className="table-responsive">
              <Column title=" Time" dataIndex="Time" key="Time" />
              <Column title="Type" dataIndex="Type" key="Type" />

              <Column title="Workout" dataIndex="Workout" key="Workout" />
              <Column
                title="Trainner"
                dataIndex="Trainner"
                key="Trainner"
                render={(_, record) => (
                  <Space size="middle">
                    <img src={record.Bg} className="rounded-img" alt="" width='50px' height='50px' style={{
                          objectFit: 'cover'
                    }}/>
                    <p className="mb-0"> {record.Trainner}</p>
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
