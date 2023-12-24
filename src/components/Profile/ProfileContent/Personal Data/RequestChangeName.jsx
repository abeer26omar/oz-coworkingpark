import React, { useState } from 'react';
import {Formik} from 'formik';
import Button from '../../../UI/Button';
import nameLabel from '../../../../assets/images/icons/User Id.png';
import submit_mark from '../../../../assets/images/submit_mark.svg';
import editProfile from '../../../../assets/images/icons/editprofile.png';
import SweetAlert2 from 'react-sweetalert2';
import { RequestUpdateUserInfo } from '../../../../apis/User';

const RequestChangeName = ({prevName}) => {

    const [disabledName, setDisabledName] = useState(true);
    const [restName, setRestName] = useState(prevName);
    const [swalProps, setSwalProps] = useState({});

    const requestUpdateData = async (key, old_value, new_value) => {
        try {
            const result = await RequestUpdateUserInfo(key, old_value, new_value);
            setSwalProps({
                show: true,
                icon: 'success',
                title: result.status,
                text: result.message,
                showConfirmButton: false,
                timer: 1500
            });
            setDisabledName(true);

        } catch (error) {
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
            <Formik
                initialValues={{
                    name: prevName ? prevName : '',
                }}
                onSubmit={async (values, { resetForm }) => {
                    await new Promise((r) => setTimeout(r, 500));
                    requestUpdateData('name', prevName, values.name);
                    resetForm()
                }}
                enableReinitialize>
                {({ 
                    values, 
                    handleChange,
                    handleBlur,
                    handleSubmit }) => (
                        <form className="profile-edit">
                            <div className="form__group field my-3">
                                <label htmlFor="name"
                                    className="form__label d-flex align-items-center justify-content-start">
                                    {disabledName && <img src={nameLabel} alt="name" className="me-2"/>}
                                    Name
                                </label>
                                <div className='input-group'>
                                    <input 
                                        id="name" 
                                        placeholder="Name" 
                                        className="form-control form__field" 
                                        type='text'
                                        disabled={disabledName}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {disabledName && <Button
                                        tagType='link'
                                        className="p-0 input-group-text" 
                                        id="inputGroupPrepend1"
                                        onClick={(e)=>{e.preventDefault();setDisabledName(!disabledName)}}>
                                        <img src={editProfile} alt='editIcon'/>
                                    </Button>}
                                    {!disabledName && <Button
                                        tagType='button'
                                        type='submit'
                                        onClick={handleSubmit}
                                        className="p-0 input-group-text" 
                                        id="inputGroupPrepend2">
                                        <img src={submit_mark} alt='editIcon'/>
                                    </Button>}
                                </div>
                            </div>
                        </form>
                    )}
            </Formik>
            <SweetAlert2 {...swalProps} />
        </>
    )
};
export default RequestChangeName;