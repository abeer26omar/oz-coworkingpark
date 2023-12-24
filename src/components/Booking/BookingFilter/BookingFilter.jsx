import React, { useState, useEffect, useContext } from 'react';
import { Formik } from 'formik';
import { getWings, getFloors, getFacilities, getFilters} from '../../../apis/FilterBooking';
import SweetAlert2 from 'react-sweetalert2';
import './BookingFilter.css';
import Button from '../../UI/Button';
import { AuthContext } from '../../../apis/context/AuthTokenContext';

const BookingFilter = ({isOpen, placeId, getFilteredData}) => {

    const [wings, setWings] = useState([]);
    const [floors, setFloors] = useState([]);
    const [facilities, setFacilities] = useState([]);
    const [swalProps, setSwalProps] = useState({});
    const { token, userId } = useContext(AuthContext);

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

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getWings(token, signal).then(res=>{
            setWings(res);
        }).catch(err=>{});

        getFloors(token, signal).then(res=>{
            setFloors(res);
        }).catch(err=>{});

        getFacilities(token, signal).then(res=>{
            setFacilities(res);
        }).catch(err=>{});

        return ()=>controller.abort();
    },[]);
    
    const handleSubmit = async (values) => {
        try{
            const result = await getFilters(
                token,
                userId,
                1,
                placeId,
                values.date,
                values.wings,
                values.floors,
                values.capacity,
                values.facilities,
                values.favorites);
            getFilteredData(result);
        }
        catch (error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <>
            {isOpen && (
                <Formik 
                    initialValues={
                        { 
                            date:'',
                            wings: '',
                            floors: '',
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
                    <div className="container-fluid">
                        <form className="form-filter" onSubmit={handleSubmit}>
                            <div className="filter-component row g-3 d-flex align-items-center justify-content-around">
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
                                {/* <div className='col-xxl-2 col-md-3'>
                                    <select
                                        id='wings'
                                        name='wings'
                                        value={values.wings}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form__field placeholderSelect">
                                            <option disabled="">Wing</option>
                                            {wings && wings.map((item, index) => (
                                                <option key={index} value={item.id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                    </select>
                                </div> */}
                                {/* <div className='col-xxl-2 col-md-3'>
                                    <select
                                        id='floors'
                                        name='floors'
                                        value={values.floors}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form__field placeholderSelect">
                                        <option disabled="">floors</option>
                                        {floors && floors.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </select>
                                </div> */}
                                <div className='col-xxl-2 col-md-3'>
                                    <select
                                        id='capacity'
                                        name='capacity'
                                        value={values.capacity}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form__field placeholderSelect">
                                        <option disabled="">Capacity</option>
                                        {capacityList && capacityList.map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-xxl-2 col-md-3'>
                                    <select
                                        id='facilities'
                                        name='facilities'
                                        value={values.facilities}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="form__field placeholderSelect">
                                        <option disabled="">Facilities</option>
                                        {facilities && facilities.map((item, index) => (
                                            <option key={index} value={item.id}>
                                                {item.title}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-xxl-1 col-md-2'>
                                    <div className="form-check">
                                        <input
                                            id='favorites'
                                            name='favorites'
                                            value={values.favorites} 
                                            type="checkbox" 
                                            className="form-check-input"
                                            onChange={()=>{
                                                if(values.favorites === 1){
                                                    values.favorites = 0
                                                }else{
                                                    values.favorites = 1
                                                }
                                            }}
                                            onBlur={handleBlur}
                                        />
                                        <label
                                            className="form-check-label" 
                                            htmlFor="favorites">Only Favorites</label>
                                    </div>
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
            <SweetAlert2 {...swalProps} />
        </>
    );
};

export default BookingFilter;
