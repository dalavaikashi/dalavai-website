import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <Container maxWidth="lg">
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" className={styles.title}>
              Built on Moral
              <span className={styles.highlight}> 38 Years</span> of
              Construction Excellence
            </Typography>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography variant="h2" className={styles.subtitle}>
              The Creative Leader in Commercial Building Construction Works
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.description}
          >
            <Typography variant="body1">
              Dalavai Infrastructure has been privileged to work on many different projects 
              across South India. We enjoy an excellent reputation for quality Constructions.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className={styles.achievement}
          >
            <Typography variant="body1">
              The workmanship adherence to time schedule and financial position 
              has been stated to be satisfactory by all the departments.
            </Typography>
          </motion.div>
        </div>
      </Container>
      <div className={styles.backgroundPattern}></div>
    </section>
  );
};

export default Hero;
