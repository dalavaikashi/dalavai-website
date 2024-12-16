import React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <AppBar position="fixed" className={styles.header} elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters className={styles.toolbar}>
          <div className={styles.logoContainer}>
            <svg className={styles.logo} viewBox="0 0 100 100">
              <polygon 
                points="50,10 90,40 70,85 30,85 10,40"
                className={styles.logoShape}
              />
              <polygon 
                points="50,20 80,42 65,77 35,77 20,42"
                className={styles.logoInner}
              />
            </svg>
            <div className={styles.logoText}>
              <span className={styles.company}>Dalavai</span>
              <span className={styles.infrastructure}>INFRASTRUCTURE</span>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
