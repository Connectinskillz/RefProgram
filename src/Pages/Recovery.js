import React, { useEffect, useRef, useState } from "react";
import logo from "../Assets/connectskillz 13.svg";
import Inputs from "../Resources/Inputs";
import Button from "../Resources/Buttons";
import { forgotPassword } from "../Requests/axiosRequest";
import { IoIosMailUnread } from "react-icons/io";
import { IconContext } from "react-icons";

const Recovery = () => {
  const recoveryRef = useRef();
  const MAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const [email, setEmail] = useState("");
  const [prompt, setPrompt] = useState(false);
  const [changing, setChanging] = useState(false);
  const [valid, setValid] = useState(false);

  const handleEntry = (e) => {
    setEmail(e.target.value);
    setChanging(!changing);
  };

  const handleEmail = async (e) => {
    if (valid) {
      e.preventDefault();
      await forgotPassword(email);
      setEmail("");
      setPrompt(true);
    }
  };

  useEffect(() => {
    console.log(email);
    if (prompt) {
      setTimeout(() => {
        setPrompt(false);
      }, 4000);
    }
    if (email.length > 0 && MAIL_REGEX.test(email)) {
      console.log("valid");
      setValid(true);
    }
  }, [prompt, changing]);

  return (
    <div className="Recovery">
      <div className="cent">
        <img src={logo} alt="logo" />
      </div>

      <div className="rec-body">
        <div className="rec-head">
          <h1>Forgot your Password?</h1>
          <p>Don't worry you can reset your Password. Enter your email</p>
        </div>

        <form onSubmit={handleEmail}>
          <Inputs
            classed="in-put"
            type="email"
            placeholder="Email Address"
            name="email"
            inputvalue={email}
            handlechange={handleEntry}
            inputref={recoveryRef}
          />
          <div className="ct-btn">
            <Button name="submit" />
          </div>
        </form>
      </div>
      {prompt ? (
        <div className="prompt">
          <div className="ptp-body">
            <IconContext.Provider value={{ size: "30px", color: "#004aad" }}>
              <IoIosMailUnread />
            </IconContext.Provider>
            <h4>Email Sent</h4>
            <p>Link to reset your password has been sent to your email.</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Recovery;
