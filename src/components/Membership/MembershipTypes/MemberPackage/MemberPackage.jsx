import React, {useEffect, useState} from 'react';
import at_oz from "../../../../assets/images/at_oz.png";
import {Link, useParams} from "react-router-dom";
import './MemberPackage.css';
import vector from "../../../../assets/images/Vector.png";
import Media from "../../../Media/Media";
import {getMembershipOptions} from "../../../../apis/MembershipApi";
import MemberPackageHeader from "./MemberPackageHeader";
import { IndividualSocialTypes } from '../../../../Data/IndividualsTypesData';
import MainHeaderWrapper from '../../../UI/MainHeaderWrapper';
import Paragraph from '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import classes from '../../../UI/MainHeaderWrapper.module.css';
import optionImage from '../../../../assets/images/membership/Rectangle.png'
const MemberPackage = () => {
    const {id} = useParams();

    return (
        <>
        {
            IndividualSocialTypes.map((option, index) =>{
                if(option.id === id){
                    return (
                        <>
                        <div className={`position-relative`}>
                            <div className={`${classes.header_bg}`}>
                                <div 
                                style={
                                    {
                                        backgroundImage: `url(${optionImage})`
                                    }}
                                className={`${classes.img_bg}`}>
                                </div>
                              
                                <div className={'position-relative py-5'} style={{
                                    zIndex: 99
                                }}>
                                <div className="container-fluid px-70 py-5">
                                    <div className="col-md-6 col-12">
                                        <h1 className="main_header mb-0">{'Individual'}</h1>
                                        <h2 className="head_paragraph mb-3">{option.name}</h2>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                            <section className="at_oz">
                                <div className="container-fluid">
                                    <div className="row justify-content-between">
                                        <div className=" col-md-6 col-lg-6 col-sm-6 col-xs-6 m-auto ">
                                            <div className="box-content px-60">
                                                <h2 className="h2-text-box">I'LL BE AT OZ</h2>
                                                    <p className="p-text-box">
                                                            {option.description}
                                                        </p>
                                                        <Button 
                                                            tagType='link'
                                                            to={'/joinus'}
                                                            className="btn_outline m-auto">
                                                            Apply
                                                        </Button>
                                                    </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 d-flex justify-content-end">
                                            <Media
                                                type="img"
                                                    className="image-box w-100"
                                                    src={at_oz}
                                                    alt="Our OZ Vision"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="what-get">
                                <div className="position-relative mb-5" >
                                    <Media
                                        type="img" src={vector} className="position-absolute m-0"
                                        style={{top: "0px", left: "0", width: "100px"}} alt="shape"/>
                                </div>
                                    <div className='container position-relative' style={{
                                        zIndex: '9'
                                    }}>
                                            <div className="head-content-left-shape text-left">
                                                <h3 className="bold-head mb-4 ">What you'll get</h3>
                                                <p className="text-content text-secondary">Lorem ipsum dolor sit amet, consectetur
                                                    dipiscing elit eius mod tempor incididunt ut labore </p>
                                            </div>
                                    </div>
                                <div className="container py-5">
                                    <div className="row">
                                            {option.Amenties.map((i, index) => {
                                                return (
                                                    <div className="col-lg-6 col-md-6 col-sm-12 py-5 border-all" key={index}>
                                                        <div className='row'>
                                                            <div className="col-6">
                                                                <div className="d-flex align-items-center">
                                                                        <Media
                                                                            type="img" 
                                                                            src={i.icon_white} 
                                                                            alt={i.name}/>
                                                                        <h2 className="bold_desc mb-0">{i.key}</h2>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <Paragraph className='mb-0 text-content text-secondary'>{i.name}</Paragraph>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                }
            })
        }
        </>
    );
};

export default MemberPackage;
