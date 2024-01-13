import React, { useContext } from "react";
import { Formik } from 'formik';
import { Select } from 'antd';
import {FiSearch} from "react-icons/fi";
import Button from "../UI/Button";
import {getTrainingClasses} from '../../apis/ZeeStudio';
import { AuthContext } from '../../apis/context/AuthTokenContext';

const ClassesFilter = ({isOpen, classesGym, getFilteredData}) => {

  const {token} = useContext(AuthContext);

  const handleSubmit = async (values) => {

    const controller = new AbortController();
    const signal = controller.signal;

    try{
      const result = await getTrainingClasses(token, values.search, values.date, values.class_type, signal)
      getFilteredData(result);
    }
    catch (error){
      console.log(error);
    }

  };

  return (
    <>
      {isOpen && 
       (
        <Formik 
            initialValues={
                { 
                  search: '',
                  date:'',
                  class_type: ''
                }
            }
            onSubmit={async values => {
                await new Promise(resolve => setTimeout(resolve, 0));
                handleSubmit(values);
            }}>
        {props => {
            const {
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue
        } = props;
        return (
            <div className="container-fluid border-top">
              {console.log(classesGym)}
                <form className="form-filter" onSubmit={handleSubmit}>
                    <div className="filter-component row g-3 d-flex align-items-center justify-content-around">
                        <div className='col-xxl-3 col-md-3'>
                            <div className="input-group">
                                <input
                                    name='search'
                                    value={values.search} 
                                    type="text" 
                                    className="form__field placeholderSelect" 
                                    placeholder="Search by Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                />
                                <span className="icon-custom"><FiSearch/></span>
                            </div>
                        </div>
                        <div className='col-xxl-2 col-md-2'>
                            <div className="input-group">
                                <input 
                                    type="date"
                                    name='date'
                                    value={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur} 
                                    className="form__field placeholderSelect" 
                                    placeholder='Select date'/>
                            </div>
                        </div>
                        <div className='col-xxl-3 col-md-3'>
                          <Select
                              id='class_type'
                              defaultValue={values.class_type || undefined}
                              value={values.class_type || undefined}
                              className="form__field placeholderSelect"
                              onBlur={handleBlur}
                              onChange={(value) => {setFieldValue('class_type', value)}}
                              bordered={false}
                              placeholder={'select class'}
                            >
                              {classesGym.map((item, index) => (
                                  <Select.Option key={index} value={item.category_id}>{item.title}</Select.Option>
                                ))}
                          </Select>
                        </div>
                        <div className='col-xxl-1 col-md-2'>
                            <Button 
                                tagType='button'
                                type='submit'
                                className="btn_outline_black py-2 px-4 text-center">
                                    apply
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        )}}
        </Formik>
    )}
    </>
  );
};

export default ClassesFilter;
