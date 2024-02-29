import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function useTheme() {
  let context = useContext(ThemeContext);

  if (context === undefined) {
    new Error("Theme context api error");
  }
  return context;
}
