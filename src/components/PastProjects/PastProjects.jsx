import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import FactoryIcon from '@mui/icons-material/Factory';
import SchoolIcon from '@mui/icons-material/School';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from './PastProjects.module.scss';

const projects = [
  {
    title: 'Commercial Buildings',
    description: 'Modern office complexes and commercial spaces built with precision and quality.',
    image: '/projects/commercial.svg',
    category: 'Commercial',
    icon: <BusinessIcon />
  },
  {
    title: 'Industrial Projects',
    description: 'State-of-the-art industrial facilities and manufacturing units.',
    image: '/projects/industrial.svg',
    category: 'Industrial',
    icon: <FactoryIcon />
  },
  {
    title: 'Institutional Buildings',
    description: 'Educational institutions and research facilities designed for optimal functionality.',
    image: '/projects/institutional.svg',
    category: 'Institutional',
    icon: <SchoolIcon />
  },
  {
    title: 'Residential Complexes',
    description: 'High-quality residential buildings with modern amenities.',
    image: '/projects/residential.svg',
    category: 'Residential',
    icon: <HomeWorkIcon />
  }
];

const PastProjects = () => {
  return (
    <section className={styles.pastProjects}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <Typography variant="h2" className={styles.title}>
            Our Expertise
          </Typography>
          <Typography variant="body1" className={styles.subtitle}>
            Since a decade now we have executed several important and time-bound prestigious 
            works of large magnitude across various sectors.
          </Typography>
        </motion.div>

        <Grid container spacing={4} className={styles.projectGrid}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={project.title}>
              <motion.div
                className={styles.projectCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.title} className={styles.image} />
                  <div className={styles.overlay} />
                  <motion.div 
                    className={styles.category}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className={styles.categoryIcon}>{project.icon}</span>
                    {project.category}
                  </motion.div>
                </div>
                <motion.div 
                  className={styles.content}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Typography variant="h3" className={styles.projectTitle}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" className={styles.projectDescription}>
                    {project.description}
                  </Typography>
                  <motion.div 
                    className={styles.learnMore}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button 
                      endIcon={<ArrowForwardIcon />}
                      className={styles.learnMoreButton}
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={styles.footer}
        >
          <div className={styles.footerContent}>
            <Typography variant="body1" className={styles.footerText}>
              Our commitment to quality and timely delivery has earned us an excellent reputation 
              in the construction industry.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button 
                variant="contained" 
                color="primary"
                className={styles.viewAllButton}
                endIcon={<ArrowForwardIcon />}
              >
                View All Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
      <div className={styles.backgroundPattern}></div>
    </section>
  );
};

export default PastProjects;
