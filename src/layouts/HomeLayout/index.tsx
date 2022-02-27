import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import SearchComp from "@/components/SearchComp";
import Friend from "@/components/Friend";
import styles from "./index.module.less";
import { FriendObjectProps } from "@/interface";
const friendList: FriendObjectProps[] = [
  {
    id: 1,
    name: "欧文",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "凯里·欧文（Kyrie Irving），全名凯里·安德鲁·欧文（Kyrie Andrew Irving），1992年3月23日出生于澳大利亚墨尔本，拥有美国/澳大利亚双重国籍，美国职业篮球运动员，司职控球后卫，效力于NBA布鲁克林篮网队。",
  },
  {
    id: 2,
    name: "詹姆斯",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "勒布朗·詹姆斯（LeBron James），全名勒布朗·雷蒙·詹姆斯（LeBron Raymone James），1984年12月30日出生于美国俄亥俄州阿克伦，美国职业篮球运动员，司职小前锋，绰号“国王詹姆斯（King James）”，效力于NBA洛杉矶湖人队。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
  {
    id: 3,
    name: "林俊杰",
    head_url:
      "https://avatars.githubusercontent.com/u/65010677?v=4",
    desc: "林俊杰（JJ Lin），1981年3月27日出生于新加坡，祖籍中国福建省厦门市同安区，华语流行乐男歌手、音乐人、潮牌主理人。",
  },
];
const HomeLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <header>
          <SearchComp />
        </header>
        <section>
          <div className={styles.tabs}>
            <div className={styles.tab}>全部</div>
            <div className={styles.tab}> 在线</div>
            <div className={styles.tab}>不在线</div>
          </div>
          {friendList.map((friend) => (
            <Friend key={friend.id} data={friend} />
          ))}
        </section>
      </div>
      <div className={styles.content}>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeLayout;
