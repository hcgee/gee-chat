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
