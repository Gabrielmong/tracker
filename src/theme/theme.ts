import { createTheme, responsiveFontSizes } from '@mui/material';

const lightThemeSpec = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: 'secondary',
          '&::-webkit-scrollbar': {
            width: '0.5rem',
            height: '0.5rem',
          },
          '&::-webkit-scrollbar-track': {
            background: '#0f1c2b',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#314463',
            '&:hover': {
              background: '#345282',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1.2rem',
        },
      },
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#0f1c2b',
    },
    secondary: {
      main: '#123d61',
      contrastText: '#c9c9c9',
    },
    background: {
      default: '#ededed',
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Open',
  },
});

const darkThemeSpec = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: 'primary',
          '&::-webkit-scrollbar': {
            width: '0.5rem',
            height: '0.5rem',
          },
          '&::-webkit-scrollbar-track': {
            background: '#323232',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#474747',
            '&:hover': {
              background: '#666666',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1.2rem',
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#dddddd',
      dark: '#292929',
    },
    secondary: {
      main: '#474747',
      contrastText: '#949494',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  typography: {
    fontFamily: 'Segoe UI, Open',
  },
});

export const lightTheme = responsiveFontSizes(lightThemeSpec);
export const darkTheme = responsiveFontSizes(darkThemeSpec);
