/*
 * @Author: huhanchi
 * @Date: 2022-03-09 22:51:52
 * @Last Modified by: huhanchi
 * @Last Modified time: 2022-03-15 21:25:09
 */
import React, { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SearchComp from "@/components/SearchComp";
import { useNavigate } from "react-router-dom";
import Friend from "@/components/Friend";
import { FriendObjectProps } from "@/interface";
import { getLocalStorage, clearLocalStorage } from "@/utils";
// import axios from "axios";
import axios from "@/utils/request";
import styles from "./index.module.less";

const tabs = [
  {
    key: -1,
    value: "全部",
  },
  {
    key: 1,
    value: "在线",
  },
  {
    key: 0,
    value: "不在线",
  },
];

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
    status: -1,
    pageSize: 10,
    pageNo: 1,
  });
  const [activeKey, setActiveKey] = useState(-1); // tabs active key
  const [list, setList] = useState<FriendObjectProps[]>([]);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      getList(param);
    }
  }, [param]);

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
          clearLocalStorage()
          navigate("/login");
        }
      });
  };

  // 输入搜索条件事件
  const conditionChange = (value: string) => {
    setParam((param) => {
      return {
        ...param,
        condition: value,
      };
    });
  };

  // 切换tab
  const tabOnChange = async (key: number) => {
    const params = {
      ...param,
      status: key,
    };
    setParam(params);
    setActiveKey(key);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <header>
          <SearchComp
            condition={param.condition}
            onChange={(value) => conditionChange(value)}
          />
        </header>
        <section>
          <div className={styles.tabs}>
            {tabs.map((tab) => (
              <div
                onClick={() => tabOnChange(tab.key)}
                style={
                  activeKey === tab.key
                    ? { color: "#fff", backgroundColor: "#0170fe" }
                    : {}
                }
                key={tab.key}
                className={styles.tab}
              >
                {tab.value}
              </div>
            ))}
          </div>
          {list.length > 0 &&
            list.map((friend) => <Friend key={friend.user_id} data={friend} />)}
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
