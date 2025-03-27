import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded duration-300 transition transition-all"
    >
      {darkMode ? "🌞  " : "🌙 "}
    </button>
  );
}
