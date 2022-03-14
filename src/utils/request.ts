import axios from "axios";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate()

axios.interceptors.request.use((config) => {
  console.log(config);
  return config;
});

axios.interceptors.response.use((res) => {
  console.log(res);
  if (res.data.code === -1) {
    // navigate('/home')
  }
  return res;
});

export default axios;
