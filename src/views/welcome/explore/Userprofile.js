import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import btnleftarrow from '../../../assets/back-icon-arrow.svg'
import user02 from '../../../assets/user02.svg'

const Userprofile = () => {
    const navigate = useNavigate();
    React.useEffect(() => {
        const openDrawerBtn = document.querySelector('.open-drawer');
        const closeDrawerBtn = document.querySelector('.close-drawer');
        const drawerContent = document.querySelector('.drawer-content');
    
        openDrawerBtn.addEventListener('click', () => {
          drawerContent.classList.add('open');
        });
    
        closeDrawerBtn.addEventListener('click', () => {
          drawerContent.classList.remove('open');
        });
      }, []);
    return (
      <>
      <div className="body-mobile-info userprofile-info">
        <div className="signup-form-info">
            <div className="edit-back-info mb-1">
                <div>
                    <button className="back-top-btn"><img src={btnleftarrow} onClick={() =>navigate('/explore')}/></button>
                </div>
                <div>
                    <button className="edit-user-btn active" onClick={()=>navigate('/edit-account')}>Edit</button>
                </div>
            </div>
            <div className='user-pro-detail text-align-center pb-1 mb-3'>
                <div className='user-pic-info mb-3'>
                    <img src={user02} />
                </div>
                <div className='user-name-info'>
                    <h4 className='user-name'>John Smith</h4>
                    <p className='user-email'>john.smith@gmail.com</p>
                </div>
            </div>
            <div className='user-des-accordion arrow-rotate-css'>
                <div className="accordion">
                    <button className="accordion-button collapsed" onClick={() =>navigate('/get-preapproved')}>Pre-approval</button>
                    {/* <button className="open-drawer accordion-button collapsed">Pre-approval</button> */}
                    <button className="accordion-button collapsed">Official Application</button>
                    <button className="open-drawer accordion-button collapsed">FAQ</button>
                    <button className="accordion-button collapsed">Terms & Conditions</button>
                    <button className="accordion-button collapsed">Privacy Policy</button>
                </div>
            </div>

            <div className="homewyse-accom-popup drawer-container">
              <div className='close-drawer'>
              <div className="drawer-content">
                <div className='homewyse-accom-info pb-100px'>
                    {/* <div className='close-drawer'></div> */}
                    <h4 className='mb-1'>Currently Monthly Payment</h4>
                    <p className='mb-2'>$2,500 / monthly</p>
                    <p className='clr-blue weight-600 mb-20px'>Adjust Payment</p>
                    <div className='dis-flex-row auto-pay-info bot-1px bob-1px'>
                        <div>
                            <p className='clr-dark weight-600 mb-0'>Set Up an Auto-pay</p>
                        </div>
                        <div>
                            <label className='switch-btns'>
                                <input type="checkbox"/>
                                <span className='switch-btn'></span>
                            </label>   
                        </div>
                    </div>
                    <div className='dis-flex-row bank-pay-info pt-20px pb-10px'>
                        <div>
                            <p className='clr-dark weight-600 mb-0'>Bank Account</p>
                        </div>
                        <div>
                            <label className='radio-btns'>
                                <input type="radio" name="pay-method" />
                                <span className='radio-btn'></span>
                            </label>   
                        </div>
                    </div>
                    <div className='dis-flex-row bank-pay-info pt-10px pb-20px bob-1px mb-20px'>
                        <div>
                            <p className='clr-dark weight-600 mb-0'>Debit Card</p>
                        </div>
                        <div>
                            <label className='radio-btns'>
                                <input type="radio" name="pay-method" />
                                <span className='radio-btn'></span>
                            </label>   
                        </div>
                    </div>
                    <div className='payment-card-info'>
                        <div className='form-group'>
                            <label>Card Number</label>
                            <input className='form-control' name='text' type='text' placeholder='4790-7600-0000-8739' />
                        </div>
                        <div className='form-group'>
                            <label>Cardholder Name</label>
                            <input className='form-control' name='text' type='text' placeholder='John Smith' />
                        </div>
                        <div className='row'>
                            <div className="col-6 pe-2">
                                <div className='form-group'>
                                    <label>Expiry Date</label>
                                    <input className='form-control' name='text' type='text' placeholder='12/28' />
                                </div>
                            </div>
                            <div className="col-6 ps-2">
                                <div className='form-group'>
                                    <label>CVV</label>
                                    <input className='form-control' name='text' type='text' placeholder='678' />
                                </div>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Postcode</label>
                            <input className='form-control' name='text' type='text' placeholder='10007' />
                        </div>
                    </div>
                    <div className="bottom-btn-info drawer-bt-sec">
                        <div className="bg-blue-clr">
                            <button onClick={()=> navigate('/dashboard')} className="btn-cstm">Confirm & Continue</button>
                        </div>
                    </div>
                </div>
                
              </div>
              </div>
            </div>

        </div>

        <div className="bottom-btn-info">
            <div className="logout-txt-bottom">
                <button onClick={()=> navigate('/login')} className="btn-cstm">Log Out</button>
            </div>
        </div>
    </div>
      </>
    )
}

export default Userprofile
