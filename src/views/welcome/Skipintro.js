import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import sliderleftarrow from '../../assets/sliderleftarrow.svg'
import sliderrightarrow from '../../assets/sliderrightarrow.svg'
import slidertopimg01 from '../../assets/slidertopimg01.png'
import slidertopimg02 from '../../assets/slidertopimg02.png'
import slidertopimg03 from '../../assets/slidertopimg03.png'
import slidertopimg04 from '../../assets/slidertopimg04.png'
import slidertopimg05 from '../../assets/slidertopimg05.png'
import slidertopimg06 from '../../assets/slidertopimg06.png'
import slidertopimg07 from '../../assets/slidertopimg07.png'
import bgbluerightarrow from '../../assets/bg-blue-right-arrow.svg'


const skipintro = () => {
  return (
    <div className="body-mobile-info">
        <div className="skip-intro-info pb-35px">
          <div id="demo" className="skip-intro-carousel carousel slide" data-bs-ride="carousel">

            <div className="carousel-inner">
              {/* <div className="carousel-item active">
                <img src={slidertopimg01} alt="slidertopimg01" className="slide-img" width="100%" />
                <div className="pl-20px pr-20px">
                  <h1>How HomeWyse Equity Sharing Works</h1>
                  <p>Want to buy a home without the hassle of a traditional mortgage? HomeWyse is here to help! Our equity sharing service offers lower monthly payments and helps you build more equity in your home. Plus, we take on a portion of the ownership, giving you more flexibility and ease in the process. Don't let mortgage debt hold you back - choose HomeWyse for a smarter, simpler home buying experience.</p>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <img src={slidertopimg02} alt="slidertopimg02" className="slide-img"  width="100%"/>
                <div className="pl-20px pr-20px">
                  <h1>How is this Similar to Traditional Home Ownership?</h1>
                  <p>As a HomeWyse homeowner, you’re responsible for maintaining your home just like with a mortgage. This includes keeping up with repairs and any improvements that may increase the value of your home. When you move, your home’s value will be reassessed to determine the equity that you've built. So, take pride in your home and keep it in good condition to maximize your investment.</p>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <img src={slidertopimg03} alt="slidertopimg03" className="slide-img"  width="100%" />
                <div className="pl-20px pr-20px">
                  <h1>Now the Fun Part -Finding Your Dream Home</h1>
                  <p>Trying to afford your dream home? HomeWyse has you covered. Want HomeWyse to purchase your current home? We do that too! Soon you you’ll be able to browse properties directly on our app. For now, use your preferred home search app and just fill out an application with the address and we'll see if it's a good fit. Owning your next perfect home has never been easier or more affordable.</p>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <img src={slidertopimg04} alt="slidertopimg04" className="slide-img"  width="100%" />
                <div className="pl-20px pr-20px">
                  <h1>Get a Fast Approval and Close just as Quickly!</h1>
                  <p>Fill out your home application, and get your official approval amount in as little as 1 day. Pick your perfect home, set your offer amount, and become a homeowner quickly - all from the comfort of your home.</p>
                  <p>Love your current home but want a lower monthly payment? Great, fill out our application - HomeWyse can help with that too!</p>
                </div>
              </div> */}

              {/* <div className="carousel-item">
                <img src={slidertopimg05} alt="slidertopimg05" className="slide-img"  width="100%" />
                <div className="pl-20px pr-20px">
                  <h1>Get Monthly Savings by Owning Through  HomeWyse</h1>
                  <p>HomeWyse is able to lower your monthly payment by up to 37% while, on average building you equal or more wealth than an equivalent mortgage. For the median home in America, that is over $600 a month in savings! And the best part is you have complete control of that savings - save it, use it, or grow a nest egg by investing it!</p>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <img src={slidertopimg06} alt="slidertopimg06" className="slide-img"  width="100%" />
                <div className="pl-20px pr-20px">
                  <h1>Track Progress, Manage Equity and Build for Your Future</h1>
                  <p>The HomeWyse dashboard is your one-stop-shop for managing your home finances. After purchasing a home with HomeWyse, you can use your dashboard to track your monthly payments, monitor the value of your home equity, keep updated on your homes estimated appreciation and manage your cash savings. Think of your dashboard as your new center of financial gravity.</p>
                </div>
              </div> */}
              {/* <div className="carousel-item">
                <img src={slidertopimg07} alt="slidertopimg07" className="slide-img"  width="100%" />
                <div className="pl-20px pr-20px">
                  <h1>Easily Move Up with HomeWyse’s Simple Transfer Process</h1>
                  <p>You’re never locked in to HomeWyse - cash out your home’s equity or get a traditional mortgage anytime you’d like. But when you do find your next perfect home, we’re here. Transfer homes in the simplest and most affordable way possible. Just give us 30 days notice and begin the transfer process right from the app - then move in! It’s as simple as that. Welcome to HomeWyse.</p>
                </div>
              </div> */}

            </div>
          <div className="carousel-indicators-info">
            {/* <button className="btn-skipin">Skip Intro</button> */}
            {/* <div className="carousel-indicators">
              <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
              <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
            </div> */}
            
            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <img src={sliderleftarrow} />
            </button>
            <button className="carousel-control-next pre-app-btn" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span className="pre-btn-txt">Get Pre-approved</span><img src={bgbluerightarrow} />
            </button>
          </div>



          </div>

        </div>
    </div>
  )
}

export default skipintro
