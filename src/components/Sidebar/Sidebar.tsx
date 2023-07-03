import {
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Divider,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AccountBalance, Dashboard, Paid } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ItemProps, SidebarItems } from './components';

const drawerWidth = 240;

export const Sidebar = ({
  sidebarOpen,
  toggleSidebar,
}: {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const items: ItemProps[] = [
    {
      text: 'Dashboard',
      icon: <Dashboard />,
      href: '/',
    },
    {
      text: 'Accounts',
      icon: <AccountBalance />,
      href: '/accounts',
    },
    {
      text: 'Transactions',
      icon: <Paid />,
      href: '/transactions',
    },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    if (isMobile) {
      toggleSidebar();
    }
  };

  const handleBackDropClick = () => {
    toggleSidebar();
  };

  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Drawer
        variant="persistent"
        open={sidebarOpen}
        sx={{
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box>
          <SidebarItems items={items} handleNavigation={handleNavigation} />
        </Box>
      </Drawer>

      {isMobile && sidebarOpen && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: 1,
            bgcolor: 'rgba(0,0,0,0.5)',
          }}
          onClick={handleBackDropClick}
        />
      )}
    </Box>
  );
};
