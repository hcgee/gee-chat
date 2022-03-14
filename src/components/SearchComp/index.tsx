/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:52:05
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-14 22:47:01
 */
import React, { useState } from "react";
import styles from "./index.module.less";
interface Props {
  condition: string;
  onChange: (value: string) => void;
}
const SearchComp: React.FC<Props> = (props) => {
  return (
    <div className={styles["search-wrapper"]}>
      <div className={styles["search-input"]}>
        <input
          type="text"
          value={props.condition}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <img className={styles["search-icon"]} src="" alt="" />
        <img className={styles["close-icon"]} src="" alt="" />
      </div>
      <img className={styles["menu-icon"]} src="" alt="" />
    </div>
  );
};

export default SearchComp;
