/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:52:05
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-15 21:23:41
 */
import React, { useState } from "react";
import Modal from "../Modal";
import styles from "./index.module.less";
interface Props {
  condition: string;
  onChange: (value: string) => void;
}
const SearchComp: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false);
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
      <img
        onClick={() => {
          setVisible(true);
        }}
        className={styles["menu-icon"]}
        src=""
        alt=""
      />
      <Modal
        title="添加好友"
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
        onOk={() => {
          setVisible(false);
        }}
      >
        <div>添加好友</div>
      </Modal>
    </div>
  );
};

export default SearchComp;
