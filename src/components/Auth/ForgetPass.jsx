import "./Auth.css";
import vector from "../../assets/images/Vector.png";
import Media from "../Media/Media";
import Paragraph from "../UI/Paragraph";
import ForgetPassForm from './ForgetPassForm';
const ForgetPass = () => {
    return (
        <>
            <section className="login auth my-5">
                <div className="position-relative">
                    <div className='img_float'>
                        <Media
                            type="img" 
                            src={vector} 
                            alt="shape"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-card form-card py-4">
                                <div className="head-content text-center pb-3">
                                    <Paragraph className="hand-write">Forget Password ,</Paragraph>
                                    <Paragraph className="bold-head">Enter your email</Paragraph>
                                </div>
                                <ForgetPassForm />                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default ForgetPass;