import React, { useState, useEffect, useContext } from 'react';
import { Formik } from 'formik';
import { getFacilities, getFilters} from '../../../apis/FilterBooking';
import SweetAlert2 from 'react-sweetalert2';
import './BookingFilter.css';
import Button from '../../UI/Button';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { Select } from 'antd';
import { useQuery } from '@tanstack/react-query';

const BookingFilter = ({isOpen, placeId, getFilteredData}) => {

    const [swalProps, setSwalProps] = useState({});
    const { token, userId, branchId } = useContext(AuthContext);

    const capacityList = [
        '+1',
        '+2',
        '+3',
        '+4',
        '+5',
        '+6',
        '+7',
        '+8',
        '+9',
        '+10',
    ];

    const { error, data: facilities } = useQuery({
        queryKey: ['get-facilites'],
        queryFn: ({signal}) => getFacilities(token, signal)
    });
    
    const handleSubmit = async (values) => {
        console.log(values);
        // try{
        //     const result = await getFilters(
        //         token,
        //         userId,
        //         branchId,
        //         placeId,
        //         values.date,
        //         values.wings,
        //         values.floors,
        //         values.capacity,
        //         values.facilities,
        //         values.favorites);
        //     getFilteredData(result);
        // }
        // catch (error){
        //     setSwalProps({
        //         show: true,
        //         icon: 'error',
        //         title: error.response.data.status,
        //         text: error.response.data.message,
        //         showConfirmButton: false,
        //         timer: 1500
        //     });
        // }
    }
    return (
        <>
            {isOpen && (
                <Formik 
                    initialValues={
                        { 
                            date:'',
                            capacity: '',
                            facilities: '',
                            favorites: 0
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
                    handleSubmit
                } = props;
                return (
                    <div className='border-top'>
                        <div className="container-fluid">
                            <form className="form-filter" onSubmit={handleSubmit}>
                                <div className="filter-component row g-3 d-flex align-items-center justify-content-around">
                                    <div className='col-xxl-3 col-md-2'>
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
                                            id='capacity'
                                            name='capacity'
                                            defaultValue={values.capacity || undefined}
                                            value={values.capacity || undefined}
                                            className="form__field placeholderSelect"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            bordered={false}
                                            placeholder={'Choose capacity'}
                                        >
                                            {capacityList && capacityList.map((item, index) => (
                                                <Select.Option key={index} value={item}>
                                                    {item}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </div>
                                    <div className='col-xxl-3 col-md-3'>
                                        <Select
                                            id='facilities'
                                            name='facilities'
                                            defaultValue={values.facilities || undefined}
                                            value={values.facilities || undefined}
                                            className="form__field placeholderSelect"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            bordered={false}
                                            placeholder={'Choose facilities'}
                                        >
                                            {facilities && facilities.map((item, index) => (
                                                <Select.Option key={index} value={item.id}>
                                                    {item.title}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </div>

                                    <div className='col-xxl-2 col-md-2 justify-content-end d-flex'>
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
                    </div>
                )}}
                </Formik>
            )}
            <SweetAlert2 {...swalProps} />
        </>
    );
};

export default BookingFilter;
