import { useContext, useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from "yup";
import Button from '../UI/Button';
import Previews from '../UI/DropZone';
import {createProject} from '../../apis/Market';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import { getServices, getPostCost } from '../../apis/Market';
import { useNavigate } from 'react-router-dom';
import { Select, Modal } from 'antd';

const AddService = () => {
    
    const [images, setImages] = useState([]);
    const [services, setServices] = useState([]);
    const [postCost, setPostCost] = useState('');
    const {token, userId, branch_id} = useContext(AuthContext);
    const contacts = ['email', 'call', 'chat'];
    const key = 'updatable';
    const navigate = useNavigate();

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        getServices(token, userId, branch_id, signal).then(res=>{
            setServices(res);
        }).catch(err=>{});

        return ()=>controller.abort();
    }, []);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;

        const getCost = async () => {
            try{
                const result = await getPostCost(token, signal);
                setPostCost(result.ads_price);
            }catch (error){
            }
        }
        getCost()

        return ()=>controller.abort();
    }, []);

    const handleSubmit = async (values) => {

        const controller = new AbortController();
        const signal = controller.signal;

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
                values.period,
                signal);
                if(result){
                    Modal.success({
                        title: result.message,
                        content: result.message,
                        footer: false,
                        centered: true,
                        closable: true,
                        maskClosable: true,
                        onclose: ()=>{navigate('/talentmarket')}
                    });
                }
            
        }catch(error){
            if(error){
                Modal.error({
                    title: error.response.data.status,
                    content: error.response.data.message,
                    footer: false,
                    centered: true,
                    closable: true,
                    maskClosable: true,
                    onclose: ()=>{navigate('/talentmarket')}
                });
            }
        }
    };

    const getImages = (images) => {
        setImages(images[0]);
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
                    handleSubmit,
                    setFieldValue
                } = props;
                return (
                    <>
                        <div className='border-bottom'>
                        <div className="navigator">
                            <div className="container-fluid">
                                <div className='d-flex'>
                                    <h1 className="title-name mb-0">
                                        Add New Posting
                                    </h1>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="2"
                                        height="127"
                                        viewBox="0 0 2 127"
                                        fill="none"
                                    >
                                        <path d="M1 0L1.00001 127" stroke="#BDBDBD" stroke-width="1.5"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className='container-fluid'>
                            <form className="form-filter" onSubmit={handleSubmit}>
                                <div className="container-fluid">
                                    <div className="row g-5 align-items-center">
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
                                                <Select
                                                    id='serviceType'
                                                    name='serviceType'
                                                    defaultValue={values.serviceType || undefined}
                                                    value={values.serviceType || undefined}
                                                    className="form__field placeholderSelect"
                                                    onBlur={handleBlur}
                                                    onChange={(value) => {setFieldValue('serviceType', value)}}
                                                    bordered={false}
                                                    placeholder={'service types'}
                                                >
                                                    {services && services.map((item) => (
                                                        <Select.Option key={item.id} value={item.id}>
                                                            {item.name}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
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
                                                <Select
                                                    id='contactType'
                                                    name='contactType'
                                                    defaultValue={values.contactType || undefined}
                                                    value={values.contactType || undefined}
                                                    className="form__field placeholderSelect"
                                                    onBlur={handleBlur}
                                                    onChange={(value) => {setFieldValue('contactType', value)}}
                                                    bordered={false}
                                                    placeholder={'select how people contact you'}
                                                >
                                                    {contacts && contacts.map((item, index) => (
                                                        <Select.Option key={index} value={item}>
                                                            {item}
                                                        </Select.Option>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className='row justify-content-between g-5'>
                                                <div className="col-md-5 col-12">
                                                    <div className='form__group field my-2'>
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
                                                </div>
                                                <div className="col-md-6 col-12">
                                                    <div className='form__group field my-2'>
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
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form__group field my-3">
                                                <label htmlFor="postCost" className="form__label">Post cost</label>
                                                <input
                                                    id='postCost' 
                                                    type="text"
                                                    value={postCost} 
                                                    name="postCost"
                                                    className="form__field"
                                                    placeholder={postCost}
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
                                </div>
                            </form>
                        </div>
                    </>
                )}}
            </Formik>
        </>
    )
};
export default AddService;