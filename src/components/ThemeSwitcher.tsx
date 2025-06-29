// src/components/ThemeSwitcher.tsx
import { useTheme } from '../constants/ThemeContext';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-light-darker dark:bg-dark-lighter p-1 transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className={`w-4 h-4 rounded-full ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-primary to-accent' 
            : 'bg-gradient-to-r from-primary-light to-accent'
        }`}
        initial={false}
        animate={{ 
          x: theme === 'light' ? 0 : 24,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
      
      {/* Sun and Moon Icons */}
      <motion.div
        className="absolute top-1/2 left-1 -translate-y-1/2 text-dark-darker dark:text-light-darker"
        initial={false}
        animate={{ opacity: theme === 'light' ? 1 : 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-1 -translate-y-1/2 text-dark-darker dark:text-light-darker"
        initial={false}
        animate={{ opacity: theme === 'dark' ? 1 : 0 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default ThemeSwitcher;