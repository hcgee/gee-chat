import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import SearchComp from "@/components/SearchComp";
import styles from "./index.module.less";

const HomeLayout = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <header>
          <SearchComp />
        </header>
        <section>
          <div className={styles.navigation}>navigation</div>
        </section>
      </div>
      <div className={styles.content}>content</div>
    </div>
  );
};

export default HomeLayout;
