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
} from '@mui/material';
import { AccountBalance, Dashboard, Paid } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

interface ItemProps {
  text: string;
  icon: JSX.Element;
  href: string;
}

export const Sidebar = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
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
          <List>
            {items.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => handleNavigation(item.href)}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    borderRadius: 1,
                  }}
                >
                  <Box
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexGrow: 1,
                      }}
                    >
                      <ListItemText primary={item.text} />

                      <ListItemIcon
                        sx={{
                          justifyContent: 'flex-end',
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                    </Box>
                    <Divider />
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
