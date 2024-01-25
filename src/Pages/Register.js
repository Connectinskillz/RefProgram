import React, { useState, useEffect, useContext } from "react";
import Inputs from "../Resources/Inputs";
import Button from "../Resources/Buttons";
import { GoEye, GoEyeClosed } from "react-icons/go";
import "./Reg.css";
import { IconContext } from "react-icons";
import logo from "../Assets/connectskillz 13.svg";
import { Link, Navigate } from "react-router-dom";
import { countries } from "countries-list";
import { refferalRegister } from "../Requests/axiosRequest";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const base_URL = "https://backend.connectinskillz.com/api/referral_pg_reg";

const Register = () => {
  const MAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [changing, setChanging] = useState(false);
  const [country, setCountry] = useState("");
  const Navigate = useNavigate();
  // to view password
  const [check, setCheck] = useState(false);
  // state management for input fields
  const [readInput, setReadInput] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    let options = [];
    // Transform the countries object into an array of options
    Object.values(countries).map((countryCode) => {
      options.push({
        country: countryCode.name,
      });
    });

    setCountryOptions(options);
  }, []);

  const viewer = (e) => {
    setCheck(!check);
  };

  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    setReadInput({ ...readInput, [name]: value });
    setChanging(!changing);
  };
  // submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (valid) {
      setLoading(true);
      await refferalRegister(readInput, Navigate);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      readInput["name"] &&
      readInput["phone_number"] &&
      validEmail &&
      readInput["password"].length >= 8 &&
      readInput["password"] === readInput["confirmpassword"] &&
      country.length > 0 &&
      country !== "Select your country"
    ) {
      setValid(true);
      console.log("valid");
    } else {
      setValid(false);
    }

    if (MAIL_REGEX.test(readInput["email"])) {
      setValidEmail(true);
      console.log("true email");
    }
  }, [changing]);

  return (
    <div className="register">
      <div className="cent">
        <img src={logo} alt="logo" />
      </div>

      <div className="Reg-body">
        <div className="Reg-head">
          <h1>Registeration</h1>
          <p>Register to be part of the referral program.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <Inputs
            classed="in-put"
            type="text"
            placeholder="Full Name "
            name="name"
            inputvalue={readInput["name"]}
            handlechange={handleChange}
          />

          <Inputs
            classed="in-put"
            type="email"
            placeholder="Email Address"
            name="email"
            inputvalue={readInput["email"]}
            handlechange={handleChange}
          />

          <select className="in-put" id="select" onChange={(e)=>{
            setCountry(e.target.value)
            setChanging(!changing)
          }}>
            <option> Select your country</option>
            {countryOptions.map((item) => {
              return <option>{item.country}</option>;
            })}
          </select>

          <Inputs
            classed="in-put"
            type="number"
            placeholder="Phone Number"
            name="phone_number"
            inputvalue={readInput["phone_number"]}
            handlechange={handleChange}
          />

          <Inputs
            classed="in-put"
            type={check ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value={readInput["password"]}
            handlechange={handleChange}
          />

          <Inputs
            classed="in-put"
            type={check ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmpassword"
            value={readInput["confirmpassword"]}
            handlechange={handleChange}
          />

          <IconContext.Provider value={{ size: "15px", color: "#004aad" }}>
            <div onClick={viewer} className="viewer">
              {check ? (
                <div className="show">
                  <GoEyeClosed />
                  <p>Hide Password</p>
                </div>
              ) : (
                <div className="show">
                  <GoEye />
                  <p>Show Password</p>
                </div>
              )}
            </div>
          </IconContext.Provider>

          <Button name={loading ? <Loader /> : "Register"} />
        </form>

        <div className="registered">
          <p>Already Registered?</p>
          <Link to="./Login">signin</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
