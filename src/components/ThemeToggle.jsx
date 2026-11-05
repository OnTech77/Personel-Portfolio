import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark theme' : 'Switch to light theme'}
      title={isLight ? 'Dark theme' : 'Light theme'}
    >
      <span className="theme-icon" key={theme}>
        {isLight ? <Moon size={18} /> : <Sun size={18} />}
      </span>
    </button>
  );
}
