import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "@/utils";
import styles from "./index.module.less";

const LoginLayout = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("white");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Login = () => {
    setLocalStorage("token", username);
    if (!username) {
      alert("请输入用户名");
    }
    if (!password) {
      alert("请输入密码");
    }
    if (username && password) {
      const data = { username, password };
      axios.post('/api/user/login',data).then(res=> {
        console.log(res);
        
      })
      
    }
  };

  return (
    <div className={styles.app}>
      <header className={styles["app-header"]}>
        <input
          className={styles.usernameIpt}
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className={styles.pwdIpt}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>
          <button disabled={!username} type="button" onClick={() => Login()}>
            GO
          </button>
        </p>
      </header>
    </div>
  );
};

export default LoginLayout;
