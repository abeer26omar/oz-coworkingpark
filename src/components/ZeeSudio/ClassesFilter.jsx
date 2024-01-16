import React, { useContext, useEffect, useState } from "react";
import { Formik } from 'formik';
import { Select } from 'antd';
import {FiSearch} from "react-icons/fi";
import Button from "../UI/Button";
import { getGymCategories, getTrainingClasses } from '../../apis/ZeeStudio';
import { AuthContext } from '../../apis/context/AuthTokenContext';

const ClassesFilter = ({
  isOpen,
  getFilterDate,
  getFilterSearch,
  getFilterCategorey,
}) => {
  const { token } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);

  const [search_txt, setSearch_txt] = useState("");
  const [course_date, setCourse_date] = useState("");
  const [course_categorey, setCourse_categorey] = useState("");
  const Clearinput = (e) => {
    e.preventDefault()
    setSearch_txt('');
    setCourse_date('');
    setCourse_categorey('');
  }
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getCategories = async () => {
      try {
        const result = await getGymCategories(token, signal);
        setCategories(result);
      } catch (error) {
        console.log(error);
      }
    };
    getCategories();
    return () => controller.abort();
  }, []);

  return (
    <>
      {isOpen && (
        <div className="container-fluid border-top">
          <form className="form-filter">
            <div className="filter-component row g-3 d-flex align-items-center justify-content-around">
              <div className="col-xxl-3 col-md-3">
                <div className="input-group">
                  <input
                    name="search"
                    value={search_txt}
                    type="text"
                    className="form__field placeholderSelect"
                    placeholder="Search by Name"
                    onChange={(e) => {
                      setSearch_txt(e.target.value);
                      getFilterSearch(e.target.value)
                    }}
                  />
                  <span className="icon-custom">
                    <FiSearch />
                  </span>
                </div>
              </div>
              <div className="col-xxl-2 col-md-2">
                <div className="input-group">
                  <input
                    type="date"
                    name="date"
                    value={course_date}
                    onChange={(e) => {
                      setCourse_date(e.target.value);
                      getFilterDate(e.target.value);
                    }}
                    className="form__field placeholderSelect"
                    placeholder="Select date"
                  />
                </div>
              </div>
              <div className="col-xxl-3 col-md-3">
                <Select
                  id="class_type"
                  defaultValue={course_categorey || undefined}
                  value={course_categorey || undefined}
                  className="form__field placeholderSelect"
                  onChange={(value) => {
                    setCourse_categorey(value);
                    getFilterCategorey(value)
                  }}
                  bordered={false}
                  placeholder={"select class"}
                >
                  {categories.map((item, index) => (
                    <Select.Option key={index} value={item.category_id}>
                      {item.title}
                    </Select.Option>
                  ))}
                </Select>
              </div>
              <div className="col-xxl-1 col-md-2">
                <Button
                  tagType="button"
                  type="button"
                  onClick={Clearinput}
                  className="btn_outline_black py-2 px-4 text-center"
                >
                  clear
                </Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ClassesFilter;
