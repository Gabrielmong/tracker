import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Content, Sidebar, Topbar } from 'components';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, darkTheme } from 'theme';

function App() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = window.innerWidth < 600;

  const theme = useMemo(() => {
    return currentTheme === 'light' ? lightTheme : darkTheme;
  }, [currentTheme]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setCurrentTheme(theme as 'dark' | 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/">
        <Topbar toggleSidebar={toggleSidebar} />

        <Sidebar sidebarOpen={sidebarOpen} />

        <Content sidebarOpen={sidebarOpen} currentTheme={currentTheme} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
