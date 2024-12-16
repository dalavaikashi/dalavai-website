import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Container, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const LogoComponent = () => (
    <motion.div 
      className={styles.logoContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.svg 
        className={styles.logo} 
        viewBox="0 0 100 100"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.polygon 
          points="50,10 90,40 70,85 30,85 10,40"
          className={styles.logoShape}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.polygon 
          points="50,20 80,42 65,77 35,77 20,42"
          className={styles.logoInner}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      </motion.svg>
      <div className={styles.logoText}>
        <motion.span 
          className={styles.company}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Dalavai
        </motion.span>
        <motion.span 
          className={styles.infrastructure}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          INFRASTRUCTURE
        </motion.span>
      </div>
    </motion.div>
  );

  const DesktopNav = () => (
    <motion.div 
      className={styles.navItems}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {navItems.map((item, index) => (
        <motion.div
          key={item.label}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            href={item.href}
            color="primary"
            className={styles.navButton}
          >
            {item.label}
          </Button>
        </motion.div>
      ))}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          variant="contained"
          color="primary"
          className={styles.ctaButton}
        >
          Get Started
        </Button>
      </motion.div>
    </motion.div>
  );

  const MobileNav = () => (
    <div className={styles.drawer}>
      <div className={styles.mobileNavList}>
        {navItems.map((item) => (
          <motion.div 
            key={item.label}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              href={item.href}
              color="primary"
              fullWidth
              onClick={() => setMobileOpen(false)}
              className={styles.mobileNavButton}
            >
              {item.label}
            </Button>
          </motion.div>
        ))}
        <motion.div whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            className={styles.ctaButton}
          >
            Get Started
          </Button>
        </motion.div>
      </div>
    </div>
  );

  return (
    <AppBar 
      position="fixed" 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} 
      elevation={0}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters className={styles.toolbar}>
          <LogoComponent />
          {isMobile ? (
            <IconButton
              color="primary"
              aria-label="menu"
              onClick={() => setMobileOpen(true)}
              edge="end"
              className={styles.menuButton}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <DesktopNav />
          )}
          {mobileOpen && <MobileNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
