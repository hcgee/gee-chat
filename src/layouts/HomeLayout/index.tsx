import React, { useEffect, useContext, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "@/utils";
import default_image from "@/assets/head.jpg";
import Contact from "@/components/Contact";
import Chat from "@/components/Chat";
import styles from "./index.module.less";

const HomeLayout = () => {
  const navigate = useNavigate();
  const logout = () => {
    setLocalStorage("token", "");
    navigate("/login");
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <button
          onClick={() => {
            logout();
          }}
        >
          logout
        </button>
      </header>
      <div className={styles.content}>
        <div className={styles.contact}>
          <input type="text" placeholder="搜索联系人" />
          <Contact />
          <Contact />
          <Contact />
          <Contact />
        </div>
        <div className={styles.chat}>
          <div className={styles.chatMessage}>
            <Chat isme />
            <Chat />
            <Chat isme />
            <Chat />
            <Chat isme />
            <Chat />
            <Chat isme />
            <Chat />
            <Chat />
            <Chat isme />
            <Chat />
            <Chat />
          </div>
          <div className={styles.chatBottom}>
            <textarea></textarea>
            <button>发送</button>
          </div>
        </div>
        <div className={styles.online}>online</div>
      </div>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
