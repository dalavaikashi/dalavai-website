import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import styles from './Location.module.scss';

const Location = () => {
  const contactInfo = [
    {
      icon: <PhoneIcon />,
      label: 'Phone',
      value: '+91 98450 89571',
      link: 'tel:+919845089571'
    },
    {
      icon: <EmailIcon />,
      label: 'Email',
      value: 'info@dalavaiinfra.com',
      link: 'mailto:info@dalavaiinfra.com'
    },
    {
      icon: <AccessTimeIcon />,
      label: 'Working Hours',
      value: 'Mon - Sat: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <section className={styles.location}>
      <Container maxWidth="lg">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <LocationOnIcon className={styles.headerIcon} />
          <Typography variant="h2" className={styles.title}>
            Visit Our Office
          </Typography>
          <Typography variant="subtitle1" className={styles.subtitle}>
            We'd love to hear from you and discuss your construction needs
          </Typography>
        </motion.div>

        <div className={styles.locationContent}>
          <motion.div
            className={styles.addressSection}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.addressCard}>
              <Typography variant="h3" className={styles.companyName}>
                Dalavai Infrastructure
              </Typography>
              <Typography variant="body1" className={styles.address}>
                #1/1, 1st Floor, 1st Main Road<br />
                Ganganagar Extension<br />
                Bangalore - 560032<br />
                Karnataka, India
              </Typography>

              <div className={styles.contactGrid}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className={styles.contactItem}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className={styles.contactIcon}>{info.icon}</div>
                    <div className={styles.contactDetails}>
                      <Typography variant="subtitle2" className={styles.contactLabel}>
                        {info.label}
                      </Typography>
                      {info.link ? (
                        <a href={info.link} className={styles.contactLink}>
                          {info.value}
                        </a>
                      ) : (
                        <Typography variant="body2" className={styles.contactValue}>
                          {info.value}
                        </Typography>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className={styles.ctaButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  color="primary"
                  className={styles.getDirections}
                  href="https://maps.app.goo.gl/UfpD4EZ3hibXeaAb9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.mapSection}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1943.5020850623569!2d77.56685075820202!3d13.035406197703514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17e76eb9b6a1%3A0x575e171c51283c9!2sDALAVAI%20INFRASTRUCTURE!5e0!3m2!1sen!2sin!4v1585124988310!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Dalavai Infrastructure Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </Container>
      <div className={styles.backgroundPattern}></div>
    </section>
  );
};

export default Location;
