import React from 'react'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div className="body-mobile-info">
        <div className="signup-form-info pb-35px">
        <div className="mb-30px pt-20px">
          <h2>Welcome, are you ready to own your home with a low down payment, low monthly payment, and without any debt?</h2>
        </div>
                <h4 className="clr-light-gry mb-4">We’re excited to show you how HomeWyse is revolutionizing the home purchasing and home owning experience.</h4>
                <h4 className="clr-light-gry">Let’s get started!</h4>
        </div>
        <div className="bottom-btn-info">
                <div className="btn-links text-align-center mb-3">
                  <p className="clr-gry">Already a user? <Link to="/login">Sign-in</Link></p>
                </div>
                <div className="bg-blue-clr">
                  <button className="btn-cstm" onClick={()=>navigate('/introduction1')}>See How It Works</button>
                </div>
        </div>
    </div>
  )
}

export default Welcome
