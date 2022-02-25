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

  const gotoFriendChat = (id: number | string) => {
    navigate(`/chat/${id}`);
  };
  return (
    <div onClick={() => gotoFriendChat(data.id)} className={styles.friend}>
      <img src={data.head_url} alt="" />
      <div className={styles.friendLeft}>
        <div className={styles.friendName}>{data.name}</div>
        <div className={styles.friendDesc}>{data.desc}</div>
      </div>
    </div>
  );
};

export default Friend;
