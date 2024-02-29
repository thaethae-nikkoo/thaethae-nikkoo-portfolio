import { createContext, useReducer } from "react";
const ThemeContext = createContext();

let ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, { theme: "dark" });

  const isDark = state.theme === "dark";

  const changeTheme = (isDarkMode) => {
    let theme = "";
    if (isDarkMode === true) {
      theme = "light";
    } else {
      theme = "dark";
    }
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
