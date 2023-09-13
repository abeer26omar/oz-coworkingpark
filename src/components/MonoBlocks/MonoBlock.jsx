import React from 'react';
import './MonoBlocks.css';

const MonoBlock = (props) => {
    const {title, desc, link, className, numberOfLinksToShow} = props;
    const links = Array.isArray(link) ? link.slice(0, numberOfLinksToShow) : [];

    return (
        <>
            <section className={`monoBlock ${className}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content-block">
                                <h1 className="text-h1">{title}</h1>
                                <p className="text-p">{desc}</p>
                            </div>
                            <div
                                className="buttons d-lg-flex d-md-flex d-sm-block my-3 justify-content-center align-items-center text-center">
                                {links.map((linkText, index) => (
                                    <a key={index} href="#" className={`btn button-outLine my-3 ${linkText.className}`}>
                                        {linkText.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MonoBlock;
