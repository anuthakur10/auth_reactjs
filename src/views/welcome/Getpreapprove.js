import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../API";

const Getpreapprove = () => {
  const navigate = useNavigate();

  // const {user, accessToken} = useSelector((s: {auth: authState}) => s.auth);
  const [gaHouseholdIncome, setGaHouseholdIncome] = useState("");
  const [totalAssetBalance, setTotalAssetBalance] = useState("");
  const [totalMonthlyDebtPayments, setTotalMonthlyDebtPayments] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnActiveIndex, setbtnActiveIndex] = useState(-1);

  const BUTTONS = [{ value: "> 740 Excellent",}, { value: "670-739 Good",}, { value: "580-669 Fair",}, { value: "< 580 Poor", }];
  const handleClick = (index,value) => {
    setCreditScore(value)
    setbtnActiveIndex(index);
  };
  console.log(creditScore,"c")
  const user1 = JSON.parse(localStorage.getItem("user"));
  const user = user1;

  // GET PRE APPROVAL FUNCTION ->

  const handleGetapproved = async () => {
    setLoading(true);
    try {
      const payload = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": user.token,
        },
        body: JSON.stringify({
          userId: user._id,
          gaHouseholdIncome,
          totalAssetBalance,
          totalMonthlyDebtPayments,
          creditScore,
        }),
      };
      fetch(`${BASE_URL}/api/preApprovedTool/getPreApproved`, payload)
        .then((d) => d.json())
        .then((response) => {
          if(response.statusCode==200){
            console.log(response);
            alert("Alert", response?.message || "success!");
            navigate("/get-mypreapprove");
          }
          
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
      alert("Alert", error.message);
    } finally {
      setLoading(false);
    }
  };
 
  return (
    <>
      <div className='body-mobile-info get-preapproved-info'>
        <form>
          <div className='signup-form-info'>
            <div className='mb-30px'>
              <h3>
                Use our pre-approval tool below to see the financial impact
                HomeWyse provides.
              </h3>
              <p>Pending Document Verification*</p>
            </div>
            <div className='form-group'>
              <label>Gross Annual Household Income</label>
              <input
                className='form-control'
                name='text'
                type='text'
                placeholder='$'
                value={gaHouseholdIncome}
                onChange={(e) => setGaHouseholdIncome(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Total Asset Balances</label>
              <input
                className='form-control'
                name='text'
                type='text'
                placeholder='$'
                value={totalAssetBalance}
                onChange={(e) => setTotalAssetBalance(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Total Monthly Debt Payments</label>
              <input
                className='form-control'
                name='text'
                type='text'
                placeholder='$'
                value={totalMonthlyDebtPayments}
                onChange={(e) => setTotalMonthlyDebtPayments(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Credit Score</label>
              <div className='credit-score-btns'>
                {BUTTONS.map((btn, index) => {
                  return (
                    <button
                    type="button"
                      className={index === btnActiveIndex ? "active" : ""}
                      onClick={() => {
                        handleClick(index,btn.value);
                      }}
                    >
                      {` ${btn.value}`}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='bottom-btn-info'>
            <div className='btn-links text-align-center mb-3'>
              <Link className='clr-929FBE' to='/login'>
                Skip Pre-approval
              </Link>
            </div>
            <div className='bg-blue-clr'>
              <button type='button' onClick={handleGetapproved} className='btn-cstm'>
                Get My Pre-approval
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Getpreapprove;
