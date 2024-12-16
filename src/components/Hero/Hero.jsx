import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ConstructionIcon from '@mui/icons-material/Construction';
import styles from './Hero.module.scss';

const Hero = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const statsData = [
    { number: '38+', label: 'Years Experience', icon: <EngineeringIcon /> },
    { number: '500+', label: 'Projects Completed', icon: <ConstructionIcon /> },
  ];

  return (
    <section className={styles.hero}>
      <Container maxWidth="lg">
        <Grid container spacing={4} className={styles.content}>
          <Grid item xs={12} md={8}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h1" className={styles.title}>
                Built on Moral
                <motion.span 
                  className={styles.highlight}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {' '}38 Years{' '}
                </motion.span>
                of Construction Excellence
              </Typography>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Typography variant="h2" className={styles.subtitle}>
                The Creative Leader in Commercial Building Construction Works
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
              className={styles.description}
            >
              <Typography variant="body1">
                Dalavai Infrastructure has been privileged to work on many different projects 
                across South India. We enjoy an excellent reputation for quality Constructions.
              </Typography>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 0.9 }}
              className={styles.ctaContainer}
            >
              <Button 
                variant="contained" 
                color="primary" 
                className={styles.primaryCta}
                endIcon={<ArrowForwardIcon />}
              >
                Start Your Project
              </Button>
              <Button 
                variant="outlined" 
                color="primary" 
                className={styles.secondaryCta}
              >
                View Our Work
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 1.2 }}
              className={styles.statsContainer}
            >
              {statsData.map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className={styles.statItem}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <Typography variant="h3" className={styles.statNumber}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body2" className={styles.statLabel}>
                    {stat.label}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </Grid>

          <Grid item xs={12} md={4}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUpVariants}
              transition={{ duration: 0.8, delay: 1.5 }}
              className={styles.achievement}
            >
              <Typography variant="body1">
                The workmanship adherence to time schedule and financial position 
                has been stated to be satisfactory by all the departments.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <div className={styles.backgroundPattern}></div>
      <motion.div 
        className={styles.gradientOverlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
};

export default Hero;
