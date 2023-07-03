import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  Box,
} from '@mui/material';
import { useLocation } from 'react-router-dom';

export interface ItemProps {
  index?: number;
  text: string;
  icon: JSX.Element;
  href: string;
}

interface SidebarItemProps extends ItemProps {
  handleNavigation: (href: string) => void;
}

export const SidebarItem = ({
  index,
  text,
  icon,
  href,
  handleNavigation,
}: SidebarItemProps) => {
  const location = useLocation();
  return (
    <ListItem
      key={index}
      onClick={() => handleNavigation(href)}
      disablePadding
      sx={{
        backgroundColor:
          location.pathname === href ? 'background.default' : 'transparent',
        borderRadius: 1,
      }}
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
            <ListItemText primary={text} />

            <ListItemIcon
              sx={{
                justifyContent: 'flex-end',
              }}
            >
              {icon}
            </ListItemIcon>
          </Box>
          <Divider />
        </Box>
      </ListItemButton>
    </ListItem>
  );
};
