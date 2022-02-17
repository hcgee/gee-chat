import React, { useEffect, useContext, useState } from "react";
import default_image from "@/assets/head.jpg";
import styles from "./index.module.less";

interface ChatProps {
  isme?: boolean;
}

const Chat: React.FC<ChatProps> = (props) => {
  return (
    <div
      style={props.isme ? { alignSelf: "flex-end" } : {}}
      className={styles.message}
    >
      <img src={default_image} alt="" />
      <p className={styles.message}>很高兴认识你！</p>
    </div>
  );
};

export default Chat;
