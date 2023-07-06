import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Content, Sidebar, Topbar } from 'components';
import { useEffect, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, darkTheme } from 'theme';
import { useSelector, useDispatch } from 'react-redux';
import { selectSettings, setUser, toggleSidebar, setTheme } from 'persist';
import { User } from 'models';
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
  const { currentTheme, sidebarOpen } = useSelector(selectSettings);
  const dispatch = useDispatch();

  const theme = useMemo(() => {
    return currentTheme === 'light' ? lightTheme : darkTheme;
  }, [currentTheme]);

  useEffect(() => {
    dispatch(setUser(mockProfile));
  }, [dispatch]);

  const toggleTheme = () => {
    dispatch(setTheme(currentTheme === 'light' ? 'dark' : 'light'));
  };

  const toggleSidebarAction = () => {
    dispatch(toggleSidebar());
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
        <Topbar toggleSidebar={toggleSidebarAction} sidebarOpen={sidebarOpen} />

        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebarAction}
        />

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
