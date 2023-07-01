import { Container } from '@mui/material';
import { AnimatedRoutes } from 'components';
import { useState } from 'react';

export interface ContentProps {
  sidebarOpen: boolean;
  currentTheme: 'light' | 'dark';
}

export const Content = ({ sidebarOpen, currentTheme }: ContentProps) => {
  const [isMobile, setIsMobile] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  return (
    <Container
      maxWidth={false}
      component="main"
      sx={{
        height: '100vh',
        width: isMobile ? '100%' : sidebarOpen ? 'calc(100% - 240px)' : '100%',
        marginLeft: isMobile ? 0 : sidebarOpen ? '240px' : '0',
        overflow: 'auto',
        p: 3,
        bgcolor: 'background.default',
        transition: 'all 0.3s ease',
      }}
    >
      <Container maxWidth={isMobile ? false : 'xl'}>
        <AnimatedRoutes currentTheme={currentTheme} />
      </Container>
    </Container>
  );
};
