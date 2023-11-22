import { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import Button from '../UI/Button';
import Previews from '../UI/DropZone';
import {createProject} from '../../apis/Market';
import SweetAlert2 from 'react-sweetalert2';
import { AuthContext } from '../../apis/context/AuthTokenContext';

const AddService = () => {

    const [images, setImages] = useState([]);
    const [swalProps, setSwalProps] = useState({});
    const {token, userId, branch_id} = useContext(AuthContext);

    const handleSubmit = async (values) => {
        try{
            const result = await createProject(token, 
                userId,
                branch_id,
                values.serviceType,
                values.serviceName,
                values.description,
                values.cost,
                images,
                values.portfolioLink,
                values.contactType,
                values.period);
            setSwalProps({
                show: true,
                icon: 'error',
                title: result.status,
                text: result.message,
                showConfirmButton: false,
                timer: 1500
            });
        }catch(error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    const getImages = (images) => {
        setImages(images);
    };

    return (
        <>
            <Formik 
                initialValues={
                    { 
                        serviceImages: images,
                        serviceName: '',
                        serviceType: '',
                        portfolioLink: '',
                        description: '',
                        contactType: '',
                        cost: '',
                        period: '',
                        postCost: ''
                    }
                }
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 0));
                    handleSubmit(values);
                }}
                validationSchema={Yup.object().shape({
                    serviceName: Yup.string().required(),
                    serviceType: Yup.string().required(),
                    portfolioLink: Yup.string().required(),
                    description: Yup.string().required(),
                    contactType: Yup.string().required(),
                    cost: Yup.string().required(),
                    period: Yup.string().required(),
                })}
                enableReinitialize>
                {props => {
                    const {
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props;
                return (
                    <div className="container">
                        <form className="form-filter" onSubmit={handleSubmit}>
                            <div className="row g-5">
                                <div className='col-lg-12 py-3'>
                                    <Previews getImages={getImages} />
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form__group field my-3">
                                        <label htmlFor="serviceName" className="form__label">service Name</label>
                                        <input
                                            id='serviceName' 
                                            type="text"
                                            value={values.serviceName} 
                                            name="serviceName"
                                            className="form__field"
                                            placeholder="Enter your Services Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form__group field my-3">
                                        <label htmlFor="serviceType" className="form__label">service Type</label>
                                        <input
                                            id='serviceType' 
                                            type="text"
                                            value={values.serviceType} 
                                            name="serviceType"
                                            className="form__field"
                                            placeholder="Enter your Services Type"
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form__group field my-3">
                                        <label htmlFor="portfolioLink" className="form__label">Portfolio link</label>
                                        <input
                                            id='portfolioLink' 
                                            type="text"
                                            value={values.portfolioLink} 
                                            name="portfolioLink"
                                            className="form__field"
                                            placeholder="Enter your Portfolio link"
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form__group field my-3">
                                        <label htmlFor="description" className="form__label">Description</label>
                                        <input
                                            id='description' 
                                            type="text"
                                            value={values.description} 
                                            name="description"
                                            className="form__field"
                                            placeholder="Enter your Description"
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form__group field my-3">
                                        <label htmlFor="contactType" className="form__label">Contact Type</label>
                                        <select
                                            id='contactType'
                                            name='contactType'
                                            value={values.contactType}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form__field placeholderSelect">
                                                <option disabled>select how people contact you</option>
                                                {/* {services && services.map((item, index) => (
                                                    <option key={index} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                ))} */}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 row justify-content-between g-md-5 g-0">
                                    <div className="col-5 form__group field my-2">
                                    <label htmlFor="cost" className="form__label">price (cost\Period)</label>
                                        <input
                                            id='cost' 
                                            type="text"
                                            value={values.cost} 
                                            name="cost"
                                            className="form__field"
                                            placeholder="Enter your Cost"
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                        />
                                    </div>
                                    <div className="col-md-6 col-12 form__group field my-2">
                                        <input
                                            id='period' 
                                            type="text"
                                            value={values.period} 
                                            name="period"
                                            className="form__field"
                                            placeholder="Enter your period"
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form__group field my-3">
                                        <label htmlFor="postCost" className="form__label">POst cost</label>
                                        <input
                                            id='postCost' 
                                            type="text"
                                            value={values.postCost} 
                                            name="postCost"
                                            className="form__field"
                                            placeholder="2$"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            disabled 
                                        />
                                    </div>
                                </div>
                                <div className='col-12 text-center'>
                                    <Button 
                                        tagType='button'
                                        type='submit'
                                        className="btn_outline_black auth_btn_padding text-center">
                                            Create
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                )}}
            </Formik>
            <SweetAlert2 {...swalProps} />
        </>
    )
};
export default AddService;