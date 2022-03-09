/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:51:45 
 * @Last Modified by:   huhanchi 
 * @Last Modified time: 2022-03-09 22:51:45 
 */
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "@/assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { setLocalStorage } from "@/utils";
import styles from "./index.module.less";

const LoginLayout = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("white");
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("请输入用户名");
    }
    if (!password) {
      alert("请输入密码");
    }
    if (!nickname && !isLogin) {
      alert("请输入昵称");
    }
    if (isLogin) {
      const data = { username, password };
      axios.post("/api/user/login", data).then((res) => {
        console.log(res);
      });
    } else {
      const data = { username, password, nickname };
      axios.post("/api/user/register", data).then((res) => {
        if (res.data.code === 200) {
          alert("注册成功");
        } else {
          alert(res.data.msg);
        }
      });
    }
  };

  return (
    <div className={styles.app}>
      <form
        onSubmit={(e) => onSubmit(e)}
        className={styles[isLogin ? "rotate360" : ""]}
      >
        <h1>{isLogin ? "LOGIN" : "REGISTER"}</h1>
        <input
          className={styles.usernameIpt}
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {!isLogin && (
          <input
            className={styles.nicknameIpt}
            type="text"
            placeholder="Enter your nickname"
            onChange={(e) => setNickname(e.target.value)}
          />
        )}
        <input
          className={styles.pwdIpt}
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className={styles.loginBtn}>
          <button disabled={!username} type="submit">
            LOGIN
          </button>
        </p>
        {isLogin ? (
          <p>
            If you don`t have account. Please Click here to{" "}
            <a
              onClick={() => {
                setIsLogin(false);
                setUsername("");
                setPassword("");
                setNickname("");
              }}
            >
              Sign Up
            </a>
          </p>
        ) : (
          <p>
            Have a account? Please Click here to{" "}
            <a
              onClick={() => {
                setIsLogin(true);
                setUsername("");
                setPassword("");
                setNickname("");
              }}
            >
              Login
            </a>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginLayout;
