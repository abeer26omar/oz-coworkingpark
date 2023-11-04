import "./Auth.css";
import vector from "../../assets/images/Vector.png";
import NewPasswordForm from './NewPasswordForm';
const NewPassword = () => {
    return (
        <>
            <section className="login auth my-5">
                <div className="position-relative">
                    <div className='img_float'>
                        <img
                            type="img" 
                            src={vector} 
                            alt="shape"/>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="login-card form-card py-4">
                                <NewPasswordForm />                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default NewPassword;