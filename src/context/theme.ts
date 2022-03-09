/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:51:59 
 * @Last Modified by:   huhanchi 
 * @Last Modified time: 2022-03-09 22:51:59 
 */
import React from "react";

export const themes = {
  light: {
    color: "#fff",
    backgroundColor: "#000",
  },
  dark: {
    color: "#000",
    backgoundColor: "#fff",
  },
};

export const ThemeContext = React.createContext(themes.light);
