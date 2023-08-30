import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import btnleftarrow from '../../../assets/back-icon-arrow.svg'
import dashboardphimg from '../../../assets/dashboardphimg.png'
import checkimg from '../../../assets/checkimg.png'
import rightbtnarrow from '../../../assets/rightbtnarrow.svg'
import exploreicon from '../../../assets/exploreicon.svg'
import analyicsicon from '../../../assets/analyicsicon.svg'
import chatblueicon from '../../../assets/chatblueicon.svg'
import dashbgblock from '../../../assets/dashbgblock.svg'

const Chat = () => {
    const navigate = useNavigate();
    return (
      <>
      <div className="body-mobile-info dashboard-page-info">
          <div className="dashboard-info">
              <div className="text-align-center mt-40px mb-30px">
                  {/* <button className="back-top-btn"><img src={btnleftarrow} onClick={() =>navigate('/login')}/></button> */}
                  <img src={dashboardphimg} alt="dashboardphimg" className="slide-img"  width="100%"/>
                  <div className='text-align-center'>
                    <h1 className='mb-20px'>Chat</h1>
                    <p>The dashboard will be available after you purchase your home. You can start by filling out an official application.</p>
                  </div>
              </div>
              <div className="btns-info max-w-100 mb-30px">
                  <button className='btn-cstm-info bg-btn-blue mb-20px'>Fill Out an Official Application</button>
                  <button onClick={()=>navigate('/homeWyse-vs-mortgage')} className='btn-cstm-info bg-btn-green'>Compare HomeWyse vs Mortgage <img className='right-arrow-img' src={rightbtnarrow} /></button>
              </div>
          </div>
          <div className="dashboard-botm-info">
              <img class="bg-img-dash" src={dashbgblock} />
              <div className='dashboard-bt-menu'>
                  <div className='top-icon-box'>
                      <img src={exploreicon} />
                      <h4>Explore</h4>
                  </div>
                  <div className='top-icon-box dash-box-info'>
                      <div className='dash-icon-img'>
                          <img src={analyicsicon} />
                      </div>
                      <h4>Dashboard</h4>
                  </div>
                  <div className='top-icon-box active'>
                      <img src={chatblueicon} />
                      <h4>Chat</h4>
                  </div>
              </div>
          </div>
      </div>
      </>
    )
}

export default Chat
