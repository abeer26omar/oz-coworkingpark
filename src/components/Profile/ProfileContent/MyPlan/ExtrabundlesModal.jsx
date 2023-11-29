import { useEffect, useState, useContext } from 'react';
import {Formik} from 'formik';
import * as Yup from "yup";
import Modal from 'react-bootstrap/Modal';
import Paragraph from  '../../../UI/Paragraph';
import Button from '../../../UI/Button';
import { getListMembershipTypes } from '../../../../apis/MembershipApi';
import { AuthContext } from '../../../../apis/context/AuthTokenContext';
import { addExtraBundle } from '../../../../apis/User';
import SweetAlert2 from 'react-sweetalert2';

const ExtrabundlesModal = (props) => {

    const [swalProps, setSwalProps] = useState({});
    const [types, setTypes] = useState([]);
    const { token } = useContext(AuthContext);

    useEffect(()=>{
        const getMemebershipTypes = async () => {
            try {
                const result = await getListMembershipTypes(token, 'yes');
                setTypes([...result['corporate'], ...result['individual']]);
            }catch (err){console.log(err)}
        }
        getMemebershipTypes();
    },[token]);

    const addExtra = async (values)=>{
        try{
            const result = await addExtraBundle(token, values.bundle);
            setSwalProps({
                show: true,
                icon: 'success',
                title: result.status,
                text: result.message,
                showConfirmButton: false,
                timer: 1500
            });
            props.onHide()
        }catch(error){
            setSwalProps({
                show: true,
                icon: 'error',
                title: error.response.data.status,
                text: error.response.data.message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    };

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onHide}
                keyboard={false}
                centered
                className='modal-invites'>
                    <Modal.Body className={`justify-content-center align-items-center p-4`}>
                        <Paragraph className="h2-description">business bundles</Paragraph>
                        <Formik
                            initialValues={{
                                bundle: '',
                            }}
                            onSubmit={async (values) => {
                                await new Promise((r) => setTimeout(r, 500));
                                addExtra(values)
                            }}
                            validationSchema={
                                Yup.object().shape({
                                    bundle: Yup.string().required()
                                })
                            }
                            >
                                {({ 
                                    values, 
                                    touched,
                                    errors,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit }) => (

                                    <form className='m-4' onSubmit={handleSubmit}>
                                        { types && types.map((type, index) => {
                                            return (
                                                <div className="d-flex justify-content-start form-check border-bottom p-3" key={index}>
                                                    <input 
                                                        className={
                                                            errors.cancelReason && touched.cancelReason
                                                            ? "form-check-input me-3 is-radio-invalid"
                                                            : "form-check-input me-3"
                                                        } 
                                                        type="radio" 
                                                        name='bundle' 
                                                        value={type.id} 
                                                        id={type.id}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}/>
                                                    <label className="form-check-label cancel_label" htmlFor={type.id}>
                                                        {type.name}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                        <div className='text-center'>
                                            <Button 
                                                tagType='button'
                                                type='submit'
                                                className="btn btn_outline_black btn_default auth_btn_padding"> 
                                                save                                               
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                    </Modal.Body>
            </Modal>
            <SweetAlert2 {...swalProps} />
        </>
    );
}
export default ExtrabundlesModal;