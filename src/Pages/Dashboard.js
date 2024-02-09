import React, { useEffect, useState } from "react";
import Refinfo from "../Popup/Refinfo";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Payref from "../components/Payref";
import RefCode from "../components/RefCode";
import { useNavigate } from "react-router-dom";
import { fetchUserDetails } from "../Requests/axiosRequest";
import "./dash.css";

const Dashboard = () => {
  // State to manage User's fetched data  
  const [userDetails, setUserDetails] = useState([]);  

  const [cancel, setCancel] = useState(false);  

  const navigate = useNavigate();

  const closePopup = () => {
    setCancel(!cancel);
  };

  const handleResponse = async (email) => {
    const response = await fetchUserDetails(email);
    console.log(response);
    setUserDetails(response.data.user);    
  };

  const fetchFromLS = (user) => {
    try {
      const data = localStorage.getItem(user);
      if (data !== null) {
        handleResponse(data);
      } else navigate("/Login");
    } catch (error) {
      navigate("/Login");
      console.error("Error fetching data from localStorage:", error);
      console.error("User must login or register");
    }
  };

  useEffect(() => {
    fetchFromLS("userEmail");
  }, []);

  return (
    <>
      <div className="Dashboard">
        <Header />
        <Banner onDisp={closePopup} userName={userDetails?.name} />
        <div className="infosec">
          <RefCode refcodes={userDetails?.referral_code} />
          <Payref
            userDetails={userDetails}
            refNo={userDetails?.total_referred_users}
          />
        </div>
        {cancel ? null : (
          <div className="overlay">
            <Refinfo
              onclick={closePopup}
              refCodes={userDetails?.referral_code}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
