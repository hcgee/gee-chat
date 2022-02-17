import React, { useEffect, useContext, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { ThemeContext, themes } from "@/context/theme";
import styles from "./index.module.less";

const HomeLayout = () => {
  const navigate = useNavigate();
  const token = getLocalStorage("token");
  const [themeStyle, setThemeStyle] = useState(useContext(ThemeContext));
  const [theme, setTheme] = useState<any>(themes.light);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  const logout = () => {
    setLocalStorage("token", "");
    navigate("/login");
  };
  return (
    <div style={theme} className={styles["home-wrapper"]}>
      <header>
        <p>{`Welcome, ${token}！`}</p>
        <p>
          <button
            onClick={() => {
              logout();
            }}
          >
            logout
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              setTheme(theme === themes.dark ? themes.light : themes.dark);
            }}
          >
            点击切换主题
          </button>
        </p>
      </header>
      <Outlet />
    </div>
  );
};

export default HomeLayout;
