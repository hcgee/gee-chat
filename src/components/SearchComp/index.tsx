/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:52:05 
 * @Last Modified by:   huhanchi 
 * @Last Modified time: 2022-03-09 22:52:05 
 */
import React from "react";
import styles from "./index.module.less";

const SearchComp = () => {
  return (
    <div className={styles["search-wrapper"]}>
      <div className={styles["search-input"]}>
        <input type="text" name="" id="" />
        <img className={styles["search-icon"]} src="" alt="" />
        <img className={styles["close-icon"]} src="" alt="" />
      </div>
      <img className={styles["menu-icon"]} src="" alt="" />
    </div>
  );
};

export default SearchComp;
