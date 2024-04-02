import { useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../apis/context/AuthTokenContext';
import { Radio, Modal as model } from 'antd';
import {useNavigate} from 'react-router-dom'; 

const ApplyMonthPlanModal = (props) => {

    const [valuePlan, setValuePlan] = useState();
    const { token } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = ({ target: { value } }) => {
        setValuePlan(value);
    };

    const options = [
        {
          label: (
            <div className='price_monthly p-4' key={'1'}>
                <div className='price_body'>
                    <p className='mb-2'>Monthly</p>
                    <div className='d-flex align-items-center mb-3'>
                        <p className='priceafter mb-0'>{props.details?.price} / month</p>
                        <span className='ms-2'>inclusive of VAT</span>
                    </div>
                    {/* {item.discount !== '0' && <span className='mb-0 priceafter'>{calcDiscount(item.price, item.discount, item.discount_type)} / {item.time_count} {item.time}</span>} */}
                    <p className='mb-0 refund'>No refund if you cancel.</p>
                </div>
            </div>
          ),
          value: `${props.details?.price}`,
        },
        {
          label: (
            <div className='price_monthly p-4' key={'2'}>
                <div className='price_body'>
                    <p className='mb-2'>6 Months</p>
                    <div className='d-flex align-items-center mb-3'>
                        <p className='priceafter mb-0'>{props.details?.price_6_month} / 6 Month</p>
                        {/* <span className='ms-2'>inclusive of VAT</span> */}
                    </div>
                    {/* {item.discount !== '0' && <span className='mb-0 priceafter'>{calcDiscount(item.price, item.discount, item.discount_type)} / {item.time_count} {item.time}</span>} */}
                    <p className='mb-0 refund'>No refund if you cancel.</p>
                </div>
            </div>
          ),
          value: `${props.details?.price_6_month}`,
        },
        {
          label: (
            <div className='price_monthly p-4' key={'3'}>
                <div className='price_body'>
                    <p className='mb-2'>Annual</p>
                    <div className='d-flex align-items-center mb-3'>
                        <p className='priceafter mb-0'>{props.details?.price_12_month} / Annual</p>
                        <span className='ms-2'>inclusive of VAT</span>
                    </div>
                    {/* {item.discount !== '0' && <span className='mb-0 priceafter'>{calcDiscount(item.price, item.discount, item.discount_type)} / {item.time_count} {item.time}</span>} */}
                    <p className='mb-0 refund'>No refund if you cancel.</p>
                </div>
            </div>
          ),
          value: `${props.details?.price_12_month}`,
        },
    ];

    const calcDiscount = (price, discount) => {
        const priceDicounted =  price * discount / 100;
        return price-priceDicounted;
    }

    const confirmMembership = () => {
        const selectedPlan = {
            planId: props.type,
            mainPlan: props.planName,
            selectedPackage: props.details.type,
            price: props.details.price,
            priceDicounted: calcDiscount(props.details.price, props.details.discount),
            description: props.details.description,
            time: props.details.time,
            time_count: props.details.time_count,
            discount: props.details.discount,
            selected_plan_price: valuePlan,
            selected_plan: getPlan(valuePlan),
            amenities: props.details.amenities
        } 
       localStorage.setItem('selectedPlanOZ', JSON.stringify(selectedPlan));
        navigate('/membershipSummary');
    }

    const getPlan = (plan) => {
        if(plan === props.details?.price_6_month){
            return '6-Months'
        }else if(plan === props.details?.price_12_month){
            return '12-Months'
        }else{
            return 'Month'
        }
    }

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                keyboard={false}
                backdropClassName="custom-backdrop bg-navy"
                centered
            >
                <Modal.Header closeButton style={{border: 'none'}}></Modal.Header>
                    <Modal.Body className={`justify-content-center align-items-center pt-3  monthly-plan`}>
                        <div className='card-header'>
                            <h1>{props.details.name}</h1>
                            <p>the {props.planName} membership</p>
                            <span>Membership plans: Find your perfect fit</span>
                        </div>
                        <div className='card-body py-4'>
                        <Radio.Group
                            options={options}
                            onChange={handleChange}
                            value={valuePlan}
                            optionType="button"
                            buttonStyle="solid"
                            defaultValue={props.details?.price_6_month}
                        />
                            <div className="d-flex buttons-group mt-5">
                                <a onClick={confirmMembership} className="btn button-outLine btn-bg-white">Confirm</a>
                                <a onClick={props.onHide} className="btn button-outLine btn-bg-white opacity-50">cancel</a>
                            </div>
                        </div>
                    </Modal.Body>
            </Modal>
        </>
    )

}
export default ApplyMonthPlanModal;