import axios from "axios";

let baseURL = "http://localhost:5000/wallet/";

export const postData = async (data) => {
  try {
    let reposnse = axios.post(baseURL, data);

    console.log(reposnse);
  } catch (error) {
    console.log(error);
  }
};
