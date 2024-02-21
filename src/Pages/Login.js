import React, { useEffect, useRef, useState } from "react";
import Inputs from "../Resources/Inputs";
import { GoEye, GoEyeClosed } from "react-icons/go";
import "./Reg.css";
import { IconContext } from "react-icons";
import logo from "../Assets/connectskillz 13.svg";
import Button from "../Resources/Buttons";
import Loader from "../Loader/Loader";
import { userLogin } from "../Requests/axiosRequest";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const MAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const Login = () => {
  // useref to track to add focus to the email field
  const mailRef = useRef();
  const [loading, setLoading] = useState(false);
  const [changing, setChanging] = useState(false);
  const [validation, setvalidation] = useState(false);
  // const [error, setError] = useState("")

  const [show, setShow] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setLoginInfo({ ...loginInfo, [name]: value });
    setChanging(!changing);
  };

  const view = () => {
    setShow(!show);
  };

  const navigate = useNavigate();

  useEffect(() => {
    mailRef.current.focus();
  }, []);

  useEffect(() => {
    if (MAIL_REGEX.test(loginInfo["email"]) && loginInfo["password"]) {
      setvalidation(true);
      console.log("true email");
    }
    else{
      setvalidation(false)
    }
  }, [changing]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginInfo);
    if (validation) {
      setLoading(true);
      await userLogin(loginInfo, navigate);
      setLoading(false);
    }
  };

  return (
    <div className="Login">
      <div className="cent">
        <img src={logo} alt="logo" />
      </div>
      <div className="Login-body">
        <div className="Login-head">
          <h1> Login to your Dashboard</h1>
          <p>welcome we've been expecting you</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Inputs
            classed="in-put"
            type="email"
            placeholder="Email Address"
            name="email"
            inputvalue={loginInfo["email"]}
            handlechange={handleChange}
            inputRef={mailRef}
          />

          <div className="pass">
            <Inputs
              classed="in-put"
              type={show ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={loginInfo["password"]}
              handlechange={handleChange}
            />

            <IconContext.Provider value={{ size: "20px", color: "#004aad" }}>
              <div onClick={view} className="viewer">
                {show ? <GoEyeClosed /> : <GoEye />}
              </div>
            </IconContext.Provider>
          </div>
          <div className="forg">
            <p className="forgot">
              <Link to="/recovery">Forgot your Password?</Link>
            </p>
          </div>
          <Button
            name={loading ? <Loader /> : "Login"}
            id={validation ? "enable" : "disable"}
            classed="btn"
          />
        </form>
        <div className="registered">
          <p>New here?</p>
          <Link to="/">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
