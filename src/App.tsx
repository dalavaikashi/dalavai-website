import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.scss';

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    primary: {
      main: '#1e3d59',
    },
    secondary: {
      main: '#17b978',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
