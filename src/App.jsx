import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AssociatedWith from './components/AssociatedWith/AssociatedWith';
import PastProjects from './components/PastProjects/PastProjects';
import Location from './components/Location/Location';
import './App.scss';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
  },
  palette: {
    primary: {
      main: '#2E7D32', // Forest green
      light: '#4CAF50', // Lighter green
      dark: '#1B5E20', // Darker green
    },
    secondary: {
      main: '#81C784', // Soft green
      light: '#A5D6A7',
      dark: '#66BB6A',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8FFF9',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#34495E',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '8px',
          padding: '12px 28px',
          fontSize: '1rem',
          fontWeight: 500,
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 20px rgba(46, 125, 50, 0.15)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #2E7D32 30%, #4CAF50 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #1B5E20 30%, #2E7D32 90%)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 30px rgba(46, 125, 50, 0.12)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '24px',
          paddingRight: '24px',
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app" style={{ 
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f7f1 50%, #e8f5e9 100%)',
        minHeight: '100vh' 
      }}>
        <Header />
        <main>
          <Hero />
          <AssociatedWith />
          <PastProjects />
          <Location />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
