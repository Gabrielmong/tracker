import { Container, useMediaQuery, useTheme } from '@mui/material';
import { AnimatedRoutes } from 'components';
import { useState } from 'react';

export interface ContentProps {
  sidebarOpen: boolean;
  currentTheme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Content = ({
  sidebarOpen,
  currentTheme,
  toggleTheme,
}: ContentProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      maxWidth={false}
      component="main"
      sx={{
        height: 'calc(100vh - 64px)',
        width: isMobile ? '100%' : sidebarOpen ? 'calc(100% - 240px)' : '100%',
        marginLeft: isMobile ? 0 : sidebarOpen ? '240px' : '0',
        overflow: 'auto',
        p: 2,
        pt: '64px',
        bgcolor: 'background.default',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth={isMobile ? false : 'xl'}>
        <AnimatedRoutes currentTheme={currentTheme} 
                        toggleTheme={toggleTheme}
        />
      </Container>
    </Container>
  );
};
