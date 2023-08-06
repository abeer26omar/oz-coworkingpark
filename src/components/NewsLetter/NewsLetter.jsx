import React from 'react';
import './NewsLetter.css';
const NewsLetter = () => {
    return (
        <>
            <section className="monoBlock newsLetters">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
                                <h1 className="text-h1">Join NewsLetter</h1>
                            </div>
                            <div className="form__group field ">
                                <input type="text" className="form__field" placeholder="Email Address"/>
                                </div>
                            <div className="buttons d-flex justify-content-center align-items-center">
                                <a href="#" className="btn button-outLine">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default NewsLetter;
