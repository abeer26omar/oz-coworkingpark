import React from 'react';
import check from '../../../assets/images/icons/twemoji_check-mark.svg';
import './MembershipCompared.css';
const MembershipCompared = () => {
    return (
        <>
            <section className="memberships-compared p-60 table-responsive">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="head-content pb-5">
                                <h2 className="large-head">Learn More</h2>
                            </div>
                            <table className="table table-compared ">
                                <thead>
                                <tr>
                                    <th className="table-head" style={{textAlign:"left"}} scope="col">Memberships
                                        compared
                                    </th>
                                    <th className="table-head" scope="col">Limited 8</th>
                                    <th className="table-head" scope="col">Limited 12</th>
                                    <th className="table-head" scope="col">Unlimited</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th className="table-item" scope="row">Lorem ipsum dolor sit amet,</th>
                                    <td><img src={check}/></td>
                                    <td><img src={check}/></td>
                                    <td><img src={check}/></td>
                                </tr>
                                <tr>
                                    <th className="table-item" scope="row">Lorem ipsum dolor sit amet,</th>
                                    <td><img src={check}/></td>
                                    <td><img src={check}/></td>
                                    <td><img src={check}/></td>
                                </tr>
                                <tr>
                                    <th className="table-item" scope="row">Lorem ipsum dolor sit amet,</th>
                                    <td className="img-check"><img src={check}/>
                                    </td>
                                    <td className="img-check"><img src={check}/>
                                    </td>
                                    <td className="img-check"><img src={check}/>
                                    </td>

                                </tr>
                                <tr>
                                    <th className="table-item" scope="row">Lorem ipsum dolor sit amet,</th>
                                    <td>-</td>
                                    <td><img src={check}/></td>
                                    <td><img src={check}/></td>
                                </tr>
                                <tr>
                                    <th className="table-item" scope="row">Lorem ipsum dolor sit amet,</th>
                                    <td>-</td>
                                    <td>-</td>
                                    <td><img src={check}/></td>
                                </tr>
                                <tr className="buttons-apply">
                                    <td></td>
                                    <td><a href="src/components/Membership/MembershipsCompared#" className="button-one-outline p-0 my-3" tabIndex="-1">Apply</a></td>
                                    <td><a href="src/components/Membership/MembershipsCompared#" className="button-one-outline p-0 my-3" tabIndex="-1">Apply</a></td>
                                    <td><a href="src/components/Membership/MembershipsCompared#" className="button-one-outline p-0 my-3" tabIndex="-1">Apply</a></td>
                                </tr>
                                <tr>
                                    <th className="table-item" scope="row">Price for membership</th>
                                    <td>
                                        <del className="member_discount">25EGP / Monthly</del>
                                        <br/>
                                        <strong className="current_price">15.00 / Monthly</strong>
                                    </td>
                                    <td>
                                        <del className="member_discount">25EGP / Monthly</del>
                                        <br/>
                                        <strong className="current_price">15.00 / Monthly</strong>
                                    </td>
                                    <td>
                                        <del className="member_discount">25EGP / Monthly</del>
                                        <br/>
                                        <strong className="current_price">15.00 / Monthly</strong>
                                    </td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default MembershipCompared;
