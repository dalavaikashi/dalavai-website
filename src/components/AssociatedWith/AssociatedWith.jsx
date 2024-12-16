import React from 'react';
import { Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import styles from './AssociatedWith.module.scss';

const partners = [
  { name: 'Ajax Fiori', logo: '/logos/ajax-fiori.svg' }
];

const AssociatedWith = () => {
  return (
    <section className={styles.associatedWith}>
      <Container maxWidth="lg">
        <motion.div
          className={styles.titleContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" className={styles.title}>
            Trusted by Industry Leaders
          </Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            Partnering with renowned organizations across diverse sectors
          </Typography>
        </motion.div>

        <motion.div 
          className={styles.logoGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className={styles.logoWrapper}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.logoCard}>
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`} 
                  className={styles.logo}
                />
                <motion.div 
                  className={styles.logoOverlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography variant="body2" className={styles.partnerName}>
                    {partner.name}
                  </Typography>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.trustBadge}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography variant="body1">
            Over 15+ years of successful partnerships and growing
          </Typography>
        </motion.div>
      </Container>
      <div className={styles.backgroundPattern}></div>
    </section>
  );
};

export default AssociatedWith;
