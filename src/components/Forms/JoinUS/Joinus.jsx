import React from 'react';
import Swal from 'sweetalert2';
import './Joinus.css';
import vector from "../../../assets/images/Vector.png";
import Media from "../../Media/Media";

const Joinus = () => {
    const selectedType = localStorage.getItem('selectedType') || '';

    const handleSubmit = (event) => {
        event.preventDefault();

        // Retrieve form data here

        // Show SweetAlert2 popup
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your form has been submitted.',
        }).then(() => {
            // Clear form fields
            document.getElementById('fname').value = '';
            document.getElementById('lname').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('comment').value = '';

            // Clear local storage
            localStorage.removeItem('selectedType');

            // Navigate to profile page
            window.location.href = '/profile'; // Replace '/profile' with the actual URL of your profile page
        });
    };
    return (
        <>
            <div className="position-relative">
                <Media
                    type="img" src={vector} className="position-absolute"
                    style={{top: "0px", left: "0", width: "100px"}}
                    alt="shape"/>
                <div className="head-content-left-shape text-left pb-3 position-relative">
                    <div className="text-shape">
                        <h1 className="hand-write">Join us</h1>
                        <h3 className="bold-head">Get started to join with oz community</h3>
                    </div>
                </div>


            </div>
            <section className="contactus my-5 joinus-form">


                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-lg-6">
                            <div className="box-apply-member">
                                <h3>Summary</h3>
                                <div className=" name-price d-flex align-items-center justify-content-between">
                                    <h2 className="d-flex justify-content-start align-items-center ">{selectedType}</h2>
                                    <div className="d-block">
                                        <del className="member_discount">25EGP / Monthly</del>
                                        <br/>
                                        <strong className="current_price">15.00 / Monthly</strong>
                                    </div>
                                </div>
                                <ul className="amenties-select">
                                    <li>Lorem ipsum dolor sit amet, consectetuerLorem ipsumconsectetue</li>
                                    <li>Lorem ipsum dolor sit amet, consectetuerLorem ipsumconsectetue</li>
                                    <li>Lorem ipsum dolor sit amet, consectetuerLorem ipsumconsectetue</li>
                                    <li>Lorem ipsum dolor sit amet, consectetuerLorem ipsumconsectetue</li>
                                    <li>Lorem ipsum dolor sit amet, consectetuerLorem ipsumconsectetue</li>

                                </ul>
                            </div>
                            {/*<h1>Selected Type: {selectedType}</h1>*/}
                        </div>
                        <div className="col-lg-6">
                            <div className="form-card py-3">
                                <form className="px-5" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form__group field my-3">
                                                <label htmlFor="fname" className="form__label">First Name</label>
                                                <input type="text" className="form__field"
                                                       placeholder="Enter Your First Name" name="email" id='fname'
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form__group field my-3">
                                                <label htmlFor="lname" className="form__label">Last Name</label>
                                                <input type="text" className="form__field"
                                                       placeholder="Enter Your Last Name" name="email" id='lname'
                                                       required/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form__group field my-3">
                                                <label htmlFor="email" className="form__label">Email</label>
                                                <input type="email" className="form__field"
                                                       placeholder="Enter Your Email" name="email" id='email' required/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">Phone number</label>
                                                <input type="number" className="form__field" placeholder="Phone No."
                                                       name="phone" id='phone' required/>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form__group field my-3">
                                                <label htmlFor="phone" className="form__label">User Type</label>
                                                <select className="form__field placeholderSelect" required>
                                                    <option selected>Enter user type</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>

                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="form__group field my-3">
                                                <label htmlFor="comment" className="form__label">Comments</label>
                                                <input type="text" className="form__field"
                                                       placeholder="Enter your comments" name="comment" id='comment'
                                                       required/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center my-3">
                                        <button type="submit" className="button-one-outline btn-bg-white">Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Joinus;
