import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Box,
  Typography,
  Button,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export const Topbar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
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
          <Button
            color="inherit"
            aria-label="open drawer"
            onClick={toggleSidebar}
            sx={{
              textTransform: 'none',
            }}
          >
            <Typography variant="h6" component="div">
              Tracker
            </Typography>
          </Button>
        </Toolbar>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Container>
    </AppBar>
  );
};
