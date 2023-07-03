import { AnimatePresence } from 'framer-motion';
import { Router } from 'router';

export const AnimatedRoutes = ({
  currentTheme,
  toggleTheme,
}: {
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
}) => {
  return (
    <AnimatePresence>
      <Router currentTheme={currentTheme} toggleTheme={toggleTheme} />
    </AnimatePresence>
  );
};
