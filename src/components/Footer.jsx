import useTheme from "../hooks/useTheme";

export default function Footer() {
  let { isDark } = useTheme();
  return (
    <div className={`py-3 ${isDark ? "bg-dbg" : "bg-bg"}`}>
      <p
        className={`footer text-center ${
          isDark ? "text-dprimary" : "text-lprimary"
        }`}
      >
        Copyright &copy; ThaeNandarSoe@Nikkoo | All rights reserved.
      </p>
    </div>
  );
}
