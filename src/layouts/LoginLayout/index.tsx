import React, { useEffect, useState } from "react";
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

      fetch("/user/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
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
