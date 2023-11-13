import { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import Button from '../UI/Button';

const AddService = () => {

    const handleSubmit = async (values) => {};

    return (
        <Formik 
            initialValues={
                { 
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
            }}>
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
                        <div className="row g-3">
                            <div className="col-6">
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
                            <div className="col-6">
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
                            <div className="col-6">
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
                            <div className="col-6">
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
                            <div className="col-6">
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
                            <div className="col-6 row">
                                <div className="col-6 form__group field my-3">
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
                                <div className="col-6 form__group field my-3">
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
                            <div className="col-6">
                                <div className="form__group field my-3">
                                    <label htmlFor="postCost" className="form__label">POst cost</label>
                                    <input
                                        id='postCost' 
                                        type="text"
                                        value={values.postCost} 
                                        name="postCost"
                                        className="form__field"
                                        placeholder="2 $"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled 
                                    />
                                </div>
                            </div>
                            <div className='col-12'>
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
    )
};
export default AddService;