import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import btnleftarrow from '../../../assets/back-icon-arrow.svg'
import user02 from '../../../assets/user02.svg'

const Editaccount = () => {
    const navigate = useNavigate();
    return (
      <>
      <div className="body-mobile-info edit-account-info">
        <div className="signup-form-info">
            <div className="edit-accont-info mb-20px">
                <div>
                    <button className="back-top-btn"><img src={btnleftarrow} onClick={() =>navigate('/user-profile')}/></button>
                </div>
                <div>
                    <button className="edit-user-btn">Edit Account</button>
                </div>
            </div>
            <div className='edit-user-detail mb-20px'>
                <div className='user-pic-info'>
                    <img src={user02} />
                </div>
                <div className='user-change-image'>
                    <p className='change-image'>Change Image</p>
                </div>
            </div>
            <div className='edit-account-form-info'>
                <div className='form-group'>
                    <label>First Name</label>
                    <input className='form-control' name='text' type='text' placeholder='First Name' />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input className='form-control' name='text' type='text' placeholder='Last Name' />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input className='form-control' name='email' type='email' placeholder='Email' />
                </div>
            </div>
            <div className='user-des-accordion'>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed clr-blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Change Password
                        </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <div className='edit-account-form-info'>
                                    <div className='form-group'>
                                        <label>Curent Password</label>
                                        <input className='form-control' name='password' type='password' />
                                    </div>
                                    <div className='form-group'>
                                        <label>New Password</label>
                                        <input className='form-control' name='password' type='password' />
                                    </div>
                                    <div className='form-group'>
                                        <label>Confirm New Password</label>
                                        <input className='form-control' name='password' type='password' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="bottom-btn-info">
            <div className="bg-blue-clr">
                <button onClick={()=> navigate('/dashboard')} className="btn-cstm">Save Changes</button>
            </div>
        </div>
    </div>
      </>
    )
}

export default Editaccount
