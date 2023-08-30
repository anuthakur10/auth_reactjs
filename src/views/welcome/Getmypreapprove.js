import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import btnleftarrow from '../../assets/back-icon-arrow.svg'
import myaproval from '../../assets/myaproval.png'
import checkimg from '../../assets/checkimg.png'
import rightbtnarrow from '../../assets/rightbtnarrow.svg'



const Getmypreapprove = () => {
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
      <div className="body-mobile-info get-mypreapproved-info">
        <div className="mypreapproved-info">
          <div className="mb-20px">
            <button className="back-top-btn"><img src={btnleftarrow} onClick={() => navigate('/login')} /></button>
            <img src={myaproval} alt="myaproval" className="slide-img mt-m-20" width="100%" />
            <div>
              <h1 className='mb-20px'>Congratulations, You’re Pre-approved!</h1>
              <p>Pending document verification, you’ll be approved for a maximum home value of <span className='weight-700'>$428.000</span> and a corresponding monthly payment of <span className='weight-700'>$2,385</span>. Given current mortgage rates, you’ll have an <span className='weight-700'>$805</span> lower monthly payment than you would with a mortgage.</p>
              <p>HomeWyse saves you money while, on average, earning you equivalent or more wealth than a comparable mortgage!</p>
            </div>
          </div>
          <div className="join-watilist-info mb-30px">
            <img src={checkimg} /> Join the waitlist to purchase a home with us
          </div>
          <div className="btns-info mb-30px">
            <button onClick={() => navigate('/dashboard')} className='btn-cstm-info bg-btn-blue mb-20px'>Dashboard <img className='right-arrow-img' src={rightbtnarrow} /></button>
            <button className='open-drawer btn-cstm-info bg-btn-green'>How We Make it Possible <img className='right-arrow-img' src={rightbtnarrow} /></button>
            <div className="homewyse-accom-popup drawer-container">
              <div className='close-drawer'>
              <div className="drawer-content">
                <div className='homewyse-accom-info'>
                  <h4 className='mb-20px'>How HomeWyse accomplishes this for you.</h4>
                  <p>HomeWyse uses a proprietary financial algorithm to customize individualized equity schedules that fit our customers’ needs. No more one size fits all 30-year traditional mortgage. We use a modern equity sharing model where investors in our ecosystem share in the appreciation of your home. By adding up your share of the appreciation + monthly savings over a mortgage + monthly principle payments you make = affordability, flexibility and, on average, equal or more wealth than a comparable mortgage - enjoy!</p>
                </div>
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Getmypreapprove


