import { useCallback, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface Props {
  className?: string;
}

const ThemePicker = ({ className }: Props) => {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const handleThemeSwitcher = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#171717' : '#f5f5f5');
  }, [theme]);

  return (
    <button
      onClick={handleThemeSwitcher}
      className={
        'text-dim hover:text-dimmer hover:dark:text-dim dark:text-dimmer absolute right-6 top-6 text-3xl ' +
        className
      }
    >
      {theme === 'dark' && <FaSun />}
      {theme === 'light' && <FaMoon />}
    </button>
  );
};

export default ThemePicker;
