
import { useState, useEffect } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-[100px] h-9 bg-gray-200 dark:bg-gray-800 rounded-md animate-pulse" />;
  }

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(value) => {
        if (value) setTheme(value);
      }}
      className="bg-gray-100 dark:bg-gray-800 rounded-md p-1"
    >
      <ToggleGroupItem 
        value="light" 
        aria-label="Light mode"
        className={`${theme === 'light' ? 'bg-white dark:bg-gray-700' : ''} rounded-md`}
      >
        <Sun size={18} />
      </ToggleGroupItem>
      
      <ToggleGroupItem 
        value="dark" 
        aria-label="Dark mode"
        className={`${theme === 'dark' ? 'bg-white dark:bg-gray-700' : ''} rounded-md`}
      >
        <Moon size={18} />
      </ToggleGroupItem>
      
      <ToggleGroupItem 
        value="system" 
        aria-label="System mode"
        className={`${theme === 'system' ? 'bg-white dark:bg-gray-700' : ''} rounded-md`}
      >
        <Monitor size={18} />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default ThemeToggle;
