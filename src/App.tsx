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
  id: 'b2998342-b128-4d0d-a7d3-5f4a16531ac4',
  name: 'Gabriel',
  lastName: 'Monge',
  email: 'gabriel.monge.lizano@gmail.com',
  createdAt: new Date('1688951753847'),
  updatedAt: new Date('1688951753847'),
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
