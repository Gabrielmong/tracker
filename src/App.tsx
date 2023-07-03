import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Content, Sidebar, Topbar } from 'components';
import { useEffect, useMemo, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, darkTheme } from 'theme';
import { useSelector } from 'react-redux';
import { selectUser } from 'persist';
import { setUser } from 'persist';
import { User } from 'models';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const mockProfile: User = {
  id: '5ce68e8e-671d-40f0-a569-ba79e196b2b8',
  name: 'Gabriel Monge',
  email: 'johndoe@email.com',
  createdAt: new Date().toLocaleDateString(),
  updatedAt: new Date().toLocaleDateString(),
  currentTheme: 'light',
  token: '123',
};

function App() {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const theme = useMemo(() => {
    return currentTheme === 'light' ? lightTheme : darkTheme;
  }, [currentTheme]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const sidebarOpen = localStorage.getItem('sidebarOpen');
    if (theme) {
      setCurrentTheme(theme as 'dark' | 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }

    if (sidebarOpen) {
      setSidebarOpen(sidebarOpen === 'true');
    } else {
      localStorage.setItem('sidebarOpen', 'false');
    }
    dispatch(setUser(mockProfile));
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const toggleSidebar = () => {
    localStorage.setItem('sidebarOpen', sidebarOpen ? 'false' : 'true');
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '10px',
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      />
      <BrowserRouter basename="/">
        <Topbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <Content
          sidebarOpen={sidebarOpen}
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
