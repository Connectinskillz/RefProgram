import axios from "axios";
import { notify, notifyError } from "./toastify";

const base_URL = "https://backend.connectinskillz.com/api";

const setConfig = (accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };

  return config;
};

export const fetchUserDetails = async (email) => {
  let result;
  let token = localStorage.getItem("token");
  await axios
    .get(`${base_URL}/fetch_user_details/${email}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        result = response.data;
      }
    })
    .catch((err) => {
      if (err.response.data.message) {
        console.log(err.response.data.message);
      }
    });
  return result;
};

export const refferalRegister = async (readInput, Navigate) => {
  await axios
    .post(`${base_URL}/referral_pg_reg`, readInput)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("userEmail", readInput.email);
        localStorage.setItem("token", response.data.api_token);
        Navigate("/Dashboard");
      }
    })
    .catch((err) => {
      if (err) {
        notifyError(err.response.data.message);
        console.log(err);
      }
    });
};

export const userLogin = async (loginInfo, navigate) => {
  await axios
    .post(`${base_URL}/login`, loginInfo)
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("userEmail", loginInfo.email);
        localStorage.setItem("token", response.data.api_token);
        navigate("/Dashboard");
      }
    })
    .catch((err) => {
      if (err) {
        notifyError(err.response.data.message);
        console.log(err);
      }
    });
};

export const forgotPassword = async (email) => {
  const data = { email };
  await axios
    .post(`${base_URL}/forgot-password`, data)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      if (err) {
        notifyError(err.message);
        console.log(err);
      }
    });
};

export const resetPassword = async (updatePass) => {
  await axios
    .post(`${base_URL}/password/reset-password`, updatePass)
    .then((response) => {
      console.log(response);
      window.location.pathname = "/login";
    })
    .catch((err) => {
      if (err.message) {
        console.log(err);
      }
    });
};
