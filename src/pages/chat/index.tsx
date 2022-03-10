/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:51:36
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-10 22:02:45
 */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FriendObjectProps, ChatRecordObjectProps } from "@/interface";
import ChatRecord from "@/components/ChatRecord";
import BreadCrumbs from "@/components/BreadCrumbs";
import styles from "./index.module.less";


const chatRecordList: ChatRecordObjectProps[] = [
  {
    id: 1,
    nickname: "欧文",
    isme: false,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 2,
    nickname: "欧文",
    isme: true,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 3,
    nickname: "欧文",
    isme: false,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 4,
    nickname: "欧文",
    isme: false,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 5,
    nickname: "欧文",
    isme: true,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 6,
    nickname: "欧文",
    isme: false,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 7,
    nickname: "欧文",
    isme: false,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 8,
    nickname: "欧文",
    isme: true,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 9,
    nickname: "欧文",
    isme: true,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 10,
    nickname: "欧文",
    isme: true,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
  {
    id: 11,
    nickname: "欧文",
    isme: true,
    head_url: "https://avatars.githubusercontent.com/u/65010677?v=4",
    content: "我喜欢你!",
    sendTime: "2022-02-26 00:25:00",
  },
];
const Chat = () => {
  let { id, name } = useParams();

  useEffect(() => {

  }, [id]);
  return (
    <div className={styles.chat}>
      <BreadCrumbs title={name||''} />
      <div className={styles.chatarea}>
        {chatRecordList.map((record) => (
          <ChatRecord data={record} key={record.id} />
        ))}
        {chatRecordList.length === 0 && <div>暂无聊天</div>}
      </div>
      <div className={styles.sendMsgArea}>
        <textarea
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              console.log(e.key);
            }
          }}
          placeholder="Enter发送，Shift+Enter换行"
        ></textarea>
      </div>
    </div>
  );
};

export default Chat;
