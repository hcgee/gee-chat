/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:51:36 
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-10 21:25:06
 */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FriendObjectProps, ChatRecordObjectProps } from "@/interface";
import ChatRecord from "@/components/ChatRecord";
import BreadCrumbs from "@/components/BreadCrumbs";
import styles from "./index.module.less";
const friendList: FriendObjectProps[] = [
  {
    user_id: 1,
    nickname: "欧文",
    head: "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "凯里·欧文（Kyrie Irving），全名凯里·安德鲁·欧文（Kyrie Andrew Irving），1992年3月23日出生于澳大利亚墨尔本，拥有美国/澳大利亚双重国籍，美国职业篮球运动员，司职控球后卫，效力于NBA布鲁克林篮网队。",
  },
  {
    user_id: 2,
    nickname: "詹姆斯",
    head: "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "勒布朗·詹姆斯（LeBron James），全名勒布朗·雷蒙·詹姆斯（LeBron Raymone James），1984年12月30日出生于美国俄亥俄州阿克伦，美国职业篮球运动员，司职小前锋，绰号“国王詹姆斯（King James）”，效力于NBA洛杉矶湖人队。",
  },
  {
    user_id: 3,
    nickname: "林俊杰",
    head: "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
];

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
  let { id } = useParams();
  const [data, setData] = useState<FriendObjectProps>({
    user_id: -1,
    nickname: "",
    head: "",
    desc: "",
  });
  useEffect(() => {
    const data = friendList.find((friend) => friend.user_id == id);
    setData(data);
  }, [id]);
  return (
    <div className={styles.chat}>
      <BreadCrumbs title={data.nickname} />
      <div className={styles.chatarea}>
        {chatRecordList.map((record) => (
          <ChatRecord data={record} key={record.id} />
        ))}
      </div>
      <div className={styles.sendMsgArea}>
        <textarea onKeyDown={(e)=> {
          if(e.key==='Enter'){
            e.preventDefault()
            console.log(e.key);
          }
        }} placeholder="Enter发送，Shift+Enter换行"></textarea>
      </div>
    </div>
  );
};

export default Chat;
