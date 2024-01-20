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
  const [name, setName] = useState("");
  const [refCodes, setRefCodes] = useState("");
  const [refNo, setRefNo] = useState("");
  // const [email, setEmail] = useState("");

  const [cancel, setCancel] = useState(false);
  // const [ref, setRef] = useState()

  const navigate = useNavigate();

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

  const closePopup = () => {
    setCancel(!cancel);
  };

  const handleResponse = async (email) => {
    const response = await fetchUserDetails(email);
    console.log(response);
    setName(response.data.user["name"]);
    setRefCodes(response.data.user["referral_code"]);
    setRefNo(response.data["total_referred_users"]);
  };

  useEffect(() => {
    fetchFromLS("userEmail");
  }, []);

  return (
    <>
      <div className="Dashboard">
        <Header />
        <Banner onDisp={closePopup} userName={name} />
        <div className="infosec">
          <RefCode refcodes={refCodes} />
          <Payref refNo={refNo} />
        </div>
        {cancel ? null : (
          <div className="overlay">
            <Refinfo onclick={closePopup} refCodes={refCodes}/>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
