import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SearchComp from "@/components/SearchComp";
import styles from "./index.module.less";

const HomeLayout = () => {
  const navigate = useNavigate();
  const gotoFriendChat = (id: number | string) => {
    navigate(`/chat/${id}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <header>
          <SearchComp />
        </header>
        <section>
          <div className={styles.tabs}>
            <div className={styles.tab}>全部</div>
            <div className={styles.tab}> 在线</div>
            <div className={styles.tab}>不在线</div>
          </div>
          <div onClick={() => gotoFriendChat(3)} className={styles.friend}>
            <img
              src="https://avatars.githubusercontent.com/u/65010677?v=4"
              alt=""
            />
            <div className={styles.friendLeft}>
              <div className={styles.friendName}>欧文</div>
              <div className={styles.friendDesc}>大家好，我是欧文！</div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
