import React from "react";
import { ChatRecordObjectProps } from "@/interface";
import styles from "./index.module.less";
type Item = {
  data: ChatRecordObjectProps;
};
const ChatRecord: React.FC<Item> = (props) => {
  const { data } = props;
  const chatStyle = {
    alignSelf: "self-end",
    flexDirection: "row-reverse",
  };

  return (
    <div style={data.isme ? chatStyle : {}} className={styles.chatcontent}>
      <img src={data.head_url} alt="" />
      <div
        style={data.isme ? { marginRight: "20px" } : {}}
        className={styles.right}
      >
        <div className={styles.content}>{data.content}</div>
        <div
          style={data.isme ? { textAlign: "right" } : {}}
          className={styles.time}
        >
          {data.sendTime}
        </div>
      </div>
    </div>
  );
};

export default ChatRecord;
