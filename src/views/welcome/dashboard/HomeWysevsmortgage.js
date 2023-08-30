import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import btnleftarrow from '../../../assets/back-icon-arrow.svg'

const HomeWysevsmortgage = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className="body-mobile-info homewysevsmortgage-info">
        <div className="signup-form-info">
            <div className="mb-3">
                <button className="back-top-btn"><img src={btnleftarrow} onClick={() =>navigate('/login')}/></button>
                <h4>5-Year HomeWyse vs Mortgage</h4>
            </div>
            <div className='cstm-table mb-30px'>
                <table className='cstm-table-info'>
                    <thead>
                    <tr>
                        <th></th>
                        <th>HomeWyse</th>
                        <th>Mortgage</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Home Price</td>
                        <td>$350,000</td>
                        <td>$350,000</td>
                    </tr>
                    <tr>
                        <td>Monthly Home Payment, Including Tax + Ins. + PMI</td>
                        <td>$2,045</td>
                        <td>$2,045</td>
                    </tr>
                    <tr>
                        <td>Monthly Cash Saved Over a Mortgage</td>
                        <td>$511</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Cumulative Cash Saved Over a Mortgage, 5 years</td>
                        <td>$30,660</td>
                        <td>-</td>
                    </tr>

                    <tr>
                        <td>Sale of Home, 5 Years with 3.8% annual appreciation</td>
                        <td>$0*</td>
                        <td>$120,313</td>
                    </tr>
                    <tr>
                        <td>HomeWyse Accessible Home Equity Account, 5 Years</td>
                        <td>$79,580</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>HomeWyse Transfer Fees vs Mortgage Buy/Sell Costs</td>
                        <td>-$26,000</td>
                        <td>-$42,174</td>
                    </tr>
                    <tr>
                        <td>Net 5-Year Wealth</td>
                        <td>$84,240</td>
                        <td>$78,139</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <div>
                <p><span className='weight-700'>*$409</span> of your monthly payment will increase your equity ownership in your home + <span className='weight-700'>$511</span> in savings over a mortgage + <span className='weight-700'>50%</span> of the appreciation in your home = affordability, flexibility and, on average, equal or more wealth than a comparable mortgage - enjoy!</p>
                <p>**Current average <span className='weight-700'>5.5%</span> 30-year fixed mortgage, 7% down, 7% selling cost + 3% new home buying cost, and 3.8% annual home appreciation.</p>
            </div>
        </div>

        <div className="bottom-btn-info">
                <div className="bg-blue-clr">
                  <button onClick={()=> navigate('/dashboard')} className="btn-cstm">Back to Dashboard</button>
                </div>
        </div>
    </div>
    </>
  )
}

export default HomeWysevsmortgage
