import React, { useContext, useState, useEffect } from "react";
import Paragraph from "../UI/Paragraph";
import Calunder from "../UI/Icons/Calunder";
import Alarm from "../UI/Icons/Alarm";
import Advanced from "../UI/Icons/Advanced";
import Payment from "../UI/Icons/Payment";
import moment from "moment";
import PromoCode from '../promo-code/PromoCode';
import { AuthContext } from '../../apis/context/AuthTokenContext';
import { getBranchById } from "../../apis/config";

function CaseOne({ details, getPromoValue, getPromoId }) {
    const [branch, setBransh] = useState('');
    const [priceAfterPromo, setPriceAfterPromo] = useState('');
    const [price, setPrice] = useState(details.price);
    const { token, branchId, planId } = useContext(AuthContext);

    const getPrice = (value) => {
      setPriceAfterPromo(value);
    };

    useEffect(() => {
      getBranchById(token, branchId).then((res) => {
        setBransh(res.name);
      });
    }, [branchId]);
    
    const checkPackage = () => {
      if(details?.active_membership_discount && details?.active_membership_discount !== null){
        if(+planId === details?.active_membership_discount?.id){
          const discount = details?.active_membership_discount?.discount;
          const discount_type = details?.active_membership_discount?.discount_type === 'percentage' ? '%' : '';
          const price =  details?.active_membership_discount?.price;
          // CalcPrice(discount, price, discount_type);
          return (
            <>
              <Paragraph className='mb-0 mx-2 fs-16 light'>
                You Have {discount} {discount_type} Off
              </Paragraph>
            </>
          )
        }else{
          return details?.price;
        }
      }else{
        return details?.price;
      }
    };

    useEffect(()=>{
      const CalcPrice = () => {
        if(details?.active_membership_discount && details?.active_membership_discount !== null){
          if(+planId === details?.active_membership_discount?.id){
            const discount = details?.active_membership_discount?.discount;
            const discount_type = details?.active_membership_discount?.discount_type === 'percentage' ? '%' : '';
            const price =  details?.active_membership_discount?.price;
              if(discount_type === 'fixed'){
                setPrice(details?.price - discount);
              }else{
                const priceDicounted =  details?.price * discount / 100;
                setPrice(details?.price - priceDicounted);
              }
          }else{
            return details?.price;
          }
        }else{
          return details?.price;
        }
      };
      CalcPrice();
    },[])

  return (
    <>
      <div className="w-100 row p-5 bg_white">
        <span className="mainPlan">Summary</span>
        <Paragraph className="paragraph_black pt-3 pb-5">
          {details.title}
        </Paragraph>
        <div className="col-md-6 col-12">
          <ul className="p-0" style={{
            listStyle: 'none'
          }}>
          <li className="d-flex align-items-center mb-4">
            <Calunder />
            <Paragraph className="mb-0 mx-2 summary_item">{
                details.date.map(item => {
                   return moment(item.check_in_date).format("dddd, MMM. D, YYYY")
                })
           }</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Alarm />
            <Paragraph className="mb-0 mx-2 summary_item">{
                details.date.map(item => {
                    return item.check_in_time
                })
            }</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
            <Advanced />
            <Paragraph className="mb-0 mx-2 summary_item">{details.genre}</Paragraph>
          </li>
          <li className="d-flex align-items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M5.33398 13.5257C5.33398 7.52914 10.1096 2.66797 16.0007 2.66797C21.8917 2.66797 26.6673 7.52914 26.6673 13.5257C26.6673 19.4753 23.2629 26.4179 17.9512 28.9006C16.713 29.4793 15.2883 29.4793 14.0501 28.9006C8.73842 26.4179 5.33398 19.4753 5.33398 13.5257Z" stroke="black" stroke-width="2"/>
                <ellipse cx="16" cy="13.332" rx="4" ry="4" stroke="#BDBDBD" stroke-width="2"/>
              </svg>
              <span className='ms-2 summary_item'>{branch}</span>
          </li>
        </ul>
        </div>
        <div className="col-md-6 col-12 border-left">
          <ul className="p-0 px-sm-3 px-1" style={{
            listStyle: 'none'
          }}>
            <li className="d-flex align-items-center mb-4">
              <Payment />
              <Paragraph className={`mb-0 mx-2 summary_item ${priceAfterPromo !== '' ? 'promoApplided' : ''}`}>
                {price} EGP
              </Paragraph>
              {checkPackage()}
            </li>
            <li className="mb-0">
              <PromoCode 
                price={price} 
                getPrice={getPrice}
                getPromoId={getPromoId} 
                getPromoValue={getPromoValue}
              />
            </li>
              <div className="my-32" style={{
                borderBottom: '1px solid black'
              }}></div>
            <li className="price-promo">
              <div className="d-flex justify-content-between align-items-center">
                <p>Total Price:</p>
                <p>{priceAfterPromo ? priceAfterPromo : price} EGP</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CaseOne;