import axios from "axios";

const base_URL = "https://backend.connectinskillz.com/api";

export const fetchUserDetails = async (email) => {
    let result
  await axios
    .get(`${base_URL}/fetch_user_details/${email}`)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        result = response.data
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
        Navigate("/Dashboard");
      }
    })
    .catch((err) => {
      if (err.response.data.message) {
        console.log(err.response.data.message);
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
        navigate("/Dashboard");
      }
    })
    .catch((err) => {
      if (err.response.data.message) {
        console.log(err.response);
      }
    });
};

export const forgotPassword = async (email) => {
    const data = {email}
    await axios
      .post(`${base_URL}/forgot-password`, data)
      .then((response) => {
        console.log(response);        
      })
      .catch((err) => {
        if (err.response.data.message) {
          console.log(err.response);
        }
      });
  };