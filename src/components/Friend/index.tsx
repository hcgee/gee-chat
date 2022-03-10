/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:52:13
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-10 22:01:56
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
      <img src={data.head} alt="" />
      <div className={styles.friendLeft}>
        <div className={styles.friendName}>{data.nickname}</div>
        <div className={styles.friendDesc}>{data.desc}</div>
      </div>
    </div>
  );
};

export default Friend;
