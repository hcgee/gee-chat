/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:52:13
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-15 21:15:45
 */
import React from "react";
import { useNavigate } from "react-router-dom";
import { FriendObjectProps } from "@/interface";
import styles from "./index.module.less";

interface FriendDataProps {
  data: FriendObjectProps;
}
const Friend: React.FC<FriendDataProps> = (props) => {
  const navigate = useNavigate();
  const { data } = props;

  const gotoFriendChat = (id: number | string, name: string) => {
    navigate(`/chat/${id}/${name}`);
  };
  return (
    <div
      onClick={() => gotoFriendChat(data.user_id, data.nickname)}
      className={styles.friend}
    >
      <div className={styles.friendLeft}>
        <img
          className={styles.headicon}
          style={data.status === 1 ? {} : { filter: "grayscale(100%)" }}
          src={data.head}
          alt=""
        />
        <div
          style={{ backgroundColor: data.status === 1 ? "#3fe73f" : "gray" }}
          className={styles.statustag}
        ></div>
      </div>
      <div className={styles.friendRight}>
        <div className={styles.friendName}>{data.nickname}</div>
        <div className={styles.friendDesc}>{data.desc}</div>
      </div>
    </div>
  );
};

export default Friend;
