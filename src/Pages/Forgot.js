import React, { useState, useEffect } from "react";
import Inputs from "../Resources/Inputs";
import { GoEye, GoEyeClosed } from "react-icons/go";
import "./Reg.css";
import Loader from "../Loader/Loader";
import { resetPassword } from "../Requests/axiosRequest";
import Button from "../Resources/Buttons";
import logo from "../Assets/connectskillz 13.svg";

const Forgot = () => {
  const [showed, setShowed] = useState(false);
  const [changing, setChanging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [updatePass, setUpdatepass] = useState({
    email: "ridwanfola@gmail.com",
    token: "",
    password: "",
    password_confirmation: "",
  });

  const handlePass = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    setUpdatepass({ ...updatePass, [name]: value });
    setChanging(!changing);
  };

  const fetchFromLS = (user) => {
    const data = localStorage.getItem(user);
    console.log("works");
    if (data !== null) {
      setUpdatepass({ ...updatePass, email: data });
      console.log("data");
    }
  };

  const getResetToken = () => {
    const currentPath = window.location.pathname;
    const parts = currentPath.split("/"); // Split the URL by "/"
    const token = parts[2];
    console.log(token)
    setUpdatepass({ ...updatePass, token: token });
  };

  useEffect(() => {
    getResetToken();
  }, []);

  useEffect(() => {
    if (
      updatePass["password"].length > 0 &&
      updatePass["password_confirmation"].length > 0 &&
      updatePass["password"] === updatePass["password_confirmation"]
    ) {
      setValid(true);
      console.log("matched");
    } else {
      setValid(false);
    }
  }, [changing]);

  const handleShow = (e) => {
    setShowed(!showed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(updatePass);
    if (valid) {
      fetchFromLS("userEmail");
      setLoading(true);
      await resetPassword(updatePass);
      // setUpdatepass({
      //   email: "",
      //   token: "",
      //   password: "",
      //   password_confirmation: "",
      // });
      setLoading(false);
    }
  };

  return (
    <div className="fg-page">
      <div className="cent">
        <img src={logo} alt="logo" />
      </div>
      <div className="forgot-body">
        <div className="fg-heading">
          <h1>Reset your Password?</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <Inputs
            classed="in-put"
            type={showed ? "text" : "password"}
            placeholder="Enter New Password"
            name="password"
            value={updatePass["password"]}
            handlechange={handlePass}
          />

          <Inputs
            classed="in-put"
            type={showed ? "text" : "password"}
            placeholder="Confirm Password"
            name="password_confirmation"
            value={updatePass["password_confirmation"]}
            handlechange={handlePass}
          />

          <div onClick={handleShow} className="viewer">
            {showed ? (
              <div className="disp-p">
                <GoEyeClosed />
                <p>hide password</p>
              </div>
            ) : (
              <div className="disp-p">
                <GoEye />
                <p>show password</p>
              </div>
            )}
          </div>
          <Button
            name={loading ? <Loader /> : "Reset"}
            id={valid ? "enable" : "disable"}
            classed="btn"
          />
          {/* <Button name={loading ? <Loader /> : "Reset"} classed="btn-01" /> */}
        </form>
      </div>
    </div>
  );
};

export default Forgot;
