import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import styles from './CompanyStats.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const CompanyStats = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [counters, setCounters] = useState({
    totalProjects: 0,
    yearsExperience: 0,
    happyClients: 0,
    teamMembers: 0
  });

  useEffect(() => {
    const targetValues = {
      totalProjects: 165,
      yearsExperience: 25,
      happyClients: 150,
      teamMembers: 45
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        let completed = true;

        Object.keys(targetValues).forEach(key => {
          if (prev[key] < targetValues[key]) {
            newCounters[key] = Math.min(
              prev[key] + Math.ceil(targetValues[key] / steps),
              targetValues[key]
            );
            completed = false;
          }
        });

        if (completed) {
          clearInterval(timer);
        }

        return newCounters;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const chartColors = {
    commercial: {
      background: 'rgba(46, 125, 50, 0.8)',
      border: 'rgba(46, 125, 50, 1)'
    },
    industrial: {
      background: 'rgba(76, 175, 80, 0.8)',
      border: 'rgba(76, 175, 80, 1)'
    },
    institutional: {
      background: 'rgba(129, 199, 132, 0.8)',
      border: 'rgba(129, 199, 132, 1)'
    },
    residential: {
      background: 'rgba(165, 214, 167, 0.8)',
      border: 'rgba(165, 214, 167, 1)'
    }
  };

  const projectData = {
    labels: ['Commercial', 'Industrial', 'Institutional', 'Residential'],
    datasets: [
      {
        label: 'Projects Completed',
        data: [45, 32, 28, 60],
        backgroundColor: [
          chartColors.commercial.background,
          chartColors.industrial.background,
          chartColors.institutional.background,
          chartColors.residential.background
        ],
        borderColor: [
          chartColors.commercial.border,
          chartColors.industrial.border,
          chartColors.institutional.border,
          chartColors.residential.border
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif',
            size: 12
          },
          color: '#2C3E50'
        }
      },
      title: {
        display: true,
        text: 'Project Distribution',
        font: {
          family: '"Inter", "Helvetica", "Arial", sans-serif',
          size: 16,
          weight: 600
        },
        color: '#2C3E50',
        padding: 20
      },
      tooltip: {
        backgroundColor: 'rgba(46, 125, 50, 0.9)',
        titleFont: {
          family: '"Inter", "Helvetica", "Arial", sans-serif',
          size: 14
        },
        bodyFont: {
          family: '"Inter", "Helvetica", "Arial", sans-serif',
          size: 13
        },
        padding: 12,
        cornerRadius: 8,
        displayColors: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif'
          },
          color: '#2C3E50'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            family: '"Inter", "Helvetica", "Arial", sans-serif'
          },
          color: '#2C3E50'
        }
      }
    }
  };

  const pieOptions = {
    ...chartOptions,
    scales: undefined,
    plugins: {
      ...chartOptions.plugins,
      title: {
        ...chartOptions.plugins.title,
        text: 'Project Type Distribution'
      }
    }
  };

  const statCards = [
    {
      title: 'Total Projects',
      value: counters.totalProjects,
      icon: '🏗️',
      description: 'Successfully completed projects across all categories'
    },
    {
      title: 'Years Experience',
      value: counters.yearsExperience,
      icon: '⭐',
      description: 'Years of excellence in construction'
    },
    {
      title: 'Happy Clients',
      value: counters.happyClients,
      icon: '😊',
      description: 'Satisfied clients and counting'
    },
    {
      title: 'Team Members',
      value: counters.teamMembers,
      icon: '👥',
      description: 'Dedicated professionals'
    }
  ];

  return (
    <section className={styles.companyStats}>
      <h2>Our Impact in Numbers</h2>
      <div className={styles.statsGrid}>
        {statCards.map((card, index) => (
          <div
            key={index}
            className={`${styles.statCard} ${activeCard === index ? styles.active : ''}`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className={styles.icon}>{card.icon}</div>
            <h3>{card.title}</h3>
            <div className={styles.value}>{card.value}</div>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.chartsContainer}>
        <div className={styles.chartWrapper}>
          <Bar data={projectData} options={chartOptions} />
        </div>
        <div className={styles.chartWrapper}>
          <Pie data={projectData} options={pieOptions} />
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
