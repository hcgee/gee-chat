import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const Chat = () => {
  let { id } = useParams();

  return <div>我的id为：{id}</div>;
};

export default Chat;
