/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:51:52
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-10 21:52:53
 */
import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchComp from "@/components/SearchComp";
import { useNavigate } from "react-router-dom";
import Friend from "@/components/Friend";
import { FriendObjectProps } from "@/interface";
import { getLocalStorage, clearLocalStorage } from "@/utils";
import axios from "axios";
import styles from "./index.module.less";

type Param = {
  condition: string;
  status: number;
  pageSize: number;
  pageNo: number;
};
const HomeLayout = () => {
  const token = getLocalStorage("token");
  const username = getLocalStorage("username");
  const navigate = useNavigate();
  const [param, setParam] = useState<Param>({
    condition: "",
    status: 0,
    pageSize: 10,
    pageNo: 1,
  });
  const [list, setList] = useState<FriendObjectProps[]>([]);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      getList(param);
    }
  }, []);

  // 退出登录
  const logout = () => {
    axios
      .post(
        "/api/user/logout",
        { username },
        {
          headers: {
            token: token,
          },
        }
      )
      .then((res) => {
        if (res.data.code === 200) {
          clearLocalStorage();
          navigate("/login");
        } else {
          alert(res.data.msg);
        }
      });
  };

  // 获取好友列表
  const getList = (param: Param) => {
    axios
      .post("/api/user/getUser", param, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        if (res.data.code === 200) {
          setList(res.data.data);
        } else {
          alert(res.data.msg);
        }
      });
  };
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
          {list.map((friend) => (
            <Friend key={friend.user_id} data={friend} />
          ))}
        </section>
      </div>
      <div className={styles.content}>
        <div onClick={() => logout()} className={styles.logout}>
          <a>退出</a>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default HomeLayout;
