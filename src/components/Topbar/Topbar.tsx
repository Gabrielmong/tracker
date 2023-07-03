import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { AccountCircle, Menu, MenuOpen } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Topbar = ({
  toggleSidebar,
  sidebarOpen,
}: {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleMenu = () => {
    navigate('/profile');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        height: '64px',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: 0,
          }}
          disableGutters
        >
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
              mr: 2,
            }}
            onClick={toggleSidebar}
          >
            {sidebarOpen ? <MenuOpen /> : <Menu />}
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            onClick={() => {
              navigate('/');
            }}
          >
            Tracker
          </Typography>
        </Toolbar>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Button
            variant="text"
            sx={{
              textTransform: 'none',
            }}
            onClick={handleMenu}
            color="inherit"
          >
            <Typography
              variant="body1"
              sx={{
                mr: 1,
                textTransform: 'none',
              }}
            >
              {user?.name}
            </Typography>
            <AccountCircle />
          </Button>
        </Box>
      </Container>
    </AppBar>
  );
};
